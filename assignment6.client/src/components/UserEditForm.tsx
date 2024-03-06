import React, { useState } from 'react';
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
    const [userData, setUserData] = useState(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7097/api/users/${userData.id}`, userData);
            // Handle success
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} />
                <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
                <input type="text" name="address" value={userData.address} onChange={handleChange} />
                <input type="email" name="email" value={userData.email} onChange={handleChange} />
                <input type="text" name="location" value={userData.location} onChange={handleChange} />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UserEditForm;
