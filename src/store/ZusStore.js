import { create } from "zustand";


const useCanvasState = create((set)=>({
  canvasState:[],
  addToCanvasState:(data)=>set((state)=>({canvasState:[...state.canvasState,data]})),
  removeElement:(id)=>set((state) => ({canvasState: state.canvasState.filter(ele => ele.id !== id)})),
  updateElement:(data)=>set((state)=>({canvasState: state.canvasState.map((ele)=>ele.id===data?.id ? data : ele)}))
}))

export default useCanvasState;