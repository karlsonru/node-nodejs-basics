import { cp } from 'node:fs/promises';
import { pathExists, pathResolve } from './helpers.js';

const copy = async () => {
    const sourcePath = pathResolve('../files');
    const dstPath = pathResolve('../files_copy');

    const hasFolder = await pathExists(dstPath);
    if (hasFolder) throw new Error('FS operation failed');
  
    cp(sourcePath, dstPath, { recursive: true });
};

copy();
