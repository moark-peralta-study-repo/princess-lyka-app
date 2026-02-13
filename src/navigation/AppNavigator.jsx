import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Maintabs from "./Maintabs";
import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Maintabs" component={Maintabs} />
				<Stack.Screen name="Auth" component={AuthNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
