import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from '../keys/firebase_key';

export default class Firebase {
    constructor() {
        this.app = initializeApp(firebaseConfig);
    }

    getFirestoreDb() {
        return getFirestore(this.app);
    }

    getAuth() {
        return getAuth(this.app);
    }
}
