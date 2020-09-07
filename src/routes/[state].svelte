<script context="module">
  export async function preload(page) {
    console.log(page);

    return { state: page.params["state"] };
  }
</script>

<script>
  import CovidState from "../components/CovidState.svelte";
  import CovidChart from "../components/CovidChart.svelte";

  export let state;
</script>

<h1>{state}</h1>
<CovidState/>
<CovidChart/>
