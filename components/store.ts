import {create} from 'zustand'

type PretzelStore ={
  inViewPretzel:string|null;
  setInViewPretzel:(feature:string|null) =>void;
}
export const usePretzelStore= create<PretzelStore>((set)=>({
  inViewPretzel:null,
  setInViewPretzel:(pretzel:string|null)=> set({inViewPretzel:pretzel})
}));