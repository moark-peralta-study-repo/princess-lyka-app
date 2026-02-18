import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";

export default function EditProfileScreen() {
	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="My Details" onBack={undefined} />
			</View>
		</SafeAreaView>
	);
}
