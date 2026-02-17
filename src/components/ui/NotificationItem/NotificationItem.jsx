import { Text, StyleSheet, Switch, View } from "react-native";
import AnimatedSwitch from "../AnimatedSwitch";

export function NotificationItem({ label, value, onToggle }) {
	return (
		<View style={styles.row}>
			<Text style={styles.label}>{label}</Text>
			<AnimatedSwitch value={value} onToggle={onToggle} />
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#f3f4f6",
	},
	label: {
		fontSize: 14,
		fontWeight: "600",
		color: "#111827",
	},
});
