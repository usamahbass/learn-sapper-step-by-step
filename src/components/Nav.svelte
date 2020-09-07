<script>
  export let segment;

  let isOpen = false 

  function toggleNav() {
      isOpen = !isOpen
  }
</script>

<style>
  @media (min-width: 769px) {
    nav {
      border-bottom: 1px solid gray;
    }
  }
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
        alt="covid-app"
      />
    </a>

    <span
      class="navbar-burger"
      class:is-active={isOpen}
      on:click={toggleNav}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </span>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" class:is-active={isOpen} >
    <div class="navbar-start">
      <a href="/" class="navbar-item" class:is-active={segment === undefined} > Home </a>

      <a href="/about" class="navbar-item" class:is-active={segment === "about"}> About </a>
    </div>
  </div>
</nav>
