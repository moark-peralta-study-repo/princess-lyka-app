import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";
import { styles } from "./styles";

export default function TrackOrderScreen() {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="Tracking Order" onBack={undefined} right="none" />
			</View>
		</SafeAreaView>
	);
}
