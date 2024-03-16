import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/userSlice';
import axios from 'axios';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    location: string;
}

const AddUserForm: React.FC = () => {
    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        location: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post<User>('https://localhost:7013/api/users', formData);
            dispatch(addUser(response.data));
            setFormData({
                id: '',
                firstName: '',
                lastName: '',
                address: '',
                email: '',
                location: ''
            });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddUserForm;