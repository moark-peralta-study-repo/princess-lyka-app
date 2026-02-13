import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import RegistrationCode from "../screens/RegistrationCode/RegistrationCode";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import VerificationCode from "../screens/VerificationCode/VerificationCode";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="RegistrationCode" component={RegistrationCode} />
			<Stack.Screen name="ResetPassword" component={ResetPassword} />
			<Stack.Screen name="VerificationCode" component={VerificationCode} />
		</Stack.Navigator>
	);
}
