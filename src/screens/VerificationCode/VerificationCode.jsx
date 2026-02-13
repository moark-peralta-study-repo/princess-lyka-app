import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function VerificationCode() {
	const navigation = useNavigation();

	function emulateVerification() {
		navigation.navigate("Maintabs");
	}

	return (
		<View>
			<Text>Verification Code</Text>
			<TouchableOpacity
				style={{ padding: 8, backgroundColor: "pink" }}
				onPress={emulateVerification}
			>
				<Text>Verify</Text>
			</TouchableOpacity>
		</View>
	);
}
