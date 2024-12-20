import { expect } from "chai";
import { Item } from "../src/models/item";
import { GildedRose } from "../src/app/gilded-rose";

describe("Gilded Rose", () => {
  it("should update quality and sellIn correctly for normal items", () => {
    const gildedRose = new GildedRose([new Item("Normal Item", 10, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(19);
  });

  it("should never degrade quality below 0", () => {
    const gildedRose = new GildedRose([new Item("Normal Item", 10, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(0);
  });

  it("should handle Aged Brie correctly", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(11);
  });

  it("should handle Backstage passes correctly", () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(12);
  });

  it("should handle Sulfuras correctly", () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(80);
  });

  it("should handle Conjured items correctly", () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 10, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(8);
  });
});
