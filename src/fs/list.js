import { readdir } from 'node:fs/promises';
import { pathExists, pathResolve } from './helpers.js';

const list = async () => {
    const folderPath = pathResolve('../files');
    const folderExists = await pathExists(folderPath);

    if (!folderExists) {
        throw new Error('FS operation failed');
    }

    const files = await readdir(folderPath);

    for (let filename of files) {
        console.log(filename);
    }
};

await list();