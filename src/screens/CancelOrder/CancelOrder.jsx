import React, { useMemo, useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	Image,
	Pressable,
	Modal,
	TouchableWithoutFeedback,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft, CheckCircle2 } from "lucide-react-native";
import { styles } from "./styles";
import PrimaryBtn from "../../components/ui/PrimaryBtn";

const REASONS = [
	"Ordered by mistake",
	"Found a better price elsewhere",
	"Change of mind",
	"Delivery time is too long",
	"Payment or checkout issue",
	"Budget or financial reasons",
	"Incorrect item selected (size, type, quantity)",
	"No longer needed",
];

export default function CancelOrderScreen() {
	const navigation = useNavigation();

	const order = useMemo(
		() => ({
			title: "Royal Canin\nDry Food",
			size: "Size: Medium",
			qty: "x1",
			date: "01/30/26",
			orderId: "01-3653-901238",
			subtotal: "$4.56",
			total: "$4.56",
		}),
		[],
	);

	const [selectedIdx, setSelectedIdx] = useState(0);
	const [open, setOpen] = useState(false);

	function onConfirm() {
		setOpen(true);
	}

	function onBackHome() {
		setOpen(false);
		// choose what you want:
		navigation.navigate("Maintabs");
	}

	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.container}>
				<View style={styles.headerRow}>
					<Pressable style={styles.iconBtn} onPress={() => navigation.goBack()}>
						<ChevronLeft size={18} color="#111827" />
					</Pressable>
					<Text style={styles.headerTitle}>Cancel Order</Text>
					<View style={{ width: 44 }} />
				</View>

				<ScrollView contentContainerStyle={styles.content}>
					<View style={styles.summaryRow}>
						<View style={styles.thumbWrap}>
							<Image source={order.image} style={styles.thumb} />
						</View>

						<View style={{ flex: 1 }}>
							<Text style={styles.orderTitle}>{order.title}</Text>
							<Text style={styles.muted}>{order.size}</Text>

							<View style={styles.metaRow}>
								<Text style={styles.muted}>{order.qty}</Text>
								<View style={{ flex: 1 }} />
								<View>
									<Text style={styles.mutedRight}>Total:</Text>
									<Text style={styles.mutedRight}>{order.total}</Text>
								</View>
							</View>

							<View style={styles.infoRow}>
								<Text style={styles.infoLabel}>Order Date</Text>
								<Text style={styles.infoValue}>{order.date}</Text>
							</View>
							<View style={styles.infoRow}>
								<Text style={styles.infoLabel}>Order ID</Text>
								<Text style={styles.infoValue}>{order.orderId}</Text>
							</View>
						</View>
					</View>

					<Text style={styles.sectionTitle}>Reason for Cancellation</Text>

					<View style={styles.reasons}>
						{REASONS.map((label, idx) => {
							const active = idx === selectedIdx;
							return (
								<Pressable
									key={label}
									onPress={() => setSelectedIdx(idx)}
									style={styles.reasonRow}
								>
									<Text style={styles.reasonText}>{label}</Text>
									<View
										style={[
											styles.radioOuter,
											active && styles.radioOuterActive,
										]}
									>
										<View
											style={[
												styles.radioInner,
												active && styles.radioInnerActive,
											]}
										/>
									</View>
								</Pressable>
							);
						})}
					</View>

					<View style={styles.actions}>
						<PrimaryBtn
							style={styles.cancelBtn}
							onPress={() => navigation.goBack()}
						>
							<Text style={styles.cancelBtnText}>Cancel</Text>
						</PrimaryBtn>

						<PrimaryBtn style={styles.confirmBtn} onPress={onConfirm}>
							<Text style={styles.confirmBtnText}>Confirm</Text>
						</PrimaryBtn>
					</View>

					<View style={{ height: 18 }} />
				</ScrollView>
			</View>

			<Modal transparent visible={open} animationType="fade">
				<TouchableWithoutFeedback onPress={() => setOpen(false)}>
					<View style={styles.backdrop} />
				</TouchableWithoutFeedback>

				<View style={styles.modalWrap}>
					<View style={styles.modalCard}>
						<CheckCircle2 size={42} color="#16a34a" />
						<Text style={styles.modalTitle}>Cancelled !</Text>
						<Text style={styles.modalSub}>Your order has been Cancelled.</Text>

						<PrimaryBtn style={styles.modalBtn} onPress={onBackHome}>
							<Text style={styles.modalBtnText}>Back to Home Page</Text>
						</PrimaryBtn>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}
