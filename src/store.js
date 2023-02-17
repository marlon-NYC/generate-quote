import { create } from 'zustand'

const useStore = create((set) => ({
  a: [{name: "M"}],
  setA: (arg) => set((state) => ({ 
    ...state,
    a: arg 
})),  
  quote: "",
  setQuote: (quote) => set((state) => ({ 
    ...state,
    quote
})),  
}));



export default useStore;