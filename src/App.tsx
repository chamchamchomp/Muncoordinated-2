import * as React from 'react';

// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/compat/app';

// These imports load individual services into the firebase namespace.
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/analytics';

import { Route, Switch } from 'react-router-dom';
import './App.css';

import Onboard from './pages/Onboard';
import Homepage from './pages/Homepage';
import Committee from './pages/Committee';
import { NotFound } from './components/NotFound';

const firebaseConfig = {
  apiKey: "AIzaSyBAG3kYTLU-wVX3whvUU_zhJyzmG1INuSA",
  authDomain: "mmun2024-25ad2.firebaseapp.com",
  projectId: "mmun2024-25ad2",
  storageBucket: "mmun2024-25ad2.firebasestorage.app",
  messagingSenderId: "429612581246",
  appId: "1:429612581246:web:16a41ce679ed0afc15f32f",
  measurementId: "G-Y8QLTG4VW1"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/onboard" component={Onboard} />
        <Route exact path="/committees" component={Onboard} />
        <Route path="/committees/:committeeID" component={Committee} />
        <Route path="*">
          <NotFound item="page" id="unknown" />
        </Route>
      </Switch>
    );
  }
}

export default App;
