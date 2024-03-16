import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, setUsers } from '../reducers/userSlice';
import axios from 'axios';


interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    location: string;
}

const UserList: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('https://localhost:7013/api/users');
                dispatch(setUsers(response.data));
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, [dispatch]);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <div>{user.firstName} {user.lastName}</div>
                        <div>{user.email}</div>
                        <div>{user.address}</div>
                        <div>{user.location}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;