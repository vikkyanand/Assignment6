/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../reducers/userSlice';
import axios from 'axios';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    location: string;
}
interface UserEditFormProps {
    user: User;
}

const UserEditForm: React.FC<UserEditFormProps> = ({ user }) => {
    const [userData] = useState(user);
    const dispatch = useDispatch();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7013/api/users/${userData.id}`, userData);
            dispatch(updateUser(userData)); // Dispatch action to update user in Redux store
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                {/* Input fields for editing user details */}
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UserEditForm;
