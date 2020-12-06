<script>
  import MdPlayArrow from 'svelte-icons/md/MdPlayArrow.svelte';
  import MdPause from 'svelte-icons/md/MdPause.svelte';
  import MdStop from 'svelte-icons/md/MdStop.svelte';

  import { isPlaying, isPaused } from "../stores";

  const togglePlaying = () => {
    $isPlaying = !$isPlaying;
  }
  const togglePaused = () => {
    $isPaused = !$isPaused;
  }
</script>

<button on:click={togglePlaying}>
  {#if $isPlaying}
    <MdStop />
  {:else}
    <MdPlayArrow />
  {/if}
</button>
<button class:paused={$isPaused} on:click={togglePaused}>
  <MdPause />
</button>

<style lang="scss">
  $buttonsize: 30px;

  button {
    width: $buttonsize;
    height: $buttonsize;
    text-align: center;
    vertical-align: middle;
    background-color: #eee;
    color: black;
  }
</style>