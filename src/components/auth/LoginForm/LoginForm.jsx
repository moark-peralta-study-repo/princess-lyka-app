import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

export default function LoginForm({ onClose, onSwitch }) {
	return (
		<View style={styles.container}>
			<View style={styles.headerRow}>
				<TouchableOpacity onPress={onClose}>
					<Text style={styles.close}>✕</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.sub}>Welcome back you’ve been missed!</Text>

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

			<TouchableOpacity style={styles.primaryBtn}>
				<Text style={styles.primaryText}>Log In</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={onSwitch} style={styles.switchRow}>
				<Text style={styles.switchText}>Create new account</Text>
			</TouchableOpacity>
		</View>
	);
}
