import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default class FirebaseUserService {
    static login = (auth, login, password, callback) => {
        signInWithEmailAndPassword(auth, login, password)
            .then((userCredential) => {
                callback(userCredential.user);
            })
            .catch((err) => {
                console.error(err);
                callback(null);
            });
    };

    static logout = (auth, callback) => {
        signOut(auth)
            .then(() => {
                callback(true);
            })
            .catch((err) => {
                console.error(err);
                callback(false);
            });
    };
}
