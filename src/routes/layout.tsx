import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <Slot />
      <footer>© 2023- Kazuya Izumi</footer>
    </>
  );
});
