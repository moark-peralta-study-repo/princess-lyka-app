import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import AuthBtn from "../../ui/AuthBtn/AuthBtn";

export default function LoginForm({ onClose, onSwitch }) {
	return (
		<View style={styles.container}>
			<View style={styles.headerRow}>
				<TouchableOpacity onPress={onClose}>
					<Text style={styles.close}>✕</Text>
				</TouchableOpacity>
			</View>

			<TextInput
				placeholder="Email"
				style={styles.input}
				placeholderTextColor={"#626262"}
			/>

			<TextInput
				placeholder="Password"
				style={styles.input}
				placeholderTextColor={"#626262"}
			/>

			<TouchableOpacity style={styles.forgotWrapper}>
				<Text style={styles.forgotText}>Forgot password?</Text>
			</TouchableOpacity>

			<AuthBtn>Login</AuthBtn>

			<TouchableOpacity onPress={onSwitch} style={styles.switchRow}>
				<Text style={styles.switchText}>Create new account</Text>
			</TouchableOpacity>
		</View>
	);
}
