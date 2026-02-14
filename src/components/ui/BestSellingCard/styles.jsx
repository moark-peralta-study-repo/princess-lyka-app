import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	bestCard: {
		flex: 1,
		borderRadius: 16,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#eef0f3",
		overflow: "hidden",
	},

	bestImg: {
		height: 90,
		backgroundColor: "#f0f2f5",
	},

	bestMeta: {
		padding: 10,
		gap: 4,
	},

	bestTitle: {
		fontSize: 12,
		fontWeight: "800",
		color: "#111827",
	},

	bestPrice: {
		fontSize: 11,
		color: "#6b7280",
		fontWeight: "700",
	},
});
