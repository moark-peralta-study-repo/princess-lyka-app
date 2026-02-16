import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },
	container: { flex: 1, padding: 16 },

	content: { paddingBottom: 24, gap: 12 },

	sectionTitle: {
		marginTop: 6,
		fontSize: 12,
		fontWeight: "900",
		color: "#111827",
	},

	selectRow: {
		marginTop: 8,
		borderRadius: 18,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#eef0f3",
		padding: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	sectionHeaderRow: {
		marginTop: 18,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	leftMini: { flexDirection: "row", gap: 10, alignItems: "center", flex: 1 },
	rightMini: { flexDirection: "row", gap: 10, alignItems: "center" },

	miniIconWrap: {
		width: 44,
		height: 44,
		borderRadius: 14,
		backgroundColor: "#f0f2f5",
		alignItems: "center",
		justifyContent: "center",
	},

	miniIcon: {
		width: 18,
		height: 18,
		borderRadius: 9,
		backgroundColor: "#fca5a5",
	},

	primaryText: { fontSize: 12, fontWeight: "900", color: "#111827" },
	secondaryText: {
		fontSize: 10,
		color: "#6b7280",
		fontWeight: "700",
		marginTop: 2,
	},

	gcashIcon: {
		width: 26,
		height: 26,
		borderRadius: 13,
		backgroundColor: "#2563eb",
		alignItems: "center",
		justifyContent: "center",
	},
	gcashText: { color: "#fff", fontWeight: "900" },

	orderBox: {
		marginTop: 8,
		borderRadius: 18,
		borderWidth: 1,
		borderColor: "#eef0f3",
		backgroundColor: "#fff",
		padding: 12,
		gap: 10,
	},

	rowBetween: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	rowLabel: { fontSize: 11, color: "#9ca3af", fontWeight: "800" },
	rowValue: { fontSize: 11, color: "#111827", fontWeight: "800" },
	bold: { fontWeight: "900", color: "#111827" },

	bottomBtn: {
		position: "absolute",
		left: 16,
		right: 16,
		bottom: 50,
	},
});
