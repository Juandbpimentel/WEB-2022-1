import {
    getDocs,
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

export default class StudentService {
    static unscribe = null;

    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'students'))
            .then((querySnapshot) => {
                let students = [];
                querySnapshot.forEach((doc) => {
                    const { name, course, ira } = doc.data();
                    students.push({
                        _id: doc.id,
                        name,
                        course,
                        ira,
                    });
                });

                callback(students);
            })
            .catch((err) => console.error(err));
    };

    static list_onSnapshot = (firestore, callback) => {
        const q = query(collection(firestore, 'students'), orderBy('name'));

        StudentService.unscribe = onSnapshot(q, (querySnapshot) => {
            let students = [];
            querySnapshot.forEach((doc) => {
                const { name, course, ira } = doc.data();
                students.push({
                    _id: doc.id,
                    name,
                    course,
                    ira,
                });
            });

            callback(students);
        });
    };

    static retrieve = async (firestore, callback, _id) => {
        const docRef = doc(firestore, 'students', _id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            callback(docSnap.data());
        } else {
            console.log('No such document!');
        }
    };

    static retrieve_promisse = (firestore, callback, _id) => {
        const docRef = doc(firestore, 'students', _id);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists) callback(docSnap.data());
            })
            .catch((error) => console.log(error));
    };

    static create = (firestore, callback, body) => {
        addDoc(collection(firestore, 'students'), body)
            .then((doc) => callback(doc.id))
            .catch((err) => console.error(err));
    };

    static update = (firestore, callback, _id, body) => {
        const docRef = doc(firestore, 'students', _id);
        updateDoc(docRef, body)
            .then(() => callback(_id))
            .catch((err) => console.error(err));
    };

    static delete = (firestore, callback, _id) => {
        const docRef = doc(firestore, 'students', _id);
        deleteDoc(docRef)
            .then(() => callback(_id))
            .catch((err) => console.error(err));
    };
}
