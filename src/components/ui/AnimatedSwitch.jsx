import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	interpolateColor,
} from "react-native-reanimated";

export default function AnimatedSwitch({ value, onToggle }) {
	const progress = useSharedValue(value ? 1 : 0);

	useEffect(() => {
		progress.value = withTiming(value ? 1 : 0, { duration: 200 });
	}, [value]);

	const animatedTrackStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			progress.value,
			[0, 1],
			["#e5e7eb", "#2f7f86"],
		);

		return {
			backgroundColor,
		};
	});

	const animatedThumbStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: progress.value * 22,
				},
			],
		};
	});

	return (
		<Pressable onPress={onToggle}>
			<Animated.View style={[styles.track, animatedTrackStyle]}>
				<Animated.View style={[styles.thumb, animatedThumbStyle]} />
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	track: {
		width: 50,
		height: 28,
		borderRadius: 20,
		justifyContent: "center",
		padding: 3,
	},
	thumb: {
		width: 22,
		height: 22,
		borderRadius: 11,
		backgroundColor: "#fff",
		elevation: 3,
	},
});
