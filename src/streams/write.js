import { pathResolve } from '../fs/helpers.js';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    const path = pathResolve('../../streams/files/fileToWrite.txt');
    const writeStream = createWriteStream(path, 'utf-8');
    stdin.pipe(writeStream);
};

await write();