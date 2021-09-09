<script lang="ts">
	import Counter, {CounterState} from './FuseTypes/Counter';
	import Buttons from './Buttons.svelte'
	let counterState: CounterState = Counter.state;

	const updateCounter = (state: CounterState) => {
		counterState = state;
	}

	Counter.register(updateCounter, "app");

</script>

<section>
	<p> {counterState.count}</p>
</section>
<Buttons />

<style>
	section {
		width: '100%';
		height: '100%';
		text-align: center;
	}
	p {
		font-size: x-large;
	}
</style>


