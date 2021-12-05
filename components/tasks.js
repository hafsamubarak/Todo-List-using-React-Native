import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  CheckBox,
} from "react-native";
const Tasks = (props) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.item}>
      <Checkbox
        style={styles.square}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#55BCF6" : undefined}
      />
      <View style={styles.itemLeft}>
        {/* <View style={styles.square}></View> */}
        <Text
          style={
            (styles.itemText,
            { textDecoration: !isChecked ? "" : "line-through" })
          }
        >
          {props.text}
        </Text>
      </View>
      {/* <View style={styles.circle}></View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  // square: {
  //   width: 24,
  //   height: 24,
  //   backgroundColor: "#55BCF6",
  //   opacity: 0.4,
  //   borderRadius: 5,
  //   marginRight: 15,
  // },
  itemText: {
    maxWidth: "80",
  },
  // circle: {
  //   width: 12,
  //   height: 12,
  //   borderColor: "#55BCF6",
  //   borderWidth: 2,
  //   borderRadius: 16,
  // },
});
export default Tasks;
