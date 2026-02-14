import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	backdrop: { flex: 1, backgroundColor: "#000" },

	sheet: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "#fff",
		borderTopLeftRadius: 22,
		borderTopRightRadius: 22,
		padding: 16,

		shadowOpacity: 0.12,
		shadowRadius: 16,
		shadowOffset: { width: 0, height: -6 },
		elevation: 8,
	},

	handle: {
		alignSelf: "center",
		width: 56,
		height: 5,
		borderRadius: 999,
		backgroundColor: "#e5e7eb",
		marginBottom: 12,
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 14,
	},
	title: { fontSize: 14, fontWeight: "900", color: "#111827" },
	done: { fontSize: 12, fontWeight: "800", color: "#2b6cb0" },
});
