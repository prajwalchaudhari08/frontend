import React, { createContext, ReactNode } from 'react';
import { View, Text } from 'react-native';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<string | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    return (
        <AuthContext.Provider value={"Test Value"}>
            {children}
        </AuthContext.Provider>
    );
};