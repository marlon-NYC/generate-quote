import { create } from 'zustand'

const useStore = create((set) => ({  
  quote: "",
  setQuote: (quote) => set((state) => ({ 
    ...state,
    quote
})),
  isLoading: true,
  setIsLoading: (flag) => set((state) => ({ 
    ...state,
    isLoading: flag
})),  
  refreshCount: 0,
  incrementRefresh: () => set((state) => ({ 
    ...state,
    refreshCount: state.refreshCount + 1
})),  
}));



export default useStore;