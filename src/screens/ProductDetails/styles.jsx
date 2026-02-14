import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },
	container: { padding: 16, gap: 12 },

	topRow: { flexDirection: "row", alignItems: "center" },
	iconBtn: {
		width: 44,
		height: 44,
		borderRadius: 14,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#eef0f3",
		alignItems: "center",
		justifyContent: "center",
	},
	deliver: { fontSize: 11, color: "#6b7280", fontWeight: "700" },
	addr: { fontSize: 12, color: "#2b6cb0", fontWeight: "800" },

	hero: {
		height: 240,
		borderRadius: 18,
		backgroundColor: "#eaf2f5",
	},

	rowBetween: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 12,
	},
	title: { flex: 1, fontSize: 14, fontWeight: "900", color: "#111827" },
	price: { fontSize: 13, fontWeight: "900", color: "#2b6cb0" },

	section: { marginTop: 6, fontSize: 12, fontWeight: "800", color: "#111827" },
	qtyRow: { flexDirection: "row", alignItems: "center", gap: 12 },
	qtyBtn: {
		width: 34,
		height: 34,
		borderRadius: 10,
		backgroundColor: "#2b6cb0",
		alignItems: "center",
		justifyContent: "center",
	},
	qtyBtnText: { color: "#fff", fontSize: 16, fontWeight: "900" },
	qty: { fontSize: 12, fontWeight: "900" },

	actionsRow: { flexDirection: "row", gap: 12, marginTop: 10 },
	actionBtn: {
		flex: 1,
		height: 44,
		borderRadius: 14,
		backgroundColor: "#d6eef4",
		alignItems: "center",
		justifyContent: "center",
	},
});
