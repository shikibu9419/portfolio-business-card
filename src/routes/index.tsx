import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Facebook, Instagram, LinkedIn, Twitter } from "../components/icons/logos";
import { Link } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <main>
      <section class="title">
        <h1 class="name">Kazuya Izumi</h1>
        <p class="role">Engineer / Researcher / Designer</p>
      </section>
      <section class="links">
        <Link href="https://twitter.com/shikibu9419" target="_blank">
          <Twitter size={60} />
        </Link>
        <Link href="https://www.facebook.com/shikibu9419/" target="_blank">
          <Facebook size={60} />
        </Link>
        <Link href="https://www.instagram.com/shikibu9419/" target="_blank">
          <Instagram size={60} />
        </Link>
        <Link href="https://www.linkedin.com/in/shikibu9419/" target="_blank">
          <LinkedIn size={60} />
        </Link>
      </section>
      <section>
        <Link href="https://kazuyaizumi.com">See portfolio (Japanese Only)</Link>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my page",
};
