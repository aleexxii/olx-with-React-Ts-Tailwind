import { useState } from 'react'
import { signInWithGoogle } from '../services/googleAuth'
import { AuthContext } from './AuthContext'


interface User {
    displayName : string;
    email : string;
    photoURL ?: string
}

export const AuthProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null
    })

    const loginWithGoogle = async ():Promise<void> => {
        try {
            const  userData= await signInWithGoogle()
            if(userData){
                setUser(userData)
                localStorage.setItem('user',JSON.stringify(userData))
            }
        } catch (error) {
            console.log('Login Failed : ', error);
        }
    }

    return (
        <AuthContext.Provider value={{user, loginWithGoogle}} >
            {children}
        </AuthContext.Provider>
    )
}