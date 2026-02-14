import { View, Text } from "react-native";
import { styles } from "./styles";

export default function PromoCard() {
	return (
		<View style={styles.promoCard}>
			<View style={{ flex: 1 }}>
				<Text style={styles.promoLabel}>Super Value Deals</Text>
				<Text style={styles.promoTitle}>On all Products</Text>
				<Text style={styles.promoDesc}>
					Save more with coupons & up to 70% off.
				</Text>
				<View style={styles.promoBtn}>
					<Text style={styles.promoBtnText}>Shop now</Text>
				</View>
			</View>

			<View style={styles.promoImg} />
		</View>
	);
}
