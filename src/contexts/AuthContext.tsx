
import { createContext } from 'react';

interface User {
    displayName : string;
    email : string;
    photoURL ?: string
}

interface AuthContextType {
    user: User | null;
    loginWithGoogle: () => Promise<void>;
    logoutUser : () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null);
