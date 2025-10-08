import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Newsletter from "~/components/Newsletter.vue";

describe("Newsletter", () => {
  it("warning when email is incorrect", async () => {
    console.log("[Newsletter] --> Test form error");
    const wrapper = mount(Newsletter);
    await wrapper.find('input[type="email"]').setValue("abc");
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.text()).toMatch(/không hợp lệ|error/i);
    console.log("[Newsletter] ==> Show correct error");
  });
  it("Show success message when email is correct", async () => {
    console.log("[Newsletter] --> Test form success");
    const wrapper = mount(Newsletter);
    await wrapper.find('input[type="email"]').setValue("user@test.com");
    await wrapper.find("form").trigger("submit.prevent");
    expect(wrapper.text()).toMatch(/cảm ơn|thành công/i);
    console.log("[Newsletter] ==> Register successful, reset input");
  });
});
