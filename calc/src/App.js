import React, { Component, useRef, useState } from 'react';

import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Calculations from './Calculations'
import { render } from 'react-dom';
import ChatRoom from './Calculations'

firebase.initializeApp({

  apiKey: "AIzaSyD-IBSF26atRKtinfE3H46kbTniq1sytDg",
  authDomain: "calculate-280c0.firebaseapp.com",
  databaseURL: "https://calculate-280c0.firebaseio.com",
  projectId: "calculate-280c0",
  storageBucket: "calculate-280c0.appspot.com",
  messagingSenderId: "68897798849",
  appId: "1:68897798849:web:c6b1c9e4e035b0dc0db240",
  measurementId: "G-V7LJJNEYEX"

})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

  const [user] = useAuthState(auth);


  function SignIn() {

    const signInWithGoogle = () => {

      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return (
      <div>

        <button className="sign-in" onClick={signInWithGoogle}>GoogleSignIn</button>

      </div>
    )
  }

  function SignOut() {
    return auth.currentUser && (

      <button className="sign-out" onClick={() => auth.signOut()}>SignOut</button>
    )
  }

  const ChatRoom = () => {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');
    const sendMessage = async (e) => {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      });

      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
      <>

        <main>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

          <span ref={dummy}></span>
        </main>
        <form onSubmit={sendMessage}>

          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

          <button type="submit" disabled={!formValue}>🕊️</button>

        </form>

      </>

    )


  }






  function ChatMessage(props) {

    console.log(props)
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p> {text} </p>
      </div>

    )
  }



  return (
    <div className="App">

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
      <Calculations />
    </div>
  );
}


export default App;
