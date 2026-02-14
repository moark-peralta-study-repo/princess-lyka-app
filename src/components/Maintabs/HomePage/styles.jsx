import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },
	container: {
		padding: 16,
		paddingBottom: 32,
		gap: 14,
	},

	headerRow: {
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
		justifyContent: "space-between",
		marginBottom: 20,
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
	searchIcon: {
		width: 18,
		height: 18,
		borderRadius: 6,
		backgroundColor: "#c9d1d9",
	},

	searchRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},

	searchPill: {
		flex: 1,
		height: 52,
		borderRadius: 16,
		backgroundColor: "#f1f3f6",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 14,
		gap: 10,
	},

	searchPlaceholder: {
		color: "#999",
		fontSize: 14,
	},

	filterBtn: {
		width: 44,
		height: 52,
		borderRadius: 16,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
