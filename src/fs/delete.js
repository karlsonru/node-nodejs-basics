import { rm } from 'node:fs/promises';
import { pathExists, pathResolve } from "./helpers.js";

const remove = async () => {
    const filePath = pathResolve('../files/fileToRemove.txt');
    const hasFile = await pathExists(filePath);

    if (!hasFile) {
        throw new Error('FS operation failed')
    } 

    rm(filePath);
};

await remove();
