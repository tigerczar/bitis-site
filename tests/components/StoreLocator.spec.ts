import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import StoreLocator from "~/components/StoreLocator.vue";

describe("Show StoreLocator", () => {
  it("render component successful", () => {
    const wrapper = mount(StoreLocator);
    expect(wrapper.find("h2").text()).toContain("HỆ THỐNG CỬA HÀNG");
  });

  it("Have dropdown filter province", () => {
    const wrapper = mount(StoreLocator);
    expect(wrapper.find("select").exists()).toBe(true);
  });
});
