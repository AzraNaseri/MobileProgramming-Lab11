import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(undefined);
const USER_KEY = "user";

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const login = (username) => setUser({ username });
	const logout = () => setUser(null);

	// Load user once when app starts
	useEffect(() => {
		(async () => {
			try {
				const stored = await AsyncStorage.getItem(USER_KEY);
				if (stored) setUser(JSON.parse(stored));
			} catch (e) {
				// ignore for lab
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	// Save user whenever it changes
	useEffect(() => {
		(async () => {
			try {
				if (user) {
					await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
				} else {
					await AsyncStorage.removeItem(USER_KEY);
				}
			} catch (e) {
				// ignore for lab
			}
		})();
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, login, logout, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used inside AuthProvider");
	}
	return context;
}
