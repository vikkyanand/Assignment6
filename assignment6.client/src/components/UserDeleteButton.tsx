import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../reducers/userSlice';
import axios from 'axios';

interface UserDeleteButtonProps {
    userId: string;
}

const UserDeleteButton: React.FC<UserDeleteButtonProps> = ({ userId }) => {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            await axios.delete(`https://localhost:7013/api/users/${userId}`);
            dispatch(deleteUser(userId)); // Dispatch action to delete user from Redux store
            // Handle success or navigate to appropriate page
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}

export default UserDeleteButton;
