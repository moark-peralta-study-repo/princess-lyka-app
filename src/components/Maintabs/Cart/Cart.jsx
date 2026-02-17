import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import CartItemCard from "../../ui/CartItem/CartItem";
import { DUMMY_ITEMS } from "../../../data/dummyProducts";
import ScreenHeader from "../../ui/ScreenHeader/ScreenHeader";
import PrimaryBtn from "../../ui/PrimaryBtn";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Cart() {
	const [items, setItems] = useState(DUMMY_ITEMS);

	const navigation = useNavigation();
	const tabBarH = useBottomTabBarHeight();
	const inset = useSafeAreaInsets();

	function emulateCheckOut() {
		navigation.navigate("Checkout");
	}

	const inc = (id) =>
		setItems((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, qty: item.qty + 1 } : item,
			),
		);

	const dec = (id) =>
		setItems((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item,
			),
		);

	const remove = (id) =>
		setItems((prev) => prev.filter((item) => item.id !== id));

	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="Cart" />

				<ScrollView
					contentContainerStyle={[
						styles.list,
						{ paddingBottom: tabBarH + inset.bottom },
					]}
				>
					{items.map((item) => (
						<CartItemCard
							title={item.title}
							meta={item.meta}
							qty={item.qty}
							onDec={() => dec(item.id)}
							onInc={() => inc(item.id)}
							onRemove={() => remove(item.id)}
							key={item.id}
						/>
					))}

					<View style={{ height: 90 }} />

					<PrimaryBtn
						style={{ position: "absolute", left: 16, right: 16, bottom: 150 }}
						onPress={emulateCheckOut}
						variant={"primary"}
					>
						<Text style={styles.checkoutText}>Check Out</Text>
					</PrimaryBtn>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
