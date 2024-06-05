import { create } from 'zustand';
import UserType from '../models/UserModel';

type SessionStore = {
    loggedInUser: UserType | null;
    login: (user: UserType) => void;
    logout: () => void;
};

const useSessionStore = create<SessionStore>((set) => ({
    loggedInUser: null,
    login: (user) => set({ loggedInUser: user }),
    logout: () => set({ loggedInUser: null })
}));

export default useSessionStore;