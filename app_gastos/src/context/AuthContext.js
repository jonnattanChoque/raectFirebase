import React, {useEffect, useState} from 'react';
import FirebaseDB from '../DB/FirebaseDB';

const AuthContext = React.createContext();
const firebase = new FirebaseDB();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [billsTotal, setbillsTotal] = useState(0)
    const [loading, setLoading] = useState(true);

    const setTotalBills = (total) => {
        console.log(total)
        setbillsTotal(total)
    }
    useEffect(() => {
        (async () => {
            const cancelSubscription = await firebase.validSession().then((user) => {
                setUser(user);
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            });
            return cancelSubscription;
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ user, billsTotal, setTotalBills }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

const useAuth = () => React.useContext(AuthContext);

export {AuthContext, AuthProvider, useAuth };