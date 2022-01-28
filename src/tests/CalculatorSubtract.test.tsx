import React from "react";
import { mount } from "enzyme";
import { Calculator } from "../components/Calculator";

const wrapped = mount(<Calculator />);

describe("Calculator subtract", () => {
  beforeEach(() => {
    wrapped.find(".allClear").simulate("click");
  });

  it("should subtract two numbers", () => {
    wrapped.find(".nine").simulate("click");
    wrapped.find(".minus").simulate("click");
    wrapped.find(".eight").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("1");
  });
  it("should subtract two double digit numbers", () => {
    wrapped.find(".five").simulate("click");
    wrapped.find(".zero").simulate("click");
    wrapped.find(".minus").simulate("click");
    wrapped.find(".two").simulate("click");
    wrapped.find(".five").simulate("click");
    wrapped.find(".equal").simulate("click");
    expect(wrapped.find(".calculations").text()).toEqual("25");
  });
});
