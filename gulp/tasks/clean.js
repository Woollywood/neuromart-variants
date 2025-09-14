import { deleteAsync } from 'del';
import { path } from '../config/path.js';

export const clean = () => {
  return deleteAsync([path.clean]);
};
