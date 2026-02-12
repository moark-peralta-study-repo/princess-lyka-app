import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import AuthBtn from "../../ui/AuthBtn/AuthBtn";
import LinkBtn from "../../ui/LinkBtn/LinkBtn";

export default function SignupForm({ onClose, onSwitch }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

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

			<AuthBtn>Signup</AuthBtn>

			<LinkBtn>
				<Text>
					Already have an account?
					<Text
						style={{
							fontWeight: "900",
							color: "#298693",
						}}
					>
						Login
					</Text>
				</Text>
			</LinkBtn>
		</View>
	);
}
