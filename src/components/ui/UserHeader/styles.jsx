import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	headerRow: {
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
		justifyContent: "space-between",
		marginBottom: 20,
		marginTop: 20,
	},

	headerCenter: {
		position: "absolute",
		left: 0,
		right: 0,
		alignItems: "center",
	},

	headerText: {
		marginLeft: 12,
	},

	avatar: {
		width: 48,
		height: 48,
		backgroundColor: "#ddd",
	},
	bell: {
		marginLeft: "auto",
		width: 44,
		height: 44,
		borderRadius: 16,
		backgroundColor: "#f0f2f5",
		alignItems: "center",
		justifyContent: "center",
	},

	welcome: {
		fontSize: 14,
		fontWeight: "700",
		color: "#888",
	},

	sub: {
		fontSize: 11,
		color: "#777",
		marginTop: 2,
	},

	city: {
		fontSize: 12,
		fontWeight: "700",
		color: "#2b6cb0",
	},
});
