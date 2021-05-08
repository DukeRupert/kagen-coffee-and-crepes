<script>
  export let positions;
</script>

<div class="positions">
  <h2>Open Positions</h2>

  <ul>
    {#if positions.length == undefined}
      <p>FIXME</p>
    {:else if positions.length > 0}
      {#each positions as position}
        <li>{position.title}</li>
      {/each}
    {:else}
      <p>We are not seeking additional help at this time.</p>
    {/if}
  </ul>
</div>

<style>
  h2 {
    text-align: center;
  }

  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  li {
    margin: 1rem 0;
  }
</style>
