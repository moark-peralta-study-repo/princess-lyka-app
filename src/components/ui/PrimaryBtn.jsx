import { View, Pressable, StyleSheet } from "react-native";

export default function PrimaryBtn({
	children,
	onPress,
	style,
	variant = "primary", // "primary" | "ghost"
}) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.btn,
				variant === "ghost" && styles.ghost,
				pressed && styles.pressed,
				style,
			]}
			android_ripple={{ color: "#b8dbe2" }}
		>
			<View style={styles.content}>{children}</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		height: 48,
		borderRadius: 14,
		backgroundColor: "#d6eef4",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 18,
		elevation: 6,
	},
	ghost: {
		backgroundColor: "#f3f4f6",
	},
	pressed: {
		opacity: 0.85,
		elevation: 2,
	},
	content: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
});
