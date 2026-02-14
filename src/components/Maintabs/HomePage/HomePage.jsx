import { useNavigation } from "@react-navigation/native";
import { SearchIcon, SlidersHorizontal } from "lucide-react-native";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import PromoCard from "../../ui/PromoCard/PromoCard";
import UserHeader from "../../ui/UserHeader/UserHeader";
import SearchBar from "../../ui/SearchBar/SearchBar";

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
			</ScrollView>
		</SafeAreaView>
	);
}
