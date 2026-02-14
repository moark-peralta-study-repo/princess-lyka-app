import { View, Text } from "react-native";
import { styles } from "./styles";

function BestSellingCard({ title, price }) {
	return (
		<View style={styles.bestCard}>
			<View style={styles.bestImg} />
			<View style={styles.bestMeta}>
				<Text style={styles.bestTitle} numberOfLines={1}>
					{title}
				</Text>
				<Text style={styles.bestPrice}>{price}</Text>
			</View>
		</View>
	);
}
export default BestSellingCard;
