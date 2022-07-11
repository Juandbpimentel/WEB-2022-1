import {
    collection,
    query,
    onSnapshot,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    getDoc,
    orderBy,
} from 'firebase/firestore';

export default class TeacherService {
    static unscribe = null;

    static list_onSnapshot = (firestore, callback) => {
        const q = query(collection(firestore, 'teachers'), orderBy('name'));

        TeacherService.unscribe = onSnapshot(q, (querySnapshot) => {
            let teachers = [];
            querySnapshot.forEach((doc) => {
                const { name, salary, university, degree } = doc.data();
                teachers.push({
                    _id: doc.id,
                    name,
                    salary,
                    degree,
                    university,
                });
            });

            callback(teachers);
        });
    };

    static retrieve = (firestore, callback, _id) => {
        const docRef = doc(firestore, 'teachers', _id);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) callback(docSnap.data());
            })
            .catch((err) => console.log(err));
    };

    static create = (firestore, callback, body) => {
        addDoc(collection(firestore, 'teachers'), body)
            .then((doc) => callback(doc.id))
            .catch((err) => console.log(err));
    };

    static update = (firestore, callback, _id, body) => {
        const docRef = doc(firestore, 'teachers', _id);
        updateDoc(docRef, body)
            .then(() => callback(_id))
            .catch((err) => console.log(err));
    };

    static delete = (firestore, callback, _id) => {
        const docRef = doc(firestore, 'teachers', _id);
        deleteDoc(docRef)
            .then(() => callback(_id))
            .catch((err) => {console.log(err);callback(null)});
    };
}
