import React from "react";
import { mount } from "enzyme";
import { Calculator } from "../components/Calculator";

const wrapped = mount(<Calculator />);

describe("Calculator positive and negative", () => {
  beforeEach(() => {
    wrapped.find(".allClear").simulate("click");
  });

  it("should change the positive number into a negative number", () => {
    wrapped.find(".four").simulate("click");
    wrapped.find(".positiveOrNegative").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("-4");
  });
  it("should change the negative number into a positive number", () => {
    wrapped.find(".four").simulate("click");
    wrapped.find(".positiveOrNegative").simulate("click");
    wrapped.find(".positiveOrNegative").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("4");
  });
  it("should change the positive answer into a negative number after adding two numbers", () => {
    wrapped.find(".four").simulate("click");
    wrapped.find(".plus").simulate("click");
    wrapped.find(".four").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".positiveOrNegative").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("-8");
  });
  it("should change the negative answer into a positive number after subtracting two numbers", () => {
    wrapped.find(".four").simulate("click");
    wrapped.find(".minus").simulate("click");
    wrapped.find(".seven").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".positiveOrNegative").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("3");
  });
  it("should change two positive numbers and add them to get a negative number", () => {
    wrapped.find(".three").simulate("click");
    wrapped.find(".positiveOrNegative").simulate("click");
    wrapped.find(".plus").simulate("click");
    wrapped.find(".seven").simulate("click");
    wrapped.find(".positiveOrNegative").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("-10");
  });
});
