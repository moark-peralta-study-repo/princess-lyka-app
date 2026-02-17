import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },

	container: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },

	headerRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10,
	},
	iconBtn: {
		width: 44,
		height: 44,
		borderRadius: 14,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		elevation: 4,
		shadowColor: "#000",
	},
	headerTitle: {
		fontSize: 22,
		fontWeight: "900",
		color: "#6b4b2a",
	},

	content: { paddingBottom: 20 },

	// summary
	summaryRow: {
		marginTop: 10,
		flexDirection: "row",
		gap: 12,
	},
	thumbWrap: {
		width: 108,
		height: 108,
		borderRadius: 16,
		backgroundColor: "#f3f4f6",
		overflow: "hidden",
	},
	thumb: { width: "100%", height: "100%" },

	orderTitle: { fontSize: 14, fontWeight: "900", color: "#111827" },
	muted: { fontSize: 11, color: "#9ca3af", marginTop: 2 },
	metaRow: { marginTop: 10, flexDirection: "row", alignItems: "center" },
	mutedRight: { fontSize: 11, color: "#9ca3af", textAlign: "right" },

	infoRow: {
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	infoLabel: { fontSize: 12, fontWeight: "800", color: "#111827" },
	infoValue: { fontSize: 11, color: "#9ca3af" },

	sectionTitle: {
		marginTop: 18,
		fontSize: 18,
		fontWeight: "900",
		color: "#6b4b2a",
	},

	reasons: { marginTop: 10, gap: 10 },
	reasonRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	reasonText: { fontSize: 12, color: "#9ca3af", fontWeight: "700" },

	radioOuter: {
		width: 18,
		height: 18,
		borderRadius: 999,
		borderWidth: 1.5,
		borderColor: "#d1d5db",
		alignItems: "center",
		justifyContent: "center",
	},
	radioOuterActive: { borderColor: "#a16207" },
	radioInner: {
		width: 10,
		height: 10,
		borderRadius: 999,
		backgroundColor: "transparent",
	},
	radioInnerActive: { backgroundColor: "#a16207" },

	actions: { marginTop: 22, gap: 14 },
	cancelBtn: { backgroundColor: "#5c4a2a" },
	cancelBtnText: { fontWeight: "900", color: "#fff" },

	confirmBtn: { backgroundColor: "#bfe3ef" },
	confirmBtnText: { fontWeight: "900", color: "#6b4b2a" },

	// modal
	backdrop: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.25)",
	},
	modalWrap: {
		position: "absolute",
		left: 16,
		right: 16,
		top: "35%",
	},
	modalCard: {
		backgroundColor: "#fff",
		borderRadius: 18,
		padding: 18,
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#111827",
	},
	modalTitle: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: "900",
		color: "#6b4b2a",
	},
	modalSub: { marginTop: 6, fontSize: 11, color: "#9ca3af", fontWeight: "700" },

	modalBtn: { marginTop: 14, alignSelf: "stretch", backgroundColor: "#bfe3ef" },
	modalBtnText: { fontWeight: "900", color: "#6b4b2a", textAlign: "center" },
});
