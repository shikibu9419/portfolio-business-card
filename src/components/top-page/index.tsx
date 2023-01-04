import { component$, useStyles$ } from "@builder.io/qwik";
import { Facebook, Instagram, Twitter } from "../icons/logos";
import { Link } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles)

  return (
    <section class="top-page-container">
      <section class="title">
        <h1 class="name">Kazuya Izumi</h1>
        <p class="role">Engineer / Researcher / Artist</p>
      </section>
      <section class="sns-links">
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
      <section class="portfolio-link">
        <Link href="/">See portfolio (WIP)</Link>
      </section>
    </section>
  );
});
