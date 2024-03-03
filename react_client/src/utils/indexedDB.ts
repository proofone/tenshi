
type DbResultType = [boolean, null | IDBDatabase];

let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version = 1;

export const initDB = (): Promise<boolean> => {
    return new Promise((resolve) => {
        // open the connection
        request = indexedDB.open('appDB');
        
        request.onupgradeneeded = () => {
            db = request.result;
            
            // if the data object store doesn't exist, create it
            if (!db.objectStoreNames.contains("users")) {
                console.log('Creating users indexedDB');
                db.createObjectStore("users", { keyPath: 'pk' });
            }
            // no need to resolve here
        };
        
        request.onsuccess = () => {
            db = request.result;
            version = db.version;
            console.log('request.onsuccess - initDB', version);
            resolve(true);
        };
        
        request.onerror = () => {
            resolve(false);
        };
    });
};

export async function createDB(dbname='appDB', storenames: string|string[] = ['users', 'posts']): Promise<DbResultType> {
    request = indexedDB.open(dbname);

    let retval: DbResultType = [false, db]
    request.onerror = (event) => {
        console.error("Error creating indexedDB " + dbname + ": " + event);
        retval = [false, null]
    };
    
    request.onupgradeneeded = () => {
        db = request.result;
        storenames = Array.from(storenames)
        
        // if the data object store doesn't exist, create it
        storenames.forEach(n => {
            if (!db.objectStoreNames.contains(n)) {
                console.log(`Creating ${n} indexedDB`);
                db.createObjectStore(n, { keyPath: 'pk' });
            }
        })
        retval = [true, db]
    };
    
    request.onsuccess = () => {
        db = request.result;
        version = db.version;
        console.log('request.onsuccess - initDB', version);
        
        retval = [true, db]
    };

    return retval
    
}
