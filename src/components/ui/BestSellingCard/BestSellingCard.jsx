import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

function BestSellingCard({ title, price, onPress }) {
	return (
		<Pressable style={styles.bestCard} onPress={onPress}>
			<View style={styles.bestImg} />
			<View style={styles.bestMeta}>
				<Text style={styles.bestTitle} numberOfLines={1}>
					{title}
				</Text>
				<Text style={styles.bestPrice}>{price}</Text>
			</View>
		</Pressable>
	);
}
export default BestSellingCard;
