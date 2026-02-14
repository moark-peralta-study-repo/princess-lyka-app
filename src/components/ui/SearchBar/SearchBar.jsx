import React, { useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { SearchIcon, SlidersHorizontal } from "lucide-react-native";
import { styles } from "./styles";

export default function SearchBar({
	mode = "preview", // "preview" | "input"
	value = "",
	onChangeText,
	placeholder = "Search",
	onPress,
	onFilterPress,
	onSubmitEditing,
	autoFocus = false,
}) {
	const pill = (
		<View style={styles.searchPill}>
			<SearchIcon size={18} color="#666" />

			{mode === "input" ? (
				<TextInput
					value={value}
					onChangeText={onChangeText}
					placeholder={placeholder}
					placeholderTextColor="#999"
					style={styles.searchInput}
					autoFocus={autoFocus}
					underlineColorAndroid="transparent"
					onSubmitEditing={onSubmitEditing}
					returnKeyType="search"
				/>
			) : (
				<Text style={styles.searchPlaceholder}>{placeholder}</Text>
			)}
		</View>
	);

	return (
		<View style={styles.row}>
			{mode === "preview" ? (
				<Pressable style={{ flex: 1 }} onPress={onPress}>
					{pill}
				</Pressable>
			) : (
				<View style={{ flex: 1 }}>{pill}</View>
			)}

			<Pressable style={styles.filterBtn} onPress={onFilterPress}>
				<SlidersHorizontal size={18} color="#2b6cb0" />
			</Pressable>
		</View>
	);
}
