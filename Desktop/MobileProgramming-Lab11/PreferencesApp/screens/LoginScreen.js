import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen() {
	const [username, setUsername] = useState("");
	const { login } = useAuth();

	const handleLogin = () => {
		if (!username.trim()) return;
		login(username.trim());
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>

			<TextInput
				placeholder="Enter username"
				value={username}
				onChangeText={setUsername}
				style={styles.input}
			/>

			<Pressable style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", padding: 24, gap: 12 },
	title: { fontSize: 28, fontWeight: "700", textAlign: "center" },
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 12,
		borderRadius: 10,
	},
	button: {
		backgroundColor: "#111",
		padding: 12,
		borderRadius: 10,
		alignItems: "center",
	},
	buttonText: { color: "white", fontWeight: "700" },
});
