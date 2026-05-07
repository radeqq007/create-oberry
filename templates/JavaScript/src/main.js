import { $, $effect, $ref } from "oberry";

const count = $ref(0);
const counter = $("#counter-value");
counter.bind(count);

$effect(() => {
  if (count() > 0) {
    counter.css({ color: "var(--secondary)" });
  } else if (count() < 0) {
    counter.css({ color: "var(--primary)" });
  } else {
    counter.css({ color: "var(--foreground)" });
  }
});

$("#increment-btn").on("click", () => {
  count(count() + 1);
});

$("#decrement-btn").on("click", () => {
  count(count() - 1);
});
