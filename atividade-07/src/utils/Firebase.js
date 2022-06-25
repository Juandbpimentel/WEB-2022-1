import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from '../keys/firebase_key';

export default class Firebase {
    static user = null;
    constructor() {
        this.app = initializeApp(firebaseConfig);
    }

    getFirestoreDb() {
        return getFirestore(this.app);
    }

    getAuthentication() {
        return getAuth(this.app);
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}
