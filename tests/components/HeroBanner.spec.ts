import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import HeroBanner from "~/components/HeroBanner.vue";

beforeEach(() => {
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe("HeroBanner", () => {
  it("Show 1st banner when component is mount", () => {
    const wrapper = mount(HeroBanner);
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toContain("hero-slide-01");
  });

  it("Click next and the banner change to next image", async () => {
    const wrapper = mount(HeroBanner);
    const nextBtn = wrapper.find('button[aria-label="next"]');
    await nextBtn.trigger("click");
    const img = wrapper.find("img");
    expect(img.attributes("src")).toContain("hero-slide-02");
  });

  it("Previous to last banner when at the 1st banner and click prev button ", async () => {
    const wrapper = mount(HeroBanner);
    const prevBtn = wrapper.find('button[aria-label="prev"]');
    await prevBtn.trigger("click");
    const img = wrapper.find("img");
    expect(img.attributes("src")).toContain("hero-slide-05");
  });

  it("Auto change the banner after 5s", async () => {
    const wrapper = mount(HeroBanner);
    const imgBefore = wrapper.find("img").attributes("src");
    vi.advanceTimersByTime(5000);
    await wrapper.vm.$nextTick();
    const imgAfter = wrapper.find("img").attributes("src");
    expect(imgAfter).not.toBe(imgBefore);
  });
});
