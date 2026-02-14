import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import SearchBar from "../../components/ui/SearchBar/SearchBar";
import { styles } from "./styles";
import FilterDrawer from "../../components/Maintabs/FilterDrawer/FilterDrawer";
import ProductCard from "../../components/ui/ProductCard/ProductCard";
import UserHeader from "../../components/ui/UserHeader/UserHeader";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen() {
	const [q, setQ] = useState("");
	const [filterOpen, setFilterOpen] = useState(false);
	const [hasSearched, setHasSearched] = useState(false);

	const navigation = useNavigation();

	useEffect(() => {
		if (q.length > 0) {
			setHasSearched(true);
		}
	}, [q]);

	function emulateNavigateProductDetails() {
		navigation.navigate("ProductDetails", { id: 1 });
	}

	const recent = ["Cat food", "Leash", "Dog shampoo", "Treats"];
	const popular = [
		{ title: "Royal Canin Dog Food", badge: "HOT" },
		{ title: "Royal Canin Dog Food", badge: "NEW" },
		{ title: "Royal Canin Dog Food", badge: "NEW" },
		{ title: "Royal Canin Dog Food", badge: "HOT" },
	];

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView contentContainerStyle={styles.container}>
				<UserHeader />
				<SearchBar
					mode="input"
					value={q}
					onChangeText={(text) => {
						setQ(text);
						if (text.trim() === "") setHasSearched(false);
					}}
					autoFocus
					onSubmitEditing={() => setHasSearched(true)}
					onFilterPress={() => {
						setFilterOpen(true);
					}}
				/>

				{!hasSearched ? (
					<>
						<View style={styles.rowBetween}>
							<Text style={styles.sectionTitle}>Recent Searches</Text>
							<Pressable>
								<Text style={styles.clearAll}>Clear All</Text>
							</Pressable>
						</View>

						<View style={styles.chipsWrap}>
							{recent.map((t) => (
								<View key={t} style={styles.chip}>
									<Text style={styles.chipText}>{t}</Text>
								</View>
							))}
						</View>

						<Text style={[styles.sectionTitle, { marginTop: 14 }]}>
							Popular Search
						</Text>

						<View style={{ gap: 10, marginTop: 10 }}>
							{popular.map((p, idx) => (
								<View key={idx} style={styles.listItem}>
									<View style={styles.itemThumb} />
									<View style={{ flex: 1 }}>
										<Text style={styles.itemTitle}>{p.title}</Text>
										<View style={styles.badgesRow}>
											<View style={styles.badge}>
												<Text style={styles.badgeText}>{p.badge}</Text>
											</View>
										</View>
									</View>
								</View>
							))}
						</View>
					</>
				) : (
					<View style={styles.grid}>
						<ProductCard
							title="Weight Reduction Pet Food"
							price="₱28.00"
							id={1}
							onPress={emulateNavigateProductDetails}
						/>
						<ProductCard
							title="Weight Reduction Pet Food"
							price="₱28.00"
							id={1}
							onPress={emulateNavigateProductDetails}
						/>
						<ProductCard
							title="Weight Reduction Pet Food"
							price="₱28.00"
							id={1}
							onPress={emulateNavigateProductDetails}
						/>
						<ProductCard
							title="Weight Reduction Pet Food"
							price="₱28.00"
							id={1}
							onPress={emulateNavigateProductDetails}
						/>
					</View>
				)}
			</ScrollView>

			<FilterDrawer
				visible={filterOpen}
				onClose={() => setFilterOpen(false)}
				heightPct={0.5}
				title="Filter By"
			/>
		</SafeAreaView>
	);
}
