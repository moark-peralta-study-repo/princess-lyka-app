import { View, Text } from "react-native";
import { styles } from "./styles";

export default function CategoryCard({ title, subtitle }) {
	return (
		<View style={styles.card}>
			<View style={styles.thumb} />
			<Text style={styles.cardTitle}>{title}</Text>
			<Text style={styles.cardSub}>{subtitle}</Text>
		</View>
	);
}
