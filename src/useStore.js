import {create} from 'zustand';

export const useStore = create((set) => ({
    currentSection:'Home',
    setCurrentSection:(section) => set ({currentSection:section})
}));

