import { stdin, stdout } from 'node:process';
import { pipeline, Transform } from 'node:stream';

const transform = async () => {
    pipeline(
        stdin,
        new Transform({
            transform(chunk, encoding, callback) {
                callback(null, String(chunk).split('').reverse().join('') + '\n');
            },
        }),
        stdout,
        (err) => { console.log('failed with error: ' + err) });
};

await transform();
