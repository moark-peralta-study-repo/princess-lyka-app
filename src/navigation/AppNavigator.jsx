import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Maintabs from "./Maintabs";
import AuthNavigator from "./AuthNavigator";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import ProductsDetails from "../screens/ProductDetails/ProductsDetails";
import CheckOutScreen from "../screens/CheckOutScreen/CheckOutScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="Maintabs" component={Maintabs} />
				<Stack.Screen name="Auth" component={AuthNavigator} />
				<Stack.Screen name="Search" component={SearchScreen} />
				<Stack.Screen name="ProductDetails" component={ProductsDetails} />
				<Stack.Screen name="Checkout" component={CheckOutScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
