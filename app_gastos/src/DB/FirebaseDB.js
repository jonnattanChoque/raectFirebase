import {HandleError} from "./HandleError";
import {db} from "./FirebaseConfig";
import {auth} from "./FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { collection, addDoc, getDoc, getDocs, where, onSnapshot, doc, updateDoc, deleteDoc} from 'firebase/firestore'

export default class FirebaseDB {

    async register(email, password) {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            return response.user;
        } catch (error) {
            throw HandleError(error);
        }
    }

    async login(email, password) {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return response.user;
        } catch (error) {
            throw HandleError(error);
        }
    }

    async logout() {
        try {
            await signOut(auth);
        } catch (error) {
            throw HandleError(error);
        }
    }

    async validSession() {
        try {
            return new Promise((resolve, reject) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject(false);
                    }
                });
            });
        } catch (error) {
            throw HandleError(error);
        }
    }

    async create(collectionName, data) {
        try {
            await addDoc(collection(db, collectionName), data);
            return true;
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

    async readOne(collectionName, id) {
        try {
            const docRef = doc(db, collectionName, id);
            const snapshot = await getDoc(docRef);
            return snapshot.data();
        } catch (error) {
            console.log(error);
        }
    }

    async update(collection, id, data) {
        try {
            console.log(collection, id, data);
            await updateDoc(doc(db, collection, id), data);
            return true
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