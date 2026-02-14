import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Bell } from "lucide-react-native";

export default function UserHeader() {
	return (
		<View style={styles.headerRow}>
			<Image
				source={require("../../../../assets/avatar-dp.png")}
				style={styles.avatar}
			/>

			<View style={styles.headerCenter}>
				<Text style={styles.welcome}>Welcome, User</Text>
				<Text style={styles.sub}>Deliver to</Text>
				<Text style={styles.city}>Bacolor City</Text>
			</View>

			<View style={styles.bell}>
				<Bell size={18} color="#7a2e2e" />
			</View>
		</View>
	);
}
