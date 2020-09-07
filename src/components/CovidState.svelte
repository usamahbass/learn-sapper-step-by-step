<script>
  export let positif;
  export let sembuh;
  export let meninggal;
  export let terakhirUpdate;
</script>

<style>
  .columns {
    border: 1px solid black;
  }
</style>

<div class="section header">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Positif: {positif}</h2>
      <h2 class="is-3 column">Sembuh: {sembuh}</h2>
      <h2 class="is-3 column">Meninggal: {meninggal}</h2>
      <h2 class="is-3 column">Terakhir update: {terakhirUpdate}</h2>
    </div>
  </div>
</div>
