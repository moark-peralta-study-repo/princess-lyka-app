import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },

	headerRow: {
		paddingHorizontal: 16,
		paddingTop: 20,
		paddingBottom: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	headerTitle: { fontSize: 20, fontWeight: "900", color: "#6b4b2a" },
	iconBtn: {
		width: 40,
		height: 40,
		borderRadius: 14,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#eef0f3",
	},

	segmentWrap: {
		marginHorizontal: 16,
		marginTop: 6,
		marginBottom: 10,
		backgroundColor: "#e5e7eb",
		borderRadius: 12,
		padding: 4,
		flexDirection: "row",
		gap: 6,
	},
	segmentBtn: {
		flex: 1,
		height: 36,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	segmentActive: { backgroundColor: "#fff" },
	segmentText: { fontSize: 12, fontWeight: "800", color: "#9ca3af" },
	segmentTextActive: { color: "#111827" },

	list: { padding: 16, paddingBottom: 24, gap: 14 },

	card: {
		flexDirection: "row",
		gap: 12,
		backgroundColor: "#fff",
		borderRadius: 16,
		borderWidth: 1,
		borderColor: "#eef0f3",
		padding: 12,
	},
	cardLeft: { width: 90 },
	thumb: {
		width: 90,
		height: 90,
		borderRadius: 12,
		backgroundColor: "#f0f2f5",
	},
	cardMid: { flex: 1 },
	cardRight: { width: 110, alignItems: "flex-end" },

	date: { fontSize: 12, color: "#9ca3af", fontWeight: "700" },
	title: { fontSize: 13, fontWeight: "900", color: "#111827", marginTop: 4 },
	meta: { fontSize: 11, color: "#9ca3af", fontWeight: "700", marginTop: 2 },

	actionsRow: { flexDirection: "row", gap: 10, marginTop: 10 },

	pillBtn: {
		paddingHorizontal: 10,
		paddingVertical: 7,
		borderRadius: 999,
	},
	pillText: { fontSize: 10, fontWeight: "900" },

	cancelBtn: { backgroundColor: "#ef4444" },
	cancelText: { color: "#fff" },

	trackBtn: { backgroundColor: "#111827" },
	trackText: { color: "#fff" },

	tag: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 999,
		backgroundColor: "#e5e7eb",
	},
	tagText: { fontSize: 10, fontWeight: "900", color: "#111827" },

	rowBetween: { flexDirection: "row", alignItems: "center", gap: 6 },
	moneySmall: { fontSize: 11, fontWeight: "800", color: "#9ca3af" },
	money: { fontSize: 12, fontWeight: "900", color: "#111827" },

	cardCompleted: {
		flexDirection: "row",
		gap: 12,
		backgroundColor: "#fff",
		borderRadius: 16,
		borderWidth: 1,
		borderColor: "#eef0f3",
		padding: 12,
		alignItems: "center",
	},
	thumb2: {
		width: 60,
		height: 60,
		borderRadius: 12,
		backgroundColor: "#f0f2f5",
	},

	tagGreen: { backgroundColor: "#dcfce7" },
	tagGreenText: { color: "#16a34a" },

	ratingPill: {
		flexDirection: "row",
		gap: 6,
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 6,
		borderRadius: 999,
		borderWidth: 1,
		borderColor: "#eef0f3",
		backgroundColor: "#fff",
	},
	ratingText: { fontSize: 10, fontWeight: "900", color: "#111827" },
});
