<script context="module">
    import request from "../data/request.js"

    export async function preload() {
      try {
        const getData = await request.getData()

        return { getData }
      } catch(e) {}
    }
</script>

<script>
    import CovidState from "../components/CovidState.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let getData;

    console.log("data", getData);
</script>

<CovidState/>
<CovidChart/>
<TableContainer/>