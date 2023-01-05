import { component$, useStyles$, useClientEffect$ } from "@builder.io/qwik";

import { render } from './ar'
import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles)

  useClientEffect$(() => {
    render();
  })

  return (
    <section
      id="art-page"
      class="art-page-container snapped"
    >
      <canvas id="canvas"></canvas>
    </section>
  );
});
