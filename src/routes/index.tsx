import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Top from "~/components/top-page";
import ScrollDown from "~/components/scrolldown";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <Top />
      <footer>© 2023- Kazuya Izumi</footer>
      <ScrollDown label="AR view" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my page",
};
