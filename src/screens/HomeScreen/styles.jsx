import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f4f6f8",
	},

	centerContent: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 14,
	},

	headerArea: {
		position: "absolute",
		top: 150,
		left: 0,
		right: 0,
		alignItems: "center",
		paddingHorizontal: 24,
		zIndex: 5,
	},

	logo: {
		fontSize: 28,
		fontWeight: "800",
		color: "#0a7f8f",
		marginBottom: 24,
	},

	title: {
		fontSize: 22,
		fontWeight: "900",
		color: "#6b5b3d",
	},

	subtitle: {
		marginTop: 8,
		textAlign: "center",
		color: "#6b5b3d",
		fontWeight: "600",
		lineHeight: 20,
	},

	btnDark: {
		width: 240,
		paddingVertical: 14,
		borderRadius: 12,
		backgroundColor: "#6b5b3d",
		alignItems: "center",
	},

	btnBlue: {
		width: 240,
		paddingVertical: 14,
		borderRadius: 12,
		backgroundColor: "#0a8aa6",
		alignItems: "center",
	},

	btnText: {
		color: "white",
		fontWeight: "700",
	},
});
