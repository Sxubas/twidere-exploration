export default [
  {
    name: 'SQlite',
    description: 'For local storage the app uses SQLite, a relational BD that ideally can only be accessed within the app. In the TwidereDataProvider class, the database is created and the content values are inserted, on the methods shown below. On the fifth image we can see a query method to access the tables is used. Update and delete methods are also included, along with others.',
    images: [
      {
        src: 'sql-1.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\provider\\TwidereDataProvider.kt',
      },
      {
        src: 'sql-2.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\provider\\TwidereDataProvider.kt',
      },
      {
        src: 'sql-3.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\provider\\TwidereDataProvider.kt',
      },
      {
        src: 'sql-4.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\provider\\TwidereDataProvider.kt',
      },
      {
        src: 'sql-5.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\provider\\TwidereDataProvider.kt',
      },
    ],
  },
  {
    name: 'Cache',
    description: 'For cache the Twidere app uses DiskLruCache which is a Java implementation of a Disk-based LRU cache which specifically targets Android compatibility. The cache stores its data in a directory on the filesystem. This directory must be exclusive to the cache; the cache may delete or overwrite files from its directory. This cache limits the number of bytes that it will store on the filesystem. When the number of stored bytes exceeds the limit, the cache will remove entries in the background until the limit is satisfied. The project has a util folder which contains a cache folder with two classes that uses this library: DiskLRUFileCache and JsonCache.',
    images: [
      {
        src: 'cache-1.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\util\\cache\\DiskLRUFileCache.kt',
      },
      {
        src: 'cache-2.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\util\\cache\\DiskLRUFileCache.kt',
      },
      {
        src: 'cache-3.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\util\\cache\\JSONCache.kt',
      },
    ],
  },
];
