import { act } from '@testing-library/svelte';
import Counter from '../Counter';

describe('Counter tests', () => {
  beforeEach(() => {
    // clear state is a method that comes on all FuseTypes
    act(() => Counter.clearState())
  })
  describe('When incrementing the counter twice', () => {
    it('should have set the state count to 2', () => {
      act(() => Counter.increment());
      act(() => Counter.increment());
      expect(Counter.state.count).toEqual(2);
    });
  });
  describe('When decrementing the counter once after two increments', () => {
    it('should have set the state count to 1', () => {
      act(() => Counter.increment());
      act(() => Counter.increment());
      act(() => Counter.decrement());
      expect(Counter.state.count).toEqual(1);
    });
  });
});
