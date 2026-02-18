import { View, Text } from "react-native";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function PaymentMethodScreen() {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="Payment Method" onBack={undefined} />
			</View>
		</SafeAreaView>
	);
}
