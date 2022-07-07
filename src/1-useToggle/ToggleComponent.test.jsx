import React from "react";
import { beforeEach, describe, expect, it} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToggleComponent from "./ToggleComponent";

describe("ToggleComponent test", () => {
  let component

  beforeEach(() => {
    component = render(<ToggleComponent />);
  })

  it("renders content", () => {
    component.getAllByText("false");
  });

  it("toggle value", ()=> {
    const button = component.getByText("Toggle");
    fireEvent.click(button);
    expect(screen.getByText("true")).toBeInTheDocument();
  })

  it("set value to true", ()=> {
    const button = component.getByText("Set True");
    fireEvent.click(button);
    expect(screen.getByText("true")).toBeInTheDocument();
  })

  it("set value to false", ()=> {
    const button = component.getByText("Set False");
    fireEvent.click(button);
    expect(screen.getByText("false")).toBeInTheDocument();
  })
});
