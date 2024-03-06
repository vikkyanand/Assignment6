import React from 'react';
import axios from 'axios';

interface UserDeleteButtonProps {
    userId: string;
}

const UserDeleteButton: React.FC<UserDeleteButtonProps> = ({ userId }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`https://localhost:7097/api/users/${userId}`);
            // Handle success
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}

export default UserDeleteButton;
