import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	safe: { flex: 1, backgroundColor: "#fff" },

	container: {
		paddingBottom: 28,
	},

	header: {
		height: 210,
		backgroundColor: "#2f7f86",
		borderBottomLeftRadius: 140,
		borderBottomRightRadius: 140,
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		fontSize: 26,
		fontWeight: "900",
		color: "#fff",
		marginTop: -18,
	},

	avatarWrap: {
		alignItems: "center",
		marginTop: -70,
	},
	avatarOuter: {
		width: 140,
		height: 140,
		borderRadius: 70,
		backgroundColor: "#f3e6d4",
		alignItems: "center",
		justifyContent: "center",
	},
	avatar: {
		width: 124,
		height: 124,
		borderRadius: 62,
		backgroundColor: "#ddd",
		borderWidth: 6,
		borderColor: "#fff",
	},

	content: {
		paddingHorizontal: 18,
		marginTop: 10,
	},

	name: {
		textAlign: "center",
		fontSize: 14,
		fontWeight: "900",
		color: "#6b4b2a",
		marginTop: 6,
	},

	locationRow: {
		marginTop: 4,
		flexDirection: "row",
		gap: 6,
		alignItems: "center",
		justifyContent: "center",
	},
	city: {
		fontSize: 12,
		color: "#9ca3af",
		fontWeight: "700",
	},

	section: {
		marginTop: 26,
		marginBottom: 10,
		fontSize: 13,
		fontWeight: "900",
		color: "#111827",
	},

	menuGroup: { gap: 10 },

	logoutWrap: { marginTop: 34, alignItems: "flex-start" },
	logoutBtn: {
		width: 160,
		alignSelf: "flex-start",
	},

	logoutText: {
		fontSize: 14,
		fontWeight: "900",
		color: "#7a5a00",
	},

	rotateIcon: {
		transform: "rotate(180deg)",
	},
});
