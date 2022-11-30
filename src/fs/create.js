import { writeFile } from 'node:fs/promises';
import { pathExists, pathResolve } from './helpers.js';

const create = async () => {
    const path = pathResolve('../files/fresh.txt');
    const hasFile = await pathExists(path); 

    if (hasFile) {
        throw new Error('FS operation failed ');
    }

    writeFile(path, 'I am fresh and young');
};

await create();
