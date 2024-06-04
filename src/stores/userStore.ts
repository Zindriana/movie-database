import { create } from 'zustand';
import UserType from '../models/UserModel'

type UserStore = {
    userList: UserType[];
    setUserList: (user: UserType[]) => void;
    addUser: (user: UserType) => void;
}

const useUserStore = create<UserStore>((set) => ({
    userList : [],
    setUserList : (userList) => set({userList}),
    addUser: (user) => set((state) => ({userList:[...state.userList, user]}))

}));

export default useUserStore;