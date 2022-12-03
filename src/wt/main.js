/*
main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
data - value from worker in case of success or null in case of error in worker
*/
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { pathResolve } from '../fs/helpers.js';

const performCalculations = async () => {
    const workerFile = pathResolve('../../wt/worker.js');
    const arr = [];

    for (let i = 0; i < cpus().length; i++) {
        arr.push(new Promise(
            (resolve, reject) => {
                const worker = new Worker(workerFile, {
                    workerData: 10 + i,
                });
                
                worker.on('message', (value) => {
                    resolve({
                        status: 'resolved',
                        data: value });
                  });
          
                worker.on('error', () => {
                    reject({
                        status: 'error',
                        data: null
                    });
                });
            }
        ))
    }

    const result = await Promise.all(arr);
    console.log(result);
};

await performCalculations();
