import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function BottomMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="home-outline" size={24} color="#189df0" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="search-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => alert("Button was pressed")}
      >
        <Ionicons name="notifications-outline" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="mail-outline" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
});
