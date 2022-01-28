import React from "react";
import { mount } from "enzyme";
import { Calculator } from "../components/Calculator";

const wrapped = mount(<Calculator />);

describe("Calculator addition", () => {
  beforeEach(() => {
    wrapped.find(".allClear").simulate("click");
  });

  it("should add two numbers", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".plus").simulate("click");
    wrapped.find(".two").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("3");
  });

  it("should add two double digit numbers", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".zero").simulate("click");
    wrapped.find(".plus").simulate("click");
    wrapped.find(".two").simulate("click");
    wrapped.find(".two").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("32");
  });
});
