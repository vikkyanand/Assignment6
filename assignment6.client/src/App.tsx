import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import store from './store/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/add" element={<AddUserForm />} />
                    <Route path="/" element={<UserList />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;