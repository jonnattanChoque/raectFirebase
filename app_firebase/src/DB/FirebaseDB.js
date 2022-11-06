import {db} from "./FirebaseConfig";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from 'firebase/firestore'

export default class FirebaseDB {

    async create(collectionName, data) {
        try {
            await addDoc(collection(db, collectionName), data);
        } catch (error) {
            console.log(error);
        }
    }

    async read(collectionName) {
        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({...doc.data(), id: doc.id});
            });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async update(collection, id, data) {
        try {
            await updateDoc(doc(db, collection, id), data);
        } catch (error) {
            console.log(error);
        }
    }

    async delete(collection, id) {
        try {
            await deleteDoc(doc(db, collection, id));
        } catch (error) {
            console.log(error);
        }
    }
}
