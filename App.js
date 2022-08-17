import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modal, setModal] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function startAddGoalHandler() {
    setModal(!modal);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add new goal"
          color="#E79F51"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          modal={modal}
          closeModal={startAddGoalHandler}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  itemData={itemData}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
  },
  listContainer: {
    flex: 5,
  },
});
// This hotel has a new view of the citycenter. The location is perfect.

// The breakfast is ok. Regarding the location, it is quite far from the citycenter but price is cheap so it is worth.

// Location is excellent, 5 minutes from citycenter. There is also a metro station very close to the hotel.

// They said I couldn't take my dog and there were other guests with dogs! That is not fair.

// Very friendly staff and good cost-benefit ratio. ITs location is a bit far from the citycenter
