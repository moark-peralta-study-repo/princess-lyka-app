import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Trash2, ChevronDown, ChevronUp } from "lucide-react-native";
import { styles } from "./styles";

export default function CartItemCard({
	title,
	meta = "4.5 (-4.00 Tax)",
	qty = 1,
	onInc,
	onDec,
	onRemove,
	showRemove = true,
}) {
	return (
		<View style={styles.card}>
			<View style={styles.imgWrap}>
				<Image style={styles.img} resizeMode="cover" />
			</View>

			<View style={styles.mid}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.meta}>{meta}</Text>

				<View style={styles.controlsRow}>
					<Pressable style={styles.circleBtn} onPress={onDec}>
						<ChevronDown size={16} color="#8a5a00" />
					</Pressable>

					<Text style={styles.qty}>{qty}</Text>

					<Pressable style={styles.circleBtn} onPress={onInc}>
						<ChevronUp size={16} color="#8a5a00" />
					</Pressable>

					<View style={{ flex: 1 }} />

					{showRemove && (
						<Pressable style={styles.trashBtn} onPress={onRemove}>
							<Trash2 size={18} color="#9ca3af" />
						</Pressable>
					)}
				</View>
			</View>
		</View>
	);
}
