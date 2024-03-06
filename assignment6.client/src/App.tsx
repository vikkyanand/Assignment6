
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/add" element={<AddUserForm />} />
                <Route path="/" element={<UserList />} />
            </Routes>
        </Router>
    );
}

export default App;
