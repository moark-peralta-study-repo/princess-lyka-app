import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const DUMMY = {
	1: { name: "Ollie Baked Beef Dish Dry Dog Food, 5 lbs.", price: "₱199.00" },
};

export default function ProductDetailsScreen() {
	const navigation = useNavigation();
	const route = useRoute();
	const { id } = route.params || {};

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
						<Text>{"<"}</Text>
					</Pressable>

					<View style={{ flex: 1, alignItems: "center" }}>
						<Text style={styles.deliver}>Deliver to</Text>
						<Text style={styles.addr}>5033 Lakeway Ct</Text>
					</View>

					<View style={styles.iconBtn} />
				</View>

				<View style={styles.hero} />

				<View style={styles.rowBetween}>
					<Text style={styles.title}>{product.name}</Text>
					<Text style={styles.price}>{product.price}</Text>
				</View>

				<Text style={styles.section}>Quantity</Text>
				<View style={styles.qtyRow}>
					<Pressable
						style={styles.qtyBtn}
						onPress={() => setQty(Math.max(1, qty - 1))}
					>
						<Text style={styles.qtyBtnText}>-</Text>
					</Pressable>
					<Text style={styles.qty}>{String(qty).padStart(2, "0")}</Text>
					<Pressable style={styles.qtyBtn} onPress={() => setQty(qty + 1)}>
						<Text style={styles.qtyBtnText}>+</Text>
					</Pressable>
				</View>

				<View style={styles.actionsRow}>
					<Pressable style={styles.actionBtn}>
						<Text>Buy Now</Text>
					</Pressable>
					<Pressable style={styles.actionBtn}>
						<Text>Add To Cart</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
}
