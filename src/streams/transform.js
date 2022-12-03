//transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout 
import { stdin, stdout } from 'node:process';
import { pipeline, Transform } from 'node:stream';
import { createWriteStream, createReadStream } from 'node:fs';

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
