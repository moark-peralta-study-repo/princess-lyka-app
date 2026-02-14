import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },
	container: {
		padding: 16,
		paddingBottom: 32,
		gap: 14,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},

	searchPill: {
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

	searchInput: {
		flex: 1,
		height: 52,
		fontSize: 14,
		color: "#111827",
		paddingVertical: 0,
		paddingHorizontal: 0,
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
