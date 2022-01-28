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
});
