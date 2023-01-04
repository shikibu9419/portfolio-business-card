import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Facebook, Instagram, Twitter } from "../components/icons/logos";
import { Link } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";
import ScrollDown from "~/components/scrolldown";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <main>
        <section class="title">
          <h1 class="name">Kazuya Izumi</h1>
          <p class="role">Engineer / Researcher / Artist</p>
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
        </section>
        <section>
          <Link href="/">See portfolio (WIP)</Link>
        </section>
      </main>
      <footer>© 2023- Kazuya Izumi</footer>
      <ScrollDown label="AR view" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my page",
};
