import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },
	container: {
		padding: 16,
		paddingBottom: 32,
		gap: 14,
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
		marginBottom: 15,
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
