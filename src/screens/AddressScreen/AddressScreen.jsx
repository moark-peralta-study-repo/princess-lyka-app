import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, ScrollView, Pressable } from "react-native";
import { MapPin, Plus } from "lucide-react-native";
import ScreenHeader from "../../components/ui/ScreenHeader/ScreenHeader";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import { styles } from "./styles";
import { DUMMY_ADDRESSES } from "../../data/dummyData";
import { useNavigation } from "@react-navigation/native";
import NewAddressScreen from "../NewAddressScreen/NewAddressScreen";

export default function AddressScreen() {
	const navigation = useNavigation();
	const [selectedId, setSelectedId] = useState("home");

	function emulateNavigateNewAddress() {
		navigation.navigate("NewAddress");
	}

	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<ScreenHeader title="Address" />

				<ScrollView
					contentContainerStyle={styles.content}
					showsVerticalScrollIndicator={false}
				>
					<Text style={styles.sectionTitle}>Saved Address</Text>

					<View style={{ gap: 12, marginTop: 12 }}>
						{DUMMY_ADDRESSES.map((a) => (
							<AddressCard
								key={a.id}
								label={a.label}
								sub={a.sub}
								isDefault={a.isDefault}
								selected={a.id === selectedId}
								onPress={() => setSelectedId(a.id)}
							/>
						))}

						<Pressable
							style={styles.addCard}
							onPress={emulateNavigateNewAddress}
						>
							<Plus size={18} color="#111827" />
							<Text style={styles.addText}>Add New Address</Text>
						</Pressable>
					</View>

					{/* spacer so Apply sits like your screenshot */}
					<View style={{ height: 90 }} />

					<PrimaryBtn
						onPress={() => {
							// use `selected` however you want (save to state/store)
							// console.log("Apply address:", selected);
						}}
						style={styles.applyBtn}
					>
						<Text style={styles.applyText}>Apply</Text>
					</PrimaryBtn>

					<View style={{ height: 18 }} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

function AddressCard({ label, sub, isDefault, selected, onPress }) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.card,
				selected && styles.cardActive,
				pressed && { opacity: 0.95 },
			]}
		>
			<View style={styles.cardLeft}>
				<View style={styles.pinWrap}>
					<MapPin size={16} color="#9ca3af" />
				</View>

				<View style={{ flex: 1 }}>
					<View style={styles.titleRow}>
						<Text style={styles.cardTitle}>{label}</Text>
						{isDefault ? (
							<View style={styles.defaultPill}>
								<Text style={styles.defaultText}>Default</Text>
							</View>
						) : null}
					</View>

					<Text style={styles.cardSub}>{sub}</Text>
				</View>
			</View>

			<View style={[styles.radioOuter, selected && styles.radioOuterActive]}>
				{selected ? <View style={styles.radioInner} /> : null}
			</View>
		</Pressable>
	);
}
