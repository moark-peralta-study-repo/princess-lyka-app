import { Pressable, View, Text, StyleSheet } from "react-native";

export default function ProfileMenuItem({ icon, label, onPress }) {
	return (
		<Pressable
			style={({ pressed }) => [styles.row, pressed && { opacity: 0.7 }]}
			onPress={onPress}
		>
			<View style={styles.iconWrap}>{icon}</View>
			<Text style={styles.label}>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		gap: 14,
		backgroundColor: "#eaeaea",
		paddingVertical: 14,
		paddingHorizontal: 16,
		borderRadius: 14,
		marginTop: 10,
	},
	iconWrap: {
		width: 24,
		alignItems: "center",
	},
	label: {
		fontSize: 14,
		fontWeight: "600",
	},
});
