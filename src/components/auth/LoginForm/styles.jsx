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
		borderRadius: 8,
		backgroundColor: "#6b5b3d",
		alignItems: "center",
	},
	primaryText: { color: "white", fontWeight: "700" },

	secondaryBtn: {
		marginTop: 12,
		paddingVertical: 8,
		borderRadius: 8,
		backgroundColor: "#fffdfd",
	},

	secondaryText: {
		color: "#494949",
		fontWeight: 700,
	},

	switchRow: {
		marginTop: 10,
		alignItems: "center",
		backgroundColor: "#ffffff",
		paddingVertical: 6,
		borderRadius: 8,
	},
	switchText: { color: "black", fontWeight: "800" },

	forgotWrapper: {
		width: "100%",
		alignItems: "flex-end",
		marginTop: 6,
	},

	forgotText: {
		color: "#f6fafb",
		fontWeight: "500",
	},
});
