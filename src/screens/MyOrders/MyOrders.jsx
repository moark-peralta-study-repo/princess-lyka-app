import React, { useMemo, useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	ScrollView,
	Image,
	Pressable,
} from "react-native";
import { Bell, ChevronLeft, Star } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { DUMMY_ORDERS } from "../../data/dummyData";

export default function MyOrdersScreen() {
	const navigation = useNavigation();
	const [tab, setTab] = useState("ongoing");

	const list = useMemo(() => {
		return DUMMY_ORDERS.filter((order) => order.status === tab);
	}, [tab]);

	function emulateCancelOrder(id) {
		navigation.navigate("CancelOrder", { id });
	}

	function emulateTrackOrder(id) {
		navigation.navigate("TrackOrder", { id });
	}

	return (
		<SafeAreaView style={styles.safe}>
			<View style={styles.headerRow}>
				<Pressable style={styles.iconBtn} onPress={() => navigation.goBack()}>
					<ChevronLeft size={18} color="#111827" />
				</Pressable>

				<Text style={styles.headerTitle}>My Orders</Text>

				<Pressable style={styles.iconBtn} onPress={() => {}}>
					<Bell size={18} color="#111827" />
				</Pressable>
			</View>

			<View style={styles.segmentWrap}>
				<Pressable
					onPress={() => setTab("ongoing")}
					style={[styles.segmentBtn, tab === "ongoing" && styles.segmentActive]}
				>
					<Text
						style={[
							styles.segmentText,
							tab === "ongoing" && styles.segmentTextActive,
						]}
					>
						Ongoing
					</Text>
				</Pressable>

				<Pressable
					onPress={() => setTab("completed")}
					style={[
						styles.segmentBtn,
						tab === "completed" && styles.segmentActive,
					]}
				>
					<Text
						style={[
							styles.segmentText,
							tab === "completed" && styles.segmentTextActive,
						]}
					>
						Completed
					</Text>
				</Pressable>
			</View>

			<ScrollView
				contentContainerStyle={styles.list}
				showsVerticalScrollIndicator={false}
			>
				{list.map((order) =>
					tab === "ongoing" ? (
						<OngoingCard
							key={order.id}
							order={order}
							onCancel={() => emulateCancelOrder(order.id)}
							onTrack={() => emulateTrackOrder(order.id)}
						/>
					) : (
						<CompletedCard
							key={order.id}
							order={order}
							onLeaveReview={() => {}}
						/>
					),
				)}
			</ScrollView>
		</SafeAreaView>
	);
}

function OngoingCard({ order, onCancel, onTrack }) {
	return (
		<View style={styles.card}>
			<View style={styles.cardLeft}>
				<Image
					source={{ uri: "https://via.placeholder.com/120x120.png?text=Food" }}
					style={styles.thumb}
				/>
			</View>

			<View style={styles.cardMid}>
				<Text style={styles.date}>{order.date}</Text>
				<Text style={styles.title}>{order.title}</Text>
				<Text style={styles.meta}>Size: {order.size}</Text>
				<Text style={styles.meta}>x{order.qty}</Text>

				<View style={styles.actionsRow}>
					<Pressable
						style={[styles.pillBtn, styles.cancelBtn]}
						onPress={onCancel}
					>
						<Text style={[styles.pillText, styles.cancelText]}>
							Cancel Order
						</Text>
					</Pressable>

					<Pressable
						style={[styles.pillBtn, styles.trackBtn]}
						onPress={onTrack}
					>
						<Text style={[styles.pillText, styles.trackText]}>Track Order</Text>
					</Pressable>
				</View>
			</View>

			<View style={styles.cardRight}>
				<View style={styles.tag}>
					<Text style={styles.tagText}>{order.tag}</Text>
				</View>

				<View style={{ marginTop: 10 }}>
					<Text style={styles.moneySmall}>${order.price.toFixed(2)}</Text>
					<View style={{ height: 6 }} />
					<View style={styles.rowBetween}>
						<Text style={styles.meta}>Total:</Text>
						<Text style={styles.money}>${order.total.toFixed(2)}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

function CompletedCard({ order, onLeaveReview }) {
	return (
		<View style={styles.cardCompleted}>
			<Image
				source={{ uri: "https://via.placeholder.com/120x120.png?text=Food" }}
				style={styles.thumb2}
			/>

			<View style={{ flex: 1 }}>
				<Text style={styles.title}>{order.title}</Text>
				<Text style={styles.meta}>x{order.qty}</Text>
				<Text style={styles.money}>₱ {order.total}</Text>
			</View>

			<View style={{ alignItems: "flex-end", gap: 10 }}>
				<View style={[styles.tag, styles.tagGreen]}>
					<Text style={[styles.tagText, styles.tagGreenText]}>{order.tag}</Text>
				</View>

				{order.canReview ? (
					<Pressable
						style={[styles.pillBtn, styles.trackBtn]}
						onPress={onLeaveReview}
					>
						<Text style={[styles.pillText, styles.trackText]}>
							Leave Review
						</Text>
					</Pressable>
				) : (
					<View style={styles.ratingPill}>
						<Star size={14} color="#f59e0b" />
						<Text style={styles.ratingText}>{order.rating}/5</Text>
					</View>
				)}
			</View>
		</View>
	);
}
