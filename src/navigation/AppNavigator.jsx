import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Maintabs from "./Maintabs";
import AuthNavigator from "./AuthNavigator";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import ProductsDetails from "../screens/ProductDetails/ProductsDetails";
import CheckOutScreen from "../screens/CheckOutScreen/CheckOutScreen";
import EditProfileScreen from "../screens/EditProfileScreen/EditProfileScreen";
import AddressScreen from "../screens/AddressScreen/AddressScreen";
import BalanceScreen from "../screens/BalanceScreen/BalanceScreen";
import OrdersScreen from "../screens/OrdersScreen/OrdersScreen";
import NotificationSettingsScreen from "../screens/NotificationSettingsScreen/NotificationSettingsScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen/PaymentMethodScreen";
import OrderConfirmedScreen from "../screens/OrderConfirmedScreen/OrderConfirmedScreen";
import MyOrdersScreen from "../screens/MyOrders/MyOrders";
import CancelOrderScreen from "../screens/CancelOrder/CancelOrder";

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
				<Stack.Screen name="EditProfile" component={EditProfileScreen} />
				<Stack.Screen name="Address" component={AddressScreen} />
				<Stack.Screen name="Balance" component={BalanceScreen} />
				<Stack.Screen name="Orders" component={OrdersScreen} />
				<Stack.Screen
					name="Notification"
					component={NotificationSettingsScreen}
				/>

				<Stack.Screen name="OrderConfirmed" component={OrderConfirmedScreen} />
				<Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
				<Stack.Screen name="MyOrders" component={MyOrdersScreen} />
				<Stack.Screen name="CancelOrder" component={CancelOrderScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
