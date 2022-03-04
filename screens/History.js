import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  Button,
  ScrollView,
} from "react-native";
import Task from "../components/Task";
import styles from "../Styles";

const History = () => {
  //the "task in the parameter is the name of the state in this case to track the task"
  //"the 2nd parameter is the function used to track the state"
  const [task, setTask] = useState();
  //"we use state for things that change often in our program"
  const [taskItems, setTaskItems] = useState([]);

  return (
    <View>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>History</Text>

        <ScrollView style={styles.items}>
          {/*this is where the tasks will go*/}
          {taskItems.map((item, index) => {
            return (
              //<Task key={index}  text={item}/>
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default History;
