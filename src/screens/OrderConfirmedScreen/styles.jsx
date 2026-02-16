import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: {
		flex: 1,
		backgroundColor: "#ffffff",
	},

	headerRow: {
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
	},

	iconBtn: {
		width: 44,
		height: 44,
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#f3f4f6",
	},

	headerTitle: {
		fontSize: 16,
		fontWeight: "900",
		color: "#111827",
	},

	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 24,
	},

	illusWrap: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
	},

	illus: {
		width: 240,
		height: 240,
	},

	title: {
		fontSize: 20,
		fontWeight: "900",
		color: "#111827",
		marginTop: 6,
	},

	sub: {
		fontSize: 13,
		color: "#6b7280",
		textAlign: "center",
		marginTop: 8,
		lineHeight: 18,
	},

	btns: {
		width: "100%",
		marginTop: 30,
		gap: 14,
	},

	fullBtn: {
		width: "100%",
	},

	ghostText: {
		fontSize: 14,
		fontWeight: "800",
		color: "#9ca3af",
	},

	primaryText: {
		fontSize: 14,
		fontWeight: "900",
		color: "#7a5a00",
	},
});
