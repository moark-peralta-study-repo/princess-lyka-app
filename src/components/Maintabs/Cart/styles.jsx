import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },
	container: { flex: 1, padding: 16 },

	topRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 12,
	},

	iconBtn: {
		width: 44,
		height: 44,
		borderRadius: 16,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#eef0f3",
		alignItems: "center",
		justifyContent: "center",
	},

	title: { fontSize: 16, fontWeight: "900", color: "#111827" },

	list: { paddingTop: 6, gap: 14 },

	cartItem: {
		flexDirection: "row",
		gap: 12,
		backgroundColor: "#f3fbff",
		borderRadius: 18,
		padding: 12,
	},

	imgWrap: {
		width: 74,
		height: 74,
		borderRadius: 14,
		backgroundColor: "#95c7d6",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	},

	img: {
		width: 64,
		height: 64,
		borderRadius: 12,
		backgroundColor: "#e5e7eb",
	},

	mid: { flex: 1 },

	itemTitle: { fontSize: 12, fontWeight: "900", color: "#111827" },
	itemMeta: { marginTop: 4, fontSize: 10, color: "#9ca3af", fontWeight: "700" },

	qtyRow: {
		marginTop: 10,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},

	circleBtn: {
		width: 26,
		height: 26,
		borderRadius: 999,
		backgroundColor: "#f5d27a",
		alignItems: "center",
		justifyContent: "center",
	},

	qtyText: {
		width: 18,
		textAlign: "center",
		fontWeight: "900",
		color: "#111827",
	},

	trashBtn: {
		width: 30,
		height: 30,
		borderRadius: 12,
		backgroundColor: "#f0f2f5",
		alignItems: "center",
		justifyContent: "center",
	},

	checkoutBtn: {
		position: "absolute",
		left: 16,
		right: 16,
		bottom: 18,
		height: 54,
		borderRadius: 16,
		backgroundColor: "#bfe3ef",
		alignItems: "center",
		justifyContent: "center",

		shadowOpacity: 0.12,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 6 },
		elevation: 4,
	},

	checkoutText: { fontSize: 14, fontWeight: "900", color: "#7a5a00" },
});
