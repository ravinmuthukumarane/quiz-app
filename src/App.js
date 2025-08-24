import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import './App.css';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>Quiz App</h1>
            <p>Welcome, {user.username}!</p>
            <div className="quiz-content">
              <p>You are successfully authenticated and can access the quiz content.</p>
              <p>This is where your quiz functionality will be implemented.</p>
            </div>
            <button onClick={signOut} className="sign-out-button">
              Sign Out
            </button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
