import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { Animated } from "react-native";
import styles from "./styles";

const AuthDrawer = forwardRef(function AuthDrawer(
	{ sheetHeight, children, onOpenChange },
	ref,
) {
	const [open, setOpen] = useState(false);
	const translateY = useRef(new Animated.Value(sheetHeight)).current;

	const openSheet = () => {
		setOpen(true);
		onOpenChange?.(true);

		Animated.timing(translateY, {
			toValue: 0,
			duration: 280,
			useNativeDriver: true,
		}).start();
	};

	const closeSheet = () => {
		Animated.timing(translateY, {
			toValue: sheetHeight,
			duration: 220,
			useNativeDriver: true,
		}).start(({ finished }) => {
			if (finished) {
				setOpen(false);
				onOpenChange?.(false);
			}
		});
	};

	useImperativeHandle(ref, () => ({
		open: openSheet,
		close: closeSheet,
		isOpen: () => open,
	}));

	return (
		<Animated.View
			style={[
				styles.sheet,
				{ height: sheetHeight, transform: [{ translateY }] },
			]}
		>
			{children}
		</Animated.View>
	);
});

export default AuthDrawer;
