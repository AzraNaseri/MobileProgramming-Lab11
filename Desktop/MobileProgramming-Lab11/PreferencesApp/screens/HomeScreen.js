import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function HomeScreen() {
	const { user, logout } = useAuth();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome, {user?.username}</Text>

			<Pressable style={styles.button} onPress={logout}>
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
	button: {
		backgroundColor: "#b00020",
		padding: 12,
		borderRadius: 10,
	},
	buttonText: { color: "white", fontWeight: "700" },
});
