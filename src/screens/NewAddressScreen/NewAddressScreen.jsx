import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";

export default function NewAddressScreen() {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="New Address" onBack={undefined} right="none" />
			</View>
		</SafeAreaView>
	);
}
