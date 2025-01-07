import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import { app, db } from "./firebaseApp";
import { doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);


export const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    
    googleProvider.setCustomParameters({
        prompt: "select_account",
    });
    
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;


    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });

    if (!user.displayName || !user.email) {
      console.warn("Required user fields are missing.");
      return null;
    }

    return {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || undefined,
  };

  } catch (error) {
    console.log(error);
    return null;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};
