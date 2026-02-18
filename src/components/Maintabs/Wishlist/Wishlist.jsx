import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { DUMMY_ITEMS } from "../../../data/dummyData";
import ProductCard from "../../ui/ProductCard/ProductCard";
import ScreenHeader from "../../ui/ScreenHeader/ScreenHeader";

export default function Wishlist() {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView
				contentContainerStyle={[styles.container, { paddingBottom: 175 }]}
				showsVerticalScrollIndicator={false}
			>
				<ScreenHeader title="Wishlist" onBack={undefined} />

				<View style={styles.metaWrap}>
					<Text style={styles.count}>365 Items</Text>
					<Text style={styles.sub}>in wishlist</Text>
				</View>

				<View style={styles.grid}>
					{DUMMY_ITEMS.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							title={product.title}
							price={product.price}
							onPress={() =>
								navigation.navigate("ProductDetails", { id: product.id })
							}
						/>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
