import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen({ navigation }) {
	const { user, logout } = useAuth();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome, {user?.username}</Text>

			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate("Settings")}
			>
				<Text style={styles.buttonText}>Go to Settings</Text>
			</Pressable>

			<Pressable style={[styles.button, styles.logout]} onPress={logout}>
				<Text style={styles.buttonText}>Logout</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 12,
	},
	text: { fontSize: 22, fontWeight: "600" },
	button: { backgroundColor: "#111", padding: 12, borderRadius: 10 },
	logout: { backgroundColor: "#b00020" },
	buttonText: { color: "white", fontWeight: "700" },
});
