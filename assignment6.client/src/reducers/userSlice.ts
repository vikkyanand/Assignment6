import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface User {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    location: string;
}
interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [],
};

//action for the user
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
    },
});
// Export action creators
export const { setUsers, addUser, updateUser, deleteUser } = userSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;
// Export the reducer
export default userSlice.reducer;
