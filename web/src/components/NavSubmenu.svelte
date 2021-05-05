<script>
  import { dropdown } from "../store";
</script>

<ul class="dropdown-menu">
  <li class="dropdown-item-1">
    <a href="/"> Tri-Cities </a>
  </li>
  <li class="dropdown-item-2">
    <a href="/"> Spokane </a>
  </li>
</ul>

<style>
  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .dropdown:hover > .dropdown-menu {
    display: flex;
    flex-direction: column;
    opacity: 1;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 3;
    top: 100%;
    left: 0px;
    width: 180%;
    perspective: 1000px;
    display: none;
    transition: all var(--dark-mode-timing);
  }

  .dropdown-menu > li {
    display: flex;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 8px;
    align-items: center;
    background-color: var(--bg);
    opacity: 0;
    transition: all var(--dark-mode-timing) ease-in;
  }

  .dropdown-menu > li:hover {
    background-color: var(--elevated);
  }

  .dropdown-menu > li > a {
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
  }

  .dropdown-item-1 {
    animation: translateX 200ms 100ms ease-in-out forwards;
    transform-origin: top center;
  }
  .dropdown-item-2 {
    animation: translateX 300ms 200ms ease-in-out forwards;
    transform-origin: top center;
  }

  /* Dropdown Animation */
  @keyframes growDown {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }

    80% {
      transform: scaleY(1.1);
    }

    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  /* Slide-In Animation */
  @keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }

    80% {
      transform: translateX(-5px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
</style>
