import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { getThemeColors } from "../theme";

export default function SettingsScreen() {
	const { theme, toggleTheme } = useTheme();
	const c = getThemeColors(theme);

	return (
		<View style={[styles.screen, { backgroundColor: c.bg }]}>
			<View style={[styles.card, { backgroundColor: c.card }]}>
				<Text style={[styles.title, { color: c.text }]}>Settings</Text>
				<Text style={[styles.subtitle, { color: c.muted }]}>
					Customize your experience
				</Text>

				<View style={styles.row}>
					<View style={{ flex: 1 }}>
						<Text style={[styles.label, { color: c.text }]}>Theme</Text>
						<Text style={[styles.value, { color: c.muted }]}>Current: {theme}</Text>
					</View>

					<Pressable
						onPress={toggleTheme}
						style={({ pressed }) => [
							styles.pill,
							{ backgroundColor: c.primary, opacity: pressed ? 0.85 : 1 },
						]}
					>
						<Text style={styles.pillText}>Toggle</Text>
					</Pressable>
				</View>

				<Text style={[styles.hint, { color: c.muted }]}>
					Tip: Refresh the page — your theme stays saved.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: { flex: 1, padding: 20, justifyContent: "center" },
	card: {
		borderRadius: 18,
		padding: 18,
		shadowColor: "#000",
		shadowOpacity: 0.08,
		shadowRadius: 16,
		elevation: 3,
	},
	title: { fontSize: 26, fontWeight: "800" },
	subtitle: { marginTop: 6, fontSize: 14 },
	row: { marginTop: 18, flexDirection: "row", alignItems: "center", gap: 12 },
	label: { fontSize: 16, fontWeight: "700" },
	value: { marginTop: 2, fontSize: 13 },
	pill: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 999 },
	pillText: { color: "white", fontWeight: "800" },
	hint: { marginTop: 16, fontSize: 12 },
});
