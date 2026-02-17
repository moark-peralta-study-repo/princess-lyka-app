import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	wrap: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 30,
		alignItems: "center",
	},

	bar: {
		width: "92%",
		height: 70,
		backgroundColor: "#fbf3d6",
		borderRadius: 26,
		borderWidth: 2,
		borderColor: "#2f7f86",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 24,

		elevation: 10,
		shadowColor: "#000",
		shadowOpacity: 0.12,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 6 },
	},

	item: {
		width: 44,
		height: 44,
		alignItems: "center",
		justifyContent: "center",
	},

	centerGap: {
		width: 64,
	},

	fabWrap: {
		position: "absolute",
		bottom: 20,
		alignSelf: "center",

		width: 92,
		height: 92,
		borderRadius: 46,
		backgroundColor: "#f6a94a",

		alignItems: "center",
		justifyContent: "center",

		shadowColor: "#000",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.3,
		shadowRadius: 12,
		elevation: 16,
	},

	fab: {
		width: 76,
		height: 76,
		borderRadius: 38,
		backgroundColor: "#2f7f86",

		alignItems: "center",
		justifyContent: "center",
	},

	fabPressed: {
		transform: [{ scale: 0.92 }],
		opacity: 1,
		elevation: 4,
	},

	fakeBot: {
		width: 34,
		height: 34,
		borderRadius: 10,
		backgroundColor: "#fcd34d",
	},

	profileDot: {
		position: "absolute",
		right: 22,
		bottom: 18,
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: "#22c55e",
	},
});
