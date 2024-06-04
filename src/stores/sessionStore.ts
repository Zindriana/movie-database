import { create } from 'zustand';
import User from '../models/UserModel'

type SessionStore = {
    loggedInUser: User | null;
    login: (user: User) => void;
    logout: () => void;
};

const useSessionStore = create<SessionStore>((set) => ({
    loggedInUser: null,
    login: (user) => set({ loggedInUser: user }),
    logout: () => set({ loggedInUser: null })
}));

export default useSessionStore;