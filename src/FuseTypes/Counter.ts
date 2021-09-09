import { CreateFuseType } from "fusetype";

export interface CounterState {
  count:number;
}

export interface CounterFuseType {
  state:CounterState;
  increment:() => void;
  decrement:() => void;
}

const stopDecrementAtZero = (count: number):void => {
  if(count === 0) return;
  else Counter.state.count--;
}

const Counter: CounterFuseType = {
  state: {
    count:0,
  },
  increment: () => Counter.state.count++,
  decrement: () => stopDecrementAtZero(Counter.state.count),
}

export default CreateFuseType<CounterFuseType, CounterState>(Counter);