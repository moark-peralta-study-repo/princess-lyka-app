import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function LinkBtn({ children, onPress }) {
	return <TouchableOpacity style={styles.btn}>{children}</TouchableOpacity>;
}
