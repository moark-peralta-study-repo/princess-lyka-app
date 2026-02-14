import { useNavigation } from "@react-navigation/native";
import { Bell, SearchIcon, SlidersHorizontal } from "lucide-react-native";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCard from "../../ui/CategoryCard/CategoryCard";
import ProductCard from "../../ui/ProductCard/ProductCard";
import { styles } from "./styles";
import PromoCard from "../../ui/PromoCard/PromoCard";
import UserHeader from "../../ui/UserHeader/UserHeader";

export default function HomePage() {
	const navigation = useNavigation();

	function emulateSearch() {
		navigation.navigate("search");
	}

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView contentContainerStyle={styles.container}>
				<UserHeader />

				<View style={styles.searchRow}>
					<Pressable style={styles.searchPill} onPress={emulateSearch}>
						<SearchIcon size={18} color="#666" />
						<Text style={styles.searchPlaceholder}>Search</Text>
					</Pressable>

					<Pressable style={styles.filterBtn} onPress={() => {}}>
						<SlidersHorizontal size={18} color="#2b6cb0" />
					</Pressable>
				</View>

				<PromoCard />
			</ScrollView>
		</SafeAreaView>
	);
}
