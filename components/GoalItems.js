import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItems({ itemData, onDeleteItem }) {
  function handleDelete() {
    onDeleteItem(itemData.item.id);
  }

  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={handleDelete}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#E9C46A",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#264653",
  },
});
