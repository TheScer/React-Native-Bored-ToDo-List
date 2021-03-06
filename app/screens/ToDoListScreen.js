import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,} from 'react-native';
import Task from '../../components/Task'

//api URL endpoint
const boredAPIURL='https://www.boredapi.com/api/activity/'

function ToDoListScreen() {
  //the "task in the parameter is the name of the state in this case to track the task"
  //"the 2nd parameter is the function used to track the state"
const [task, setTask] = useState();
//"we use state for things that change often in our program"
const[taskItems, setTaskItems] = useState([]);

//state for loading data from the API
const[isLoading, setLoading] = useState(true);
//state to hold the actual data
const[data, setData] = useState();

useEffect(() =>{
  if(setLoading==true){
    fetch(boredAPIURL)
    .then((response)=>response.json())
    .then((json)=>setData(json.activity))
    .then(console.log(data))
    .catch((error)=>alert(error))
    .finally(setLoading(false));
  }
});

const handleAddTask = () =>{
  Keyboard.dismiss();
  console.log(task);
  setTaskItems([...taskItems,task])
  setTask(null);
}

const handleRandTask = () =>{
  setLoading=true;
  console.log(data);
  setTaskItems([...taskItems,data])
  setTask(null);
}

const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}

  return (
  <View style={styles.container}>

    {/*today's tasks */}
    <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Today's Tasks</Text>  


    <View style={styles.items}>
      {/*this is where the tasks will go*/}
      {
        taskItems.map((item, index) => {
          return( //<Task key={index}  text={item}/>
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task  text={item}/>
            </TouchableOpacity>
          )
        })
      }
    </View>
    </View>

    {/*add a task */}
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding':'height'}
    style={styles.writeTaskWrapper} 
    >
    
      <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text=> setTask(text)} />

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

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bebebe',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20, 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom: 60,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  } ,
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#FFF",
    borderRadius: 60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  } ,
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent: 'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  } ,
  addText:{} ,
});

export default ToDoListScreen