import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ onAddGoal, modal, closeModal }) {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(enteredText) {
    setInputValue(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(inputValue);
    setInputValue("");
  }

  return (
    <Modal visible={modal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/Images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={inputHandler}
          value={inputValue}
          placeholder="Add course goal"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={() => {
                addGoalHandler(), closeModal();
              }}
              color="#E76F51"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#264653" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    padding: 16,
    backgroundColor: "#E9CA6A",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#FCBF49",
    backgroundColor: "#F4A261",
    margin: 16,
    padding: 10,
    color: "#264653",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
  },
});
