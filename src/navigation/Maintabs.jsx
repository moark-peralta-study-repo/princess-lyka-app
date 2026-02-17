import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../components/Maintabs/HomePage/HomePage";
import Cart from "../components/Maintabs/Cart/Cart";
import UserProfile from "../components/Maintabs/UserProfile/UserProfile";
import Wishlist from "../components/Maintabs/Wishlist/Wishlist";

import HomeIcon from "../../assets/home.svg";
import CartIcon from "../../assets/cart.svg";
import ProfileIcon from "../../assets/avatar.svg";
import WishlistIcon from "../../assets/wishlist.svg";
import CustomBottomBar from "../components/ui/CustomeBottomBar/CustomBottomBar";

const Tab = createBottomTabNavigator();

export default function Maintabs() {
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
			tabBar={(props) => <CustomBottomBar {...props} />}
		>
			<Tab.Screen name="HomePage" component={HomePage} />
			<Tab.Screen name="Cart" component={Cart} />
			<Tab.Screen name="Wishlist" component={Wishlist} />
			<Tab.Screen name="Profile" component={UserProfile} />
		</Tab.Navigator>
	);
}
