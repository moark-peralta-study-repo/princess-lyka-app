import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function AuthBtn({ children }) {
	return (
		<TouchableOpacity style={styles.btn}>
			<Text style={styles.btnText}>{children}</Text>
		</TouchableOpacity>
	);
}
