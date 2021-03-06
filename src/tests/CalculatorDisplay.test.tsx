import React from "react";
import { mount } from "enzyme";
import { Calculator } from "../components/Calculator";

const wrapped = mount(<Calculator />);

describe("Calculator display", () => {
  beforeEach(() => {
    wrapped.find(".allClear").simulate("click");
  });

  it("should show a zero when the calculator first loads", () => {
    expect(wrapped.find(".calculations").text()).toEqual("0");
  });
  it("should update the display when a number is pressed", () => {
    wrapped.find(".one").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("1");
  });
  it("should clear the display when a AC is pressed", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".allClear").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("0");
  });
  it("should allow the display to contain only one decimal", () => {
    wrapped.find(".decimal").simulate("click");
    wrapped.find(".decimal").simulate("click");
    wrapped.find(".decimal").simulate("click");
    wrapped.find(".decimal").simulate("click");
    wrapped.find(".one").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("0.1");
  });
});
