<script context="module">
    import request from "../data/request.js"

    export async function preload() {
      try {
        throw new Error("this is bad :(")
        const getData = await request.getData()

        return { getData }
      } catch(e) {
        this.error(500, "There was an error in calling the api, please try again in 5 minutes.")
        return;
      }
    }
</script>

<script>
    import CovidState from "../components/CovidState.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";

    export let getData;

    console.log("data", getData);
</script>

<CovidState {...getData} />
<CovidChart/>
<TableContainer/>