import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TextInput,
	ScrollView,
	Pressable,
} from "react-native";
import SearchBar from "../../components/ui/SearchBar/SearchBar";
import { styles } from "./styles";

export default function SearchScreen() {
	const [q, setQ] = useState("");

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
				<SearchBar
					mode="input"
					value={q}
					onChangeText={setQ}
					autoFocus
					onFilterPress={() => {}}
				/>

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
			</ScrollView>
		</SafeAreaView>
	);
}
