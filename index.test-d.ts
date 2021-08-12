import {expectType} from 'tsd';
import {pathExists, pathExistsSync} from './index.js';

expectType<Promise<boolean>>(pathExists('foo.ts'));
expectType<boolean>(pathExistsSync('foo.ts'));
