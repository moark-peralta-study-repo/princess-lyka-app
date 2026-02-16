import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import { Bell, ChevronLeft, Minus, Plus, Star } from "lucide-react-native";

const DUMMY = {
	1: { name: "Ollie Baked Beef Dish Dry Dog Food, 5 lbs.", price: "₱199.00" },
};

export default function ProductDetailsScreen() {
	const navigation = useNavigation();
	const route = useRoute();
	const { id } = route.params || {};

	function emulateToCheckOut() {
		navigation.navigate("Checkout");
	}

	function emulateToAddToCart() {}

	const product = DUMMY[id] || {
		name: "Weight Reduction Pet Food",
		price: "₱28.00",
	};

	const [qty, setQty] = useState(2);

	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<View style={styles.topRow}>
					<Pressable style={styles.iconBtn} onPress={() => navigation.goBack()}>
						<ChevronLeft />
					</Pressable>

					<View style={{ flex: 1, alignItems: "center" }}>
						<Text style={styles.deliver}>Deliver to</Text>
						<Text style={styles.addr}>5033 Lakeway Ct</Text>
					</View>

					<View style={styles.iconBtn}>
						<Bell fill="#391713" />
					</View>
				</View>

				<View style={styles.hero} />

				<View style={styles.rowBetween}>
					<Text style={styles.title}>{product.name}</Text>
					<Text style={styles.price}>{product.price}</Text>
				</View>

				<View style={styles.metaRow}>
					<View style={styles.ratingRow}>
						<Text style={styles.star}>
							<Star fill="#eb9337" stroke="#eb9337" size={18} />
						</Text>
						<Text style={styles.ratingText}>4.5</Text>
						<Text style={styles.ratingText}>(15)</Text>
					</View>

					<Pressable>
						<Text style={styles.seeReview}>See Review</Text>
					</Pressable>
				</View>

				<Text style={styles.section}>Details</Text>
				<Text style={styles.detailsText}>
					Nike Dri-Fit is a polyester fabric designed to help you keep dry so
					you can more comfortably work harder, longer. More...
				</Text>

				<Text style={styles.section}>Quantity</Text>
				<View style={styles.qtyRow}>
					<Pressable
						style={styles.qtyBtn}
						onPress={() => setQty(Math.max(1, qty - 1))}
					>
						<Text style={styles.qtyBtnText}>
							<Minus stroke="#ffffff" size={14} />
						</Text>
					</Pressable>
					<Text style={styles.qty}>{String(qty).padStart(2, "0")}</Text>
					<Pressable style={styles.qtyBtn} onPress={() => setQty(qty + 1)}>
						<Text style={styles.qtyBtnText}>
							<Plus stroke="#ffffff" size={14} />
						</Text>
					</Pressable>
				</View>

				<View style={styles.actionsRow}>
					<PrimaryBtn style={{ flex: 1 }} onPress={emulateToCheckOut}>
						<Text>Buy now</Text>
					</PrimaryBtn>
					<PrimaryBtn style={{ flex: 1 }} onPress={() => {}}>
						<Text>Add to Cart</Text>
					</PrimaryBtn>
				</View>
			</View>
		</SafeAreaView>
	);
}
