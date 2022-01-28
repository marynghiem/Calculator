import React from "react";
import { mount } from "enzyme";
import { Calculator } from "../components/Calculator";

const wrapped = mount(<Calculator />);

describe("Calculator equal", () => {
  beforeEach(() => {
    wrapped.find(".allClear").simulate("click");
  });
  it("should show calculation after pressing equal", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".plus").simulate("click");
    wrapped.find(".two").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("3");
  });
  it("should continue to add the previous number when clicking equal sign", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".plus").simulate("click");
    wrapped.find(".one").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("4");
  });
  it("should show the same number after clicking equal sign multiple of times", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("1");
  });
  it("should add to the first number even after clicking the equal sign multiple of times", () => {
    wrapped.find(".one").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".equal").simulate("click");
    wrapped.find(".plus").simulate("click");
    wrapped.find(".one").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("2");
  });
});
