import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import AuthBtn from "../../ui/AuthBtn/AuthBtn";
import { useNavigation } from "@react-navigation/native";

export default function SignupForm({ onClose, onSwitch }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const navigation = useNavigation();

	function emulateSignup() {
		navigation.navigate("Auth", { screen: "RegistrationCode" });
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerRow}>
				<TouchableOpacity onPress={onClose}>
					<Text style={styles.close}>✕</Text>
				</TouchableOpacity>
			</View>

			<TextInput
				placeholder="Email"
				value={name}
				onChangeText={setName}
				style={styles.input}
				placeholderTextColor={"#626262"}
			/>

			<TextInput
				placeholder="Password"
				value={email}
				onChangeText={setEmail}
				style={styles.input}
				placeholderTextColor={"#626262"}
			/>

			<TextInput
				placeholder="Confirm Password"
				value={email}
				onChangeText={setEmail}
				style={styles.input}
				placeholderTextColor={"#626262"}
			/>

			<AuthBtn onPress={emulateSignup}>Sign up</AuthBtn>

			<TouchableOpacity onPress={onSwitch} style={styles.switchRow}>
				<Text style={styles.switchText}>Already have an account? Login</Text>
			</TouchableOpacity>
		</View>
	);
}
