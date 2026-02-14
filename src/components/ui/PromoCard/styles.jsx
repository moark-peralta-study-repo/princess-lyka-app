import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	promoCard: {
		padding: 14,
		backgroundColor: "#bfe3ef",
		flexDirection: "row",
		gap: 12,
		overflow: "hidden",
		marginHorizontal: -16,
		paddingVertical: 50,
	},
	promoImg: {
		width: 120,
		borderRadius: 16,
		backgroundColor: "#e7a93a",
	},
	promoLabel: { fontSize: 11, fontWeight: "700", color: "#1f2937" },
	promoTitle: {
		fontSize: 18,
		fontWeight: "800",
		color: "#111827",
		marginTop: 2,
	},
	promoDesc: { fontSize: 11, color: "#374151", marginTop: 6, maxWidth: 180 },
	promoBtn: {
		marginTop: 10,
		alignSelf: "flex-start",
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 12,
		backgroundColor: "#0b6b7a",
	},
	promoBtnText: { color: "#fff", fontSize: 12, fontWeight: "700" },
});
