declare function pathExists(path: string): PromiseLike<boolean>;

declare namespace pathExists {
  export function sync(path: string): boolean;
}

export = pathExists;
