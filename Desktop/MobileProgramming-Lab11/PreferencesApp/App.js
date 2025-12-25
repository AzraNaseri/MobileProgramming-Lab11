import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

import { AuthProvider, useAuth } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

function AppNavigator() {
	const { user, isLoading } = useAuth();

	// ⛔ Prevent screen flash before AsyncStorage loads
	if (isLoading) return null;

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{user ? (
					<>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Settings" component={SettingsScreen} />
					</>
				) : (
					<Stack.Screen name="Login" component={LoginScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default function App() {
	return (
		<AuthProvider>
			<AppNavigator />
		</AuthProvider>
	);
}
