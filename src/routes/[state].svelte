<script context="module">
  import stateNames from "../data/stateNames.js"

  export async function preload(page) {
    const state = page.params["state"]

    if(stateNames.find((el) => el.slug === state) === undefined) {
      console.log("should get error !");
      this.error(404, "Page Not Found !")
      return;
    } 
    try {
      return { state: page.params["state"] };
    } catch (e) {
      this.error(500, "There error is 500 please refresh this page !")
      return;
    }
  }
</script>

<script>
  import CovidState from "../components/CovidState.svelte";
  import CovidChart from "../components/CovidChart.svelte";

  export let state;
</script>

<svelte:head>
  <title>Covid 19 - {state}</title>
</svelte:head>

<h1>{state}</h1>
<CovidState/>
<CovidChart/>
