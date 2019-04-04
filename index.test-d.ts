import {expectType} from 'tsd';
import pathExists = require('.');

expectType<Promise<boolean>>(pathExists('foo.ts'));
expectType<boolean>(pathExists.sync('foo.ts'));
