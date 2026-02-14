import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#e9e9e9" },
	container: { padding: 16, paddingBottom: 24, backgroundColor: "#ffffff" },

	searchWrap: {
		height: 44,
		borderRadius: 14,
		backgroundColor: "#fff",
		paddingHorizontal: 12,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	searchInput: { flex: 1, height: 44, color: "#111827", fontSize: 13 },
	filterIcon: {
		width: 18,
		height: 18,
		borderRadius: 6,
		backgroundColor: "#c9d1d9",
	},

	rowBetween: {
		marginTop: 14,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	sectionTitle: { fontSize: 13, fontWeight: "800", color: "#9a5b00" },
	clearAll: { fontSize: 11, color: "#9a5b00", fontWeight: "700" },

	chipsWrap: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 10 },
	chip: {
		paddingHorizontal: 10,
		paddingVertical: 6,
		borderRadius: 12,
		backgroundColor: "#d6eef4",
		borderWidth: 1,
		borderColor: "#777879",
	},
	chipText: { fontSize: 11, color: "#0b6b7a", fontWeight: "700" },

	listItem: {
		flexDirection: "row",
		gap: 12,
		padding: 12,
		backgroundColor: "#fff",
		alignItems: "center",
	},
	itemThumb: {
		width: 44,
		height: 44,
		borderRadius: 14,
		backgroundColor: "#f0f2f5",
	},
	itemTitle: { fontSize: 12, fontWeight: "800", color: "#111827" },
	badgesRow: { flexDirection: "row", gap: 8, marginTop: 6 },
	badge: {
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 100,
		backgroundColor: "#F5CB58",
	},
	badgeText: { fontSize: 10, fontWeight: "900", color: "#ffffff" },
});
