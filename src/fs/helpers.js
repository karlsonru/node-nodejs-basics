import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const fsPromises = fs.promises;

export const pathExists = async (path) => {
  return fsPromises.access(path, fs.constants.F_OK).then(() => true, () => false);
};

export const pathResolve = (filePath) => {
  const __filename = fileURLToPath(import.meta.url);
  return path.resolve(__filename, filePath);
};
