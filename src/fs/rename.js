import { rename as fsRename } from 'node:fs/promises';
import { pathExists, pathResolve } from './helpers.js';

const rename = async () => {
    const wrongFilePath = pathResolve('../files/wrongFilename.txt');
    const properFilePath = pathResolve('../files/properFilename.md');

    const wrongFileExists = await pathExists(wrongFilePath);
    const properFileExists = await pathExists(properFilePath);

    if (wrongFileExists || properFileExists) {
        throw new Error('FS operation failed');
    }

    fsRename(wrongFilePath, properFilePath);
};

await rename();
