import React from "react";
import { mount } from "enzyme";
import { Calculator } from "../components/Calculator";

const wrapped = mount(<Calculator />);

describe("Calculator percent", () => {
  beforeEach(() => {
    wrapped.find(".allClear").simulate("click");
  });

  it("should change a whole number into its percent decimal form", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".one").simulate("click");
    wrapped.find(".percent").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("0.11");
  });
  it("should have a decimal become a hundredth times smaller when percent is clicked twice", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".one").simulate("click");
    wrapped.find(".percent").simulate("click");
    wrapped.find(".percent").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("0.0011");
  });
});
