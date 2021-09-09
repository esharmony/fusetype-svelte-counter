<script>
  import Counter from './FuseTypes/Counter';
</script>

<section>
  <button on:click={() => Counter.increment()}>Increment</button>
  <button on:click={() => Counter.decrement()}>Decrement</button>
  <button on:click={() => Counter.clearState()}>Reset</button>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
  }
  button {
   width: min-content;
   margin-right: 10px;
  }
</style>