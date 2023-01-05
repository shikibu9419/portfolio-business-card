import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import ArtPage from "~/components/art-page";
import TopPage from "~/components/top-page";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <main>
      <TopPage />
      <ArtPage />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my page",
};
