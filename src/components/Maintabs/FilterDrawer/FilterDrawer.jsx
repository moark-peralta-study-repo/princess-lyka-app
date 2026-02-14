import React, { useEffect, useRef } from "react";
import {
	View,
	Text,
	Modal,
	Pressable,
	Animated,
	Dimensions,
	StyleSheet,
} from "react-native";
import { styles } from "./styles";

const { height: SCREEN_H } = Dimensions.get("window");

export default function FilterDrawer({
	visible,
	onClose,
	heightPct = 0.5,
	title = "Filter By",
	children,
}) {
	const SHEET_H = SCREEN_H * heightPct;

	const translateY = useRef(new Animated.Value(SHEET_H)).current;

	const backdropOpacity = translateY.interpolate({
		inputRange: [0, SHEET_H],
		outputRange: [0.45, 0],
		extrapolate: "clamp",
	});

	useEffect(() => {
		if (visible) {
			translateY.setValue(SHEET_H);
			Animated.timing(translateY, {
				toValue: 0,
				duration: 220,
				useNativeDriver: true,
			}).start();
		}
	}, [visible, SHEET_H, translateY]);

	const close = () => {
		Animated.timing(translateY, {
			toValue: SHEET_H,
			duration: 200,
			useNativeDriver: true,
		}).start(() => onClose?.());
	};

	if (!visible) return null;

	return (
		<Modal
			visible={visible}
			transparent
			animationType="none"
			onRequestClose={close}
		>
			<Pressable style={StyleSheet.absoluteFill} onPress={close}>
				<Animated.View
					style={[styles.backdrop, { opacity: backdropOpacity }]}
				/>
			</Pressable>

			<Animated.View
				style={[styles.sheet, { height: SHEET_H, transform: [{ translateY }] }]}
			>
				<View style={styles.handle} />

				<View style={styles.header}>
					<Text style={styles.title}>{title}</Text>
					<Pressable onPress={close}>
						<Text style={styles.done}>Done</Text>
					</Pressable>
				</View>
			</Animated.View>
		</Modal>
	);
}
