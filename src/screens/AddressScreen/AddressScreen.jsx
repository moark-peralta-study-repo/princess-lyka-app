import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";
import { styles } from "./styles";

export default function AddressScreen() {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="Address" onBack={undefined} />
			</View>
		</SafeAreaView>
	);
}
