import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";

export type PropsType = {
  label: string;
};

export default component$(({ label }: PropsType) => {
  useStyles$(styles)

  return (
    <div class="scrolldown-container">
      <p class="scrolldown-label">{label}</p>
      <div class="scrolldown" />
    </div>
  );
});
