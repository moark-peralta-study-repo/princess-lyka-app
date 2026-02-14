import { View, Text } from "react-native";
import { styles } from "./styles";

export default function ProductCard({ title, price }) {
	return (
		<View style={styles.card}>
			<View style={[styles.thumb, { height: 90 }]} />
			<Text style={styles.cardTitle}>{title}</Text>
			<Text style={styles.cardSub}>{price}</Text>
		</View>
	);
}
