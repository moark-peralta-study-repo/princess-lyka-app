import React from "react";
import { View, Pressable, StyleSheet } from "react-native";

import ProfileIcon from "../../../../assets/avatar.svg";
import RobotIcon from "../../../../assets/robot.svg";
import { styles } from "./styles";

import { Heart, House, ShoppingCart } from "lucide-react-native";

export default function CustomBottomBar({ state, descriptors, navigation }) {
	const go = (routeName) => navigation.navigate(routeName);

	const isActive = (name) => state.routes[state.index].name === name;

	return (
		<View pointerEvents="box-none" style={styles.wrap}>
			<View style={styles.bar}>
				<Pressable style={styles.item} onPress={() => go("HomePage")}>
					<House size={24} color="#f59e0b" strokeWidth={2} fill={"#785902"} />
				</Pressable>

				<Pressable style={styles.item} onPress={() => go("Cart")}>
					<ShoppingCart
						color="#f59e0b"
						size={24}
						strokeWidth={2}
						fill={"#785802"}
					/>
				</Pressable>

				<View style={styles.centerGap} />

				<Pressable style={styles.item} onPress={() => go("Wishlist")}>
					<Heart size={24} color="#f59e0b" strokeWidth={2} fill={"#795802"} />
				</Pressable>

				<Pressable style={styles.item} onPress={() => go("Profile")}>
					<ProfileIcon
						width={24}
						height={24}
						fill={isActive("Profile") ? "#7a5a00" : "#7a5a00"}
					/>
				</Pressable>

				<View style={styles.profileDot} />
			</View>

			<View style={styles.fabWrap}>
				<Pressable
					style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
					onPress={() => {
						go("ChatBot");
					}}
				>
					<RobotIcon />
				</Pressable>
			</View>
		</View>
	);
}
