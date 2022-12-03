import { pathResolve } from '../fs/helpers.js';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const inputPath = pathResolve('../../zip/files/fileToCompress.txt');
    const outputPath = pathResolve('../../zip/files/archive.gz');
    
    pipeline(
        createReadStream(inputPath),
        createGzip(),
        createWriteStream(outputPath),
        (err) => { console.log(err) }
    );
};

await compress();
