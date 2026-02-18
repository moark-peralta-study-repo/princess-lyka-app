import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";

export default function BalanceScreen() {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="Remaining Balance" onBack={undefined} />
			</View>
		</SafeAreaView>
	);
}
