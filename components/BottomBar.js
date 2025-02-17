import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function BottomBar({ handleLikePress, handlePassPress }) {
  return (

    <View style={styles.container}>
      <View />

        <TouchableOpacity style={styles.button}>
            <FontAwesome
              name="thumbs-up"
              size={27}
              color="#3b5998"
              onPress={handleLikePress}
            ></FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome 
            name="comment" 
            size={27} color="#185adb"
            ></FontAwesome>
          </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePassPress}>
          <FontAwesome 
          name="share" 
          size={27} color="#3b5998"
          ></FontAwesome>
        </TouchableOpacity>

      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
});
