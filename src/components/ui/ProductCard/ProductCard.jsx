import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

export default function ProductCard({ id, title, price, onPress }) {
	return (
		<Pressable style={styles.card} onPress={onPress}>
			<View style={[styles.thumb, { height: 200 }]} />
			<Text style={styles.cardTitle}>{title}</Text>
			<Text style={styles.cardSub}>{price}</Text>
		</Pressable>
	);
}
