const { initializeApp } = require('firebase/app');
const { getFirestore, useFirestoreEmulator, runTransaction, doc } = require('firebase/firestore');

const app = initializeApp({
  apiKey: 'AIzaSyDOCAbC123dEf456GhI789jKl012-MnO',
  projectId: 'demo-project',
});
const db = getFirestore(app);

useFirestoreEmulator(db, 'localhost', 8080);

(async () => {
  const userRef = doc(db, 'users', 'tmazeika');
  await runTransaction(db, async (txn) => {
    txn.set(userRef, { name: 'TJ Mazeika' });
  });
  await runTransaction(db, async (txn) => {
    txn.delete(userRef);
  });
  await runTransaction(db, async (txn) => {
    // Removing lines 22-25 suppresses the issue.
    const user = await txn.get(userRef);
    if (user.exists()) {
      throw new Error();
    }
    txn.set(userRef, { name: 'TJ Mazeika' });
  });
})();
