type DbResultType = [boolean, null | IDBDatabase];
export declare const initDB: () => Promise<boolean>;
export declare function createDB(dbname?: string, storenames?: string | string[]): Promise<DbResultType>;
export {};
