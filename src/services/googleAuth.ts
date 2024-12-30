import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from './firebaseApp'

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

interface User {
    displayName: string;
    email: string;
    photoURL ?: string
}

export const signInWithGoogle = async () : Promise <User | null>  => {
try {
    googleProvider.setCustomParameters({
        prompt: 'select_account', 
      });
    const result = await signInWithPopup(auth,googleProvider)

    const user = result.user

    if (!user.displayName || !user.email) {
        console.warn('Required user fields are missing.');
        return null;
    }

    return {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || undefined,
    };
} catch (error) {
    console.log(error);
    return null
}
}

export const logout = async () => {
    try {
        await signOut(auth)
        localStorage.removeItem("user");

    } catch (error) {
        console.log(error);
    }
}