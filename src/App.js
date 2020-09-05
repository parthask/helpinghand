import React from 'react';
import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react'

/* src/App.js */
import { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createUserData } from './graphql/mutations'
import { listUserDatas } from './graphql/queries'

import { Interactions } from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';

Amplify.configure(awsconfig);

import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const initialState = { name: '', fnfEmail: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setUserDatas] = useState([])

  useEffect(() => {
    fetchUserDatas()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchUserDatas() {
    try {
      const todoData = await API.graphql(graphqlOperation(listUserDatas))
      const todos = todoData.data.listUserDatas.items
      setUserDatas(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addUserData() {
    try {
      if (!formState.name || !formState.fnfEmail) return
      const todo = { ...formState }
      setUserDatas([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createUserData, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};


return (
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Disaster Notification System
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Emergency_notification_system"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about it here!
        </a>
        <div style={styles.container}>
      <h2>Notification contacts</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name} 
        placeholder="Name"
      />
      <input
        onChange={event => setInput('fnfEmail', event.target.value)}
        style={styles.input}
        value={formState.fnfEmail}
        placeholder="FNF Email"
      />
      <button style={styles.button} onClick={addUserData}>Create UserData</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.fnfEmail}</p>
          </div>
        ))
      }
    </div>
      </header>
       <ChatBot
          title="My Bot"
          theme={myTheme}
          botName=" ScheduleAppointment"
          welcomeMessage="Welcome, how can I help you today?"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
          conversationModeOn={false}
        />
    </div>
    
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 15, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0, fontSize: 15 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Disaster Notification System
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Emergency_notification_system"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about it here!
        </a>
      </header>
    </div>
  );
}*/

export default withAuthenticator(App)
