import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Buttons";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

storiesOf("ColorButton", module)
  .addDecorator(withKnobs)
  .add("red", () => (
    <Button
      color={select("color", { Red: "red", Dark: "darkred" }, "red")}
      onClick={action("clicked")}
    />
  ))
  .add("blue", () => (
    <Button color={text("color", "blue")} onClick={action("clicked")} />
  ));
