import { SafeAreaView, View, Text, ScrollView, Image } from "react-native";
import {
	MapPin,
	User,
	MapPinned,
	Bell,
	ClipboardList,
	Package,
	LogOut,
} from "lucide-react-native";
import { styles } from "./styles";
import ProfileMenuItem from "../../ui/ProfileMenuItem/ProfileMenuItem";
import PrimaryBtn from "../../ui/PrimaryBtn";
import { useNavigation } from "@react-navigation/native";

export default function UserProfile() {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={styles.safe}>
			<ScrollView
				contentContainerStyle={styles.container}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>User Profile</Text>
				</View>

				<View style={styles.avatarWrap}>
					<View style={styles.avatarOuter}>
						<Image
							style={styles.avatar}
							source={require("../../../../assets/userdp.png")}
						/>
					</View>
				</View>

				<View style={styles.content}>
					<Text style={styles.name}>Benedict Bridgerton</Text>

					<View style={styles.locationRow}>
						<MapPin size={14} color="#9ca3af" />
						<Text style={styles.city}>Bacolor City</Text>
					</View>

					<Text style={styles.section}>Account</Text>
					<View style={styles.menuGroup}>
						<ProfileMenuItem
							icon={<User size={20} />}
							label="Edit profile"
							onPress={() => {}}
						/>
						<ProfileMenuItem
							icon={<MapPinned size={20} />}
							label="Address"
							onPress={() => {}}
						/>
						<ProfileMenuItem
							icon={<Bell size={20} />}
							label="Notifications"
							onPress={() => {}}
						/>
					</View>

					<Text style={styles.section}>Order</Text>
					<View style={styles.menuGroup}>
						<ProfileMenuItem
							icon={<ClipboardList size={20} />}
							label="My Orders"
							onPress={() => {}}
						/>
						<ProfileMenuItem
							icon={<Package size={20} />}
							label="Check Balance"
							onPress={() => {}}
						/>
					</View>

					<View style={styles.logoutWrap}>
						<PrimaryBtn
							style={styles.logoutBtn}
							textStyle={styles.logoutText}
							onPress={() => navigation.navigate("HomeScreen")}
						>
							<LogOut size={18} color="#2f7f86" />
							<Text>Logout</Text>
						</PrimaryBtn>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
