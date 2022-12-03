import { pathResolve } from '../fs/helpers.js';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
    const inputPath = pathResolve('../../zip/files/archive.gz');
    const outputPath = pathResolve('../../zip/files/fileToCompress2.txt');
    
    pipeline(
        createReadStream(inputPath),
        createUnzip(),
        createWriteStream(outputPath),
        (err) => { console.log(err) }
    );
};
 
await decompress();
