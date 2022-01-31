import React from "react";
import { mount } from "enzyme";
import { Calculator } from "../components/Calculator";

const wrapped = mount(<Calculator />);

describe("Calculator division", () => {
  beforeEach(() => {
    wrapped.find(".allClear").simulate("click");
  });
  it("should divide two numbers", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".zero").simulate("click");
    wrapped.find(".division").simulate("click");
    wrapped.find(".five").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("2");
  });
  it("should be able to return a decimal number when dividing two numbers ", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".division").simulate("click");
    wrapped.find(".five").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("0.2");
  });
  it("should display the same number if the user clicks the division sign multiple of times", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".division").simulate("click");
    wrapped.find(".division").simulate("click");
    wrapped.find(".division").simulate("click");
    wrapped.find(".division").simulate("click");
    wrapped.find(".division").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("1");
  });
});
