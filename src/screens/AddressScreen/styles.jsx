import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },
	container: { flex: 1, padding: 16 },

	content: {
		paddingHorizontal: 16,
		paddingBottom: 24,
	},

	sectionTitle: {
		marginTop: 10,
		fontSize: 13,
		fontWeight: "900",
		color: "#111827",
	},

	card: {
		borderWidth: 1,
		borderColor: "#e5e7eb",
		borderRadius: 12,
		paddingHorizontal: 12,
		paddingVertical: 12,
		backgroundColor: "#fff",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	cardActive: {
		borderColor: "#cbd5e1",
	},

	cardLeft: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		flex: 1,
		paddingRight: 10,
	},

	pinWrap: {
		width: 28,
		height: 28,
		borderRadius: 10,
		backgroundColor: "#f3f4f6",
		alignItems: "center",
		justifyContent: "center",
	},

	titleRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	cardTitle: {
		fontSize: 12,
		fontWeight: "900",
		color: "#111827",
	},
	cardSub: {
		marginTop: 3,
		fontSize: 11,
		fontWeight: "600",
		color: "#9ca3af",
	},

	defaultPill: {
		paddingHorizontal: 8,
		paddingVertical: 3,
		borderRadius: 999,
		backgroundColor: "#e5e7eb",
	},
	defaultText: {
		fontSize: 10,
		fontWeight: "900",
		color: "#6b7280",
	},

	radioOuter: {
		width: 18,
		height: 18,
		borderRadius: 999,
		borderWidth: 2,
		borderColor: "#d1d5db",
		alignItems: "center",
		justifyContent: "center",
	},
	radioOuterActive: {
		borderColor: "#111827",
	},
	radioInner: {
		width: 8,
		height: 8,
		borderRadius: 999,
		backgroundColor: "#111827",
	},

	addCard: {
		height: 46,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#d1d5db",
		backgroundColor: "#fff",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		marginTop: 4,
	},
	addText: {
		fontSize: 12,
		fontWeight: "900",
		color: "#111827",
	},

	applyBtn: {
		height: 52,
		borderRadius: 12,
		backgroundColor: "#bfe3ef",
	},
	applyText: {
		fontSize: 13,
		fontWeight: "900",
		color: "#7a5a00",
	},
});
