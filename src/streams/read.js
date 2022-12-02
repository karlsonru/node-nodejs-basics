import { pathResolve } from '../fs/helpers.js';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const path = pathResolve('../../streams/files/fileToRead.txt');
    const readStream = createReadStream(path, 'utf-8');
    readStream.pipe(stdout);
};

await read();
