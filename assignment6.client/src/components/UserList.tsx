import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserEditForm from './UserEditForm';
import UserDeleteButton from './UserDeleteButton';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    location: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [editUserId, setEditUserId] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('https://localhost:7097/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleEdit = (userId: string) => {
        setEditUserId(userId);
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {editUserId === user.id ? (
                            <UserEditForm user={user} />
                        ) : (
                            <>
                                {user.firstName} {user.lastName} - {user.email} - {user.location}
                                <button onClick={() => handleEdit(user.id)}>Edit</button>
                                <UserDeleteButton userId={user.id} />
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
