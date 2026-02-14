import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../components/Maintabs/HomePage/HomePage";
import Cart from "../components/Maintabs/Cart/Cart";
import UserProfile from "../components/Maintabs/UserProfile/UserProfile";
import Wishlist from "../components/Maintabs/Wishlist/Wishlist";
import HomeIcon from "../../assets/home.svg";
import CartIcon from "../../assets/cart.svg";
import ProfileIcon from "../../assets/avatar.svg";
import WishlistIcon from "../../assets/wishlist.svg";

const Tab = createBottomTabNavigator();

export default function Maintabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ color, size }) => {
					if (route.name === "HomePage") {
						return <HomeIcon width={size} height={size} fill={color} />;
					}
					if (route.name === "Cart") {
						return <CartIcon width={size} height={size} fill={color} />;
					}
					if (route.name === "Profile") {
						return <ProfileIcon width={size} height={size} fill={color} />;
					}
					if (route.name === "Wishlist") {
						return <WishlistIcon width={size} height={size} fill={color} />;
					}
				},
			})}
		>
			<Tab.Screen name="HomePage" component={HomePage} />
			<Tab.Screen name="Cart" component={Cart} />
			<Tab.Screen name="Wishlist" component={Wishlist} />
			<Tab.Screen name="Profile" component={UserProfile} />
		</Tab.Navigator>
	);
}
