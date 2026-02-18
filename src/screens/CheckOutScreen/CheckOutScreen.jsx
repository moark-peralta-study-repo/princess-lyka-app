import { useMemo, useState } from "react";
import { styles } from "./styles";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";
import CartItemCard from "../../components/ui/CartItem/CartItem";
import { CheckCircle2, ChevronRight } from "lucide-react-native";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import { DUMMY_ITEMS } from "../../data/dummyData";
import { useNavigation } from "@react-navigation/native";

export default function CheckoutScreen() {
	const navigation = useNavigation();
	const [items, setItems] = useState(DUMMY_ITEMS);

	const inc = (id) =>
		setItems((prev) =>
			prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it)),
		);

	const dec = (id) =>
		setItems((prev) =>
			prev.map((it) =>
				it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it,
			),
		);

	const remove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

	const totals = useMemo(() => {
		const subtotal = 110;
		const shipping = 10;
		const total = subtotal + shipping;
		return { subtotal, shipping, total };
	}, [items]);

	function emulatePlacerOrder() {
		navigation.navigate("OrderConfirmed");
	}

	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="Check Out" />

				<ScrollView contentContainerStyle={styles.content}>
					<View style={{ gap: 14 }}>
						{items.map((item) => (
							<CartItemCard
								key={item.id}
								title={item.title}
								meta={item.meta}
								qty={item.qty}
								onDec={() => dec(item.id)}
								onInc={() => inc(item.id)}
								onRemove={() => remove(item.id)}
								showRemove
							/>
						))}
					</View>

					<View style={styles.sectionHeaderRow}>
						<Text style={styles.sectionTitle}>Delivery Address</Text>
						<Pressable onPress={() => navigation.navigate("Address")}>
							<ChevronRight size={18} color="#9ca3af" />
						</Pressable>
					</View>

					<Pressable style={styles.selectRow} onPress={() => {}}>
						<View style={styles.leftMini}>
							<View style={styles.miniIconWrap}>
								<View style={styles.miniIcon} />
							</View>
							<View style={{ flex: 1 }}>
								<Text style={styles.primaryText}>Biringan, South Cotabato</Text>
								<Text style={styles.secondaryText}>12/8AB</Text>
								<Text style={styles.secondaryText}>1743</Text>
							</View>
						</View>

						<View style={styles.rightMini}>
							<CheckCircle2 size={18} color="#22c55e" />
						</View>
					</Pressable>

					<View style={styles.sectionHeaderRow}>
						<Text style={styles.sectionTitle}>Payment Method</Text>
						<Pressable onPress={() => navigation.navigate("PaymentMethod")}>
							<ChevronRight size={18} color="#9ca3af" />
						</Pressable>
					</View>

					<Pressable style={styles.selectRow} onPress={() => {}}>
						<View style={styles.leftMini}>
							<View style={styles.miniIconWrap}>
								<View style={styles.gcashIcon}></View>
							</View>
							<View style={{ flex: 1 }}>
								<Text style={styles.primaryText}>Gcash</Text>
								<Text style={styles.secondaryText}>**** 7690</Text>
							</View>
						</View>

						<View style={styles.rightMini}>
							<CheckCircle2 size={18} color="#22c55e" />
						</View>
					</Pressable>

					<Text style={styles.sectionTitle}>Order Info</Text>

					<View style={styles.orderBox}>
						<Row label="Subtotal" value={`${totals.subtotal}`} />
						<Row label="Shipping cost" value={`${totals.shipping}`} />
						<Row label="Total" value={`${totals.total}`} bold />
					</View>

					<View style={{ height: 90 }} />

					<PrimaryBtn style={styles.bottomBtn} onPress={emulatePlacerOrder}>
						<Text>Place Order</Text>
					</PrimaryBtn>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

function Row({ label, value, bold }) {
	return (
		<View style={styles.rowBetween}>
			<Text style={[styles.rowLabel, bold && styles.bold]}>{label}</Text>
			<Text style={[styles.rowValue, bold && styles.bold]}>{value}</Text>
		</View>
	);
}
