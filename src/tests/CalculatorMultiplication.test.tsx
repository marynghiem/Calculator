import React from "react";
import { mount } from "enzyme";
import { Calculator } from "../components/Calculator";

const wrapped = mount(<Calculator />);

describe("Calculator multiply", () => {
  beforeEach(() => {
    wrapped.find(".allClear").simulate("click");
  });
  it("should multiply two numbers", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".multiply").simulate("click");
    wrapped.find(".two").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("2");
  });
  it("should multiply two double digit numbers", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".zero").simulate("click");
    wrapped.find(".multiply").simulate("click");
    wrapped.find(".two").simulate("click");
    wrapped.find(".five").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("250");
  });
  it("should display the same number if the user clicks the mulitply sign multiple of times", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".multiply").simulate("click");
    wrapped.find(".multiply").simulate("click");
    wrapped.find(".multiply").simulate("click");
    wrapped.find(".multiply").simulate("click");
    wrapped.find(".multiply").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("1");
  });
  it("should multiply a number to the added sum", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".plus").simulate("click");
    wrapped.find(".two").simulate("click");
    wrapped.find(".multiply").simulate("click");
    wrapped.find(".five").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("15");
  });
});
