import React, { useRef, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	Dimensions,
} from "react-native";
import styles from "./styles";

import AuthDrawer from "../../components/auth/AuthDrawer/AuthDrawer";
import LoginForm from "../../components/auth/LoginForm/LoginForm";
import SignupForm from "../../components/auth/SignupForm/SignupForm";
import { Image } from "react-native";

const SHEET_H = Dimensions.get("window").height * 0.62;

export default function HomeScreen() {
	const drawerRef = useRef(null);
	const [mode, setMode] = useState("login");
	const [drawerOpen, setDrawerOpen] = useState(false);

	const openLogin = () => {
		setMode("login");
		drawerRef.current?.open();
	};

	const openSignup = () => {
		setMode("signup");
		drawerRef.current?.open();
	};

	return (
		<View style={styles.container}>
			{!drawerOpen ? (
				<View style={styles.centerContent}>
					<Image source={require("../../../assets/logo.png")} />

					<TouchableOpacity style={styles.btnDark} onPress={openLogin}>
						<Text style={styles.btnText}>Log In</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.btnBlue} onPress={openSignup}>
						<Text style={styles.btnText}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.headerArea}>
					<Text style={styles.title}>
						{mode === "login" ? "Login here" : "Create Account"}
					</Text>

					<Text style={styles.subtitle}>
						{mode === "login"
							? "Welcome back you’ve been missed!"
							: "Create an account so you can explore all the existing jobs"}
					</Text>
				</View>
			)}

			<AuthDrawer
				ref={drawerRef}
				sheetHeight={SHEET_H}
				onOpenChange={setDrawerOpen}
			>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.OS === "ios" ? "padding" : undefined}
				>
					{mode === "login" ? (
						<LoginForm
							onClose={() => drawerRef.current?.close()}
							onSwitch={() => setMode("signup")}
						/>
					) : (
						<SignupForm
							onClose={() => drawerRef.current?.close()}
							onSwitch={() => setMode("login")}
						/>
					)}
				</KeyboardAvoidingView>
			</AuthDrawer>
		</View>
	);
}
