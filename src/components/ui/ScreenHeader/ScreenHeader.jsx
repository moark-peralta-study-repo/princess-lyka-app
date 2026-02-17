import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Bell, ChevronLeft } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenHeader({
	title,
	onBack,
	right = "bell", // "bell" | "none" | ReactNode
}) {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();

	const handleBack = () => {
		if (onBack) return onBack();
		navigation.goBack();
	};

	return (
		<View style={[styles.row, { paddingTop: insets.top }]}>
			<Pressable style={styles.iconBtn} onPress={handleBack}>
				<ChevronLeft size={20} color="#111827" />
			</Pressable>

			<Text style={styles.title}>{title}</Text>

			{right === "none" ? (
				<View style={[styles.iconBtn, { opacity: 0 }]} />
			) : React.isValidElement(right) ? (
				right
			) : (
				<View style={styles.iconBtn}>
					<Bell size={18} color="#7a2e2e" />
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 12,
	},
	title: { fontSize: 16, fontWeight: "900", color: "#111827" },
	iconBtn: {
		width: 44,
		height: 44,
		borderRadius: 16,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#eef0f3",
		alignItems: "center",
		justifyContent: "center",
		elevation: 6,
	},
});
