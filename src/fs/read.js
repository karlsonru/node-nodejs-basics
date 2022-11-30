import { readFile } from 'node:fs/promises';
import { pathExists, pathResolve } from './helpers.js';

const read = async () => {
    const filePath = pathResolve('../files/fileToRead.txt');
    const hasFile = await pathExists(filePath);

    if (!hasFile) {
        throw new Error('FS operation failed');
    }

    const content = await readFile(filePath, { encoding: 'utf-8' });
    console.log(content);
};

await read();
