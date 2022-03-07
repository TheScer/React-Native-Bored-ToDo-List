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
import { useNavigation } from "@react-navigation/native";
import styles from "../Styles";

//import ReactDOM from
import Task from "../components/Task";
//import History from './History.js';
//import Navbar from './Navbar.js';

//api URL endpoint
const boredAPIURL = "https://www.boredapi.com/api/activity/";

function Home() {
  const navigation = useNavigation();

  //the "task in the parameter is the name of the state in this case to track the task"
  //"the 2nd parameter is the function used to track the state"
  const [task, setTask] = useState();
  //"we use state for things that change often in our program"
  const [taskItems, setTaskItems] = useState([]);

  //these will be used for building an array of the completed tasks
  const [completeTheTask, setCompleteTask] = useState();
  const [CompletedItems, setCompletedItems] = useState([]);

  //state for loading data from the API
  const [isLoading, setLoading] = useState(true);
  //state to hold the actual data
  const [data, setData] = useState();

  useEffect(() => {
    fetch(boredAPIURL)
      .then((response) => response.json())
      .then((json) => setData(json.activity))
      .catch((error) => alert(error));
  });

  const handleAddTask = () => {
    Keyboard.dismiss();
    //console.log(task);
    setTaskItems([...taskItems, task]);
    //console.log([...taskItems]);

    setTask(null);
  };

  const handleRandTask = () => {
    //console.log(data);
    setTaskItems([...taskItems, data]);
    //console.log([...taskItems]);
    setTask(null);
  };

  const completeTask = async (index) => {
    let itemsCopy = [...taskItems];
    let splicedItem = itemsCopy.splice(index, 1);
    //console.log("spliced item:");
    //console.log(splicedItem);
    setCompleteTask(splicedItem[0]);
    //console.log(splicedItem[0]);
    //console.log("completetheTask:");
    //console.log(completeTheTask);
    //the next 2 lines make an array of removed tasks to be passed to the history page
    setCompletedItems([...CompletedItems, completeTheTask]);
    //console.log("full history array");
    //console.log([...CompletedItems]);
    //itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/*today's tasks */}
      <View style={styles.tasksWrapper}>
        <Button
          onPress={() =>
            navigation.navigate("History", { params: CompletedItems })
          }
          title="go to History screen!"
        />
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

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

      {/*add a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleRandTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>!+!</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Home;
