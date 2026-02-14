import { useNavigation } from "@react-navigation/native";
import { SearchIcon, SlidersHorizontal } from "lucide-react-native";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import PromoCard from "../../ui/PromoCard/PromoCard";
import UserHeader from "../../ui/UserHeader/UserHeader";
import SearchBar from "../../ui/SearchBar/SearchBar";
import CategoryCard from "../../ui/CategoryCard/CategoryCard";
import ProductCard from "../../ui/ProductCard/ProductCard";
import BestSellingCard from "../../ui/BestSellingCard/BestSellingCard";

export default function HomePage() {
	const navigation = useNavigation();

	function emulateSearch() {
		navigation.getParent()?.navigate("Search");
	}

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView contentContainerStyle={styles.container}>
				<UserHeader />
				<SearchBar
					mode="preview"
					onPress={emulateSearch}
					onFilterPress={() => {}}
				/>
				<PromoCard />

				<Text style={styles.sectionTitle}>Browse by Category</Text>
				<View style={styles.grid2}>
					<CategoryCard title="Accessories" subtitle="840 products" />
					<CategoryCard title="Food" subtitle="840 products" />
				</View>

				<Text style={styles.sectionTitle}>Featured Products</Text>
				<View style={styles.grid2}>
					<ProductCard title="Premium Cat Food" price="P35.00" />
					<ProductCard title="Premium Dog Food" price="P35.00" />
				</View>

				<Text style={styles.sectionTitle}>Best Selling Products</Text>

				<View style={styles.grid2}>
					<BestSellingCard title="Dog Leash" price="₱18.26" />
					<BestSellingCard title="Cat Food Royal Canin" price="₱101.8" />
				</View>

				<View style={styles.grid2}>
					<BestSellingCard title="Medicine For Cats" price="₱15.79" />
					<BestSellingCard title="Medicine For Dogs" price="₱9.50" />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
