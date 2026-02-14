import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
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
	title: { fontSize: 12, fontWeight: "900", color: "#111827" },
	meta: { marginTop: 4, fontSize: 10, color: "#9ca3af", fontWeight: "700" },

	controlsRow: {
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
	qty: { width: 18, textAlign: "center", fontWeight: "900", color: "#111827" },
	trashBtn: {
		width: 30,
		height: 30,
		borderRadius: 12,
		backgroundColor: "#f0f2f5",
		alignItems: "center",
		justifyContent: "center",
	},
});
