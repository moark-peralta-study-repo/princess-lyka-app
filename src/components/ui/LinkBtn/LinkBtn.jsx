import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function LinkBtn({ children }) {
	return <TouchableOpacity style={styles.btn}>{children}</TouchableOpacity>;
}
