import { SafeAreaView, View, Text, ScrollView, Switch } from "react-native";
import { useState } from "react";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";
import { styles } from "./styles";
import { NotificationItem } from "../../components/ui/NotificationItem/NotificationItem";

export default function NotificationsScreen() {
	const [settings, setSettings] = useState({
		general: true,
		sound: true,
		vibrate: true,
		offers: true,
		promo: true,
		payments: true,
		cashback: true,
		updates: true,
		service: true,
		tips: true,
	});

	const toggle = (key) => {
		setSettings((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<SafeAreaView style={styles.safe}>
			<ScreenHeader title="Notifications Settings" onBack={undefined} />

			<ScrollView contentContainerStyle={styles.container}>
				<NotificationItem
					label="General Notifications"
					value={settings.general}
					onToggle={() => toggle("general")}
				/>

				<NotificationItem
					label="Sound"
					value={settings.sound}
					onToggle={() => toggle("sound")}
				/>

				<NotificationItem
					label="Vibrate"
					value={settings.vibrate}
					onToggle={() => toggle("vibrate")}
				/>

				<NotificationItem
					label="Special Offers"
					value={settings.offers}
					onToggle={() => toggle("offers")}
				/>

				<NotificationItem
					label="Promo & Discounts"
					value={settings.promo}
					onToggle={() => toggle("promo")}
				/>

				<NotificationItem
					label="Payments"
					value={settings.payments}
					onToggle={() => toggle("payments")}
				/>

				<NotificationItem
					label="Cashback"
					value={settings.cashback}
					onToggle={() => toggle("cashback")}
				/>

				<NotificationItem
					label="App Updates"
					value={settings.updates}
					onToggle={() => toggle("updates")}
				/>

				<NotificationItem
					label="New Service Available"
					value={settings.service}
					onToggle={() => toggle("service")}
				/>

				<NotificationItem
					label="New Tips Available"
					value={settings.tips}
					onToggle={() => toggle("tips")}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
