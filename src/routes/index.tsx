import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import TopPage from "~/components/top-page";
import ScrollDown from "~/components/scrolldown";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <TopPage />
      <ScrollDown label="AR view" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to my page",
};
