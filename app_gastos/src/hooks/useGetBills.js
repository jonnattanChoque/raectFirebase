import { useState, useEffect } from 'react'
import { db } from '../DB/FirebaseConfig';
import { useAuth } from '../context/AuthContext';
import { collection, query, where, startAfter, limit, onSnapshot } from 'firebase/firestore'

export const useGetBills = () => {
    const { user, setTotalBills } = useAuth();
    const [bills, setBills] = useState([])
    const [lastBill, setLastBill] = useState(null)
    const [moreLoad, setMoreLoad] = useState(false)
    
    const loadMoreQuery = () => {
        if (lastBill !== null) setMoreLoad(!moreLoad);
    }

    useEffect(() => {
        //TODO: mirar como pasar esto a la clase FirebaseDB
        var querys = query();
        if (lastBill) {
            querys = query(
                collection(db, 'bills'),
                where('uid', '==', user.uid),
                limit(10),
                startAfter(lastBill)
            )
        }else {
            querys = query(
                collection(db, 'bills'),
                where('uid', '==', user.uid),
                limit(10)
            )
        }
        const unsuscribe = onSnapshot(querys, (querySnapshot) => {
            if (querySnapshot.size === 0) {
                setLastBill(null);
                console.log('No more bills');
                setBills(bills)
            } else {
                const last = querySnapshot.docs[querySnapshot.docs.length - 1]
                setLastBill(last);
                const allBills = [];
                var total = 0;
                querySnapshot.forEach((doc) => {
                    total += parseFloat(doc.data().amount);
                    allBills.push({ ...doc.data(), id: doc.id });
                });
                setTotalBills(total);
                allBills.push(...bills);
                allBills.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                })
                setBills(allBills);
            }
        })
        return unsuscribe;
    }, [user, moreLoad])
    return [bills, loadMoreQuery]
}

