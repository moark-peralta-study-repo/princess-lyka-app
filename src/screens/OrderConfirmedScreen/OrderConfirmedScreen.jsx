import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";

import { styles } from "./styles";
import PrimaryBtn from "../../components/ui/PrimaryBtn";

export default function OrderConfirmed() {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.headerRow}>
				<Pressable style={styles.iconBtn} onPress={() => navigation.goBack()}>
					<ChevronLeft size={18} color="#111827" />
				</Pressable>

				<Text style={styles.headerTitle}>Order Confirmed</Text>

				<View style={{ width: 44 }} />
			</View>

			<View style={styles.container}>
				<View style={styles.illusWrap}>
					<Image
						source={require("../../../assets/order-confirmed.png")}
						style={styles.illus}
						resizeMode="contain"
					/>
				</View>

				<Text style={styles.title}>Order Confirmed!</Text>
				<Text style={styles.sub}>
					Your order has been confirmed, we will send{"\n"}
					you confirmation email shortly.
				</Text>

				<View style={styles.btns}>
					<PrimaryBtn
						variant="ghost"
						onPress={() => navigation.navigate("MyOrders")}
						style={styles.fullBtn}
					>
						<Text style={styles.ghostText}>Go to Orders</Text>
					</PrimaryBtn>

					<PrimaryBtn
						variant="primary"
						onPress={() => navigation.navigate("Maintabs")}
						style={styles.fullBtn}
					>
						<Text style={styles.primaryText}>Continue to Shopping</Text>
					</PrimaryBtn>
				</View>
			</View>
		</SafeAreaView>
	);
}
