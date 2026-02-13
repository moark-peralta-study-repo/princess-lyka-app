import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function AuthBtn({ children, onPress }) {
	return (
		<TouchableOpacity style={styles.btn} onPress={onPress}>
			<Text style={styles.btnText}>{children}</Text>
		</TouchableOpacity>
	);
}
