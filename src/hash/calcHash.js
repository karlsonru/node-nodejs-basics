import { createHash } from 'node:crypto';
import { pathResolve } from '../fs/helpers.js';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
    const filePath = pathResolve('../../hash/files/fileToCalculateHashFor.txt');
    const data = await readFile(filePath, { encoding: 'utf8' });

    const hash = createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
};

const hex = await calculateHash();

console.log(hex);
