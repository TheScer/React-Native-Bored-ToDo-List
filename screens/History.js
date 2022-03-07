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

const History = ({ navigation, route }) => {
  //the "task in the parameter is the name of the state in this case to track the task"
  //"the 2nd parameter is the function used to track the state"
  const [task, setTask] = useState();
  //"we use state for things that change often in our program"
  const [taskItems, setTaskItems] = useState([]);

  //let CompletedItems = route.paramsshift;
  // console.log("CompletedItems Array");
  // console.log(CompletedItems.params);
  //OKAY OKAY OKAY, for whatever reason I think I need to use
  //CompletedItems but its not working as well as my
  //historyList array so we gonna try using that again

  let historyList = route.params;
  historyList.params.shift();
  //console.log("historyList.params: ");
  //console.log(historyList.params);
  // console.log("route.params");
  // console.log(route.params);
  // console.log("history screen history list.params");
  // console.log(historyList.params[1]);

  const createHistoryTaskList = () => {
    //for (const i in historyList.params) {}
    // setTask(historyList.params[i]);
    setTaskItems(...taskItems, historyList.params);
    //console.log('see task complete task items below')
    console.log("taskItems state Array:");
    console.log(taskItems);
    //historyList.params = [];
    //console.log(historyList.params[i]);
  };

  //createHistoryTaskList();

  //console.log(historyList.params[3]);

  return (
    <View>
      <View style={styles.tasksWrapper}>
        <Button
          title="create History:"
          onPress={() => createHistoryTaskList()}
        />
        <Text style={styles.sectionTitle}>History</Text>

        <ScrollView style={styles.items}>
          {/*this is where the tasks will go*/}
          {taskItems.map((item, index) => {
            return (
              //<Task key={index}  text={item}/>
              //onPress not exactly needed here unless to completely remove a task from history
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
