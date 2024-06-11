import { create } from 'zustand';
import UserType from '../models/UserModel'
//import MovieType from '../models/MovieModel';

type UserStore = {
    userList: UserType[];
    setUserList: (user: UserType[]) => void;
    addUser: (user: UserType) => void;
    //addMovie: (movie: MovieType) => void
}

const useUserStore = create<UserStore>((set) => ({
    userList : [],
    setUserList : (userList) => set({userList}),
    addUser: (user) => set((state) => ({userList:[...state.userList, user]})),
    //addMovie: (movie) => set((state) => ({userList:[...state.userList, movie]})),
}));

export default useUserStore;