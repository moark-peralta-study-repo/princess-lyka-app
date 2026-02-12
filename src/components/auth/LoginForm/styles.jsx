import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: { flex: 1, padding: 75, gap: 12 },
	headerRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: { color: "white", fontSize: 20, fontWeight: "800" },
	close: { color: "white", fontSize: 22 },
	sub: { color: "white", marginBottom: 10 },

	input: {
		backgroundColor: "#e9eef5",
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 10,

		borderWidth: 2,
		borderColor: "#938b7d",
	},

	primaryBtn: {
		marginTop: 12,
		paddingVertical: 12,
		borderRadius: 10,
		backgroundColor: "#6b5b3d",
		alignItems: "center",
	},
	primaryText: { color: "white", fontWeight: "700" },

	switchRow: { marginTop: 10, alignItems: "center" },
	switchText: { color: "white" },
});
