import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: { flex: 1, padding: 75, gap: 20 },
	headerRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: { color: "white", fontSize: 20, fontWeight: "800" },
	close: { color: "white", fontSize: 22 },

	input: {
		backgroundColor: "#e9eef5",
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 10,

		borderWidth: 2,
		borderColor: "#938b7d",
	},

	primaryBtn: {
		marginTop: 8,
		paddingVertical: 12,
		borderRadius: 10,
		backgroundColor: "#615030",
		alignItems: "center",
	},
	primaryText: { color: "white", fontWeight: "700" },

	switchRow: { marginTop: 10, alignItems: "center" },
	switchText: { color: "white" },
});
