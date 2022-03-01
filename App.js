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
} from "react-native";

//import ReactDOM from
import Task from "./components/Task";
//import History from './History.js';
//import Navbar from './Navbar.js';
//import {BrowserRouter} from 'react-router-dom'
//import {Route, Link} from "react-router-dom"

//api URL endpoint
const boredAPIURL = "https://www.boredapi.com/api/activity/";

export default function App() {
  //the "task in the parameter is the name of the state in this case to track the task"
  //"the 2nd parameter is the function used to track the state"
  const [task, setTask] = useState();
  //"we use state for things that change often in our program"
  const [taskItems, setTaskItems] = useState([]);

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
    console.log(task);
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const handleRandTask = () => {
    console.log(data);
    setTaskItems([...taskItems, data]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/*today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/*this is where the tasks will go*/}
          {taskItems.map((item, index) => {
            return (
              //<Task key={index}  text={item}/>
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/*add a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      />
    </View>
  );
}
