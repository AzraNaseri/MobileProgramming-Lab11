import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

export default function SettingsScreen() {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<View style={[styles.container, isDark ? styles.darkBg : styles.lightBg]}>
			<Text style={[styles.title, isDark ? styles.darkText : styles.lightText]}>
				Settings
			</Text>

			<Text style={[styles.text, isDark ? styles.darkText : styles.lightText]}>
				Current theme: {theme}
			</Text>

			<Pressable style={styles.button} onPress={toggleTheme}>
				<Text style={styles.buttonText}>Toggle Theme</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: "center", padding: 24, gap: 12 },
	lightBg: { backgroundColor: "#fff" },
	darkBg: { backgroundColor: "#111" },
	lightText: { color: "#111" },
	darkText: { color: "#fff" },
	title: { fontSize: 28, fontWeight: "700", textAlign: "center" },
	text: { fontSize: 18, textAlign: "center" },
	button: {
		backgroundColor: "#2f6fed",
		padding: 12,
		borderRadius: 10,
		alignItems: "center",
	},
	buttonText: { color: "white", fontWeight: "700" },
});
