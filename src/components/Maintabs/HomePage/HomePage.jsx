import { useNavigation } from "@react-navigation/native";
import { Bell, SearchIcon, SlidersHorizontal } from "lucide-react-native";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard from "../../ui/CategoryCard/CategoryCard";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { styles } from "./styles";

export default function HomePage() {
	const navigation = useNavigation();

	function emulateSearch() {
		navigation.navigate("search");
	}

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.headerRow}>
					<Image
						source={require("../../../../assets/avatar-dp.png")}
						style={styles.avatar}
					/>

					<View style={styles.headerCenter}>
						<Text style={styles.welcome}>Welcome, User</Text>
						<Text style={styles.sub}>Deliver to</Text>
						<Text style={styles.city}>Bacolor City</Text>
					</View>

					<View style={styles.bell}>
						<Bell size={18} color="#7a2e2e" />
					</View>
				</View>

				<View style={styles.searchRow}>
					<Pressable style={styles.searchPill} onPress={emulateSearch}>
						<SearchIcon size={18} color="#666" />
						<Text style={styles.searchPlaceholder}>Search</Text>
					</Pressable>

					<Pressable style={styles.filterBtn} onPress={() => {}}>
						<SlidersHorizontal size={18} color="#2b6cb0" />
					</Pressable>
				</View>

				<View>
					<View>
						<Text>Super Value Deals</Text>
						<Text>On all products</Text>
						<Text>Save more with coupons & up to 70% off </Text>
						<View>
							<View>
								<Text>Shop now</Text>
							</View>
						</View>

						{/* promo image*/}
						<View />

						{/* by category */}
						<Text>Browse by Category</Text>
						<View>
							<CategoryCard title="Accessories" subtitle="840 products" />
							<CategoryCard title="Food" subtitle="640 products" />
						</View>

						<Text>Features Products</Text>
						<View>
							<ProductCard />
							<ProductCard />
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
