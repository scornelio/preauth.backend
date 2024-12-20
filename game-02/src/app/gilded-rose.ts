import { Item } from "../models/item";

export class GildedRose {
  constructor(public items: Item[]) {}

  updateQuality(): Item[] {
    this.items.forEach((item) => {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        return;
      }

      const isConjured = item.name.toLowerCase().includes("conjured");

      const qualityChange = this.getQualityChange(item.name, item.sellIn, isConjured);
      item.quality = Math.max(0, Math.min(50, item.quality + qualityChange));
      item.sellIn--;

      if (item.sellIn < 0) {
        const extraDegradation = this.getQualityChange(item.name, item.sellIn, isConjured);
        item.quality = Math.max(0, Math.min(50, item.quality + extraDegradation));
      }
    });

    return this.items;
  }

  private getQualityChange(name: string, sellIn: number, isConjured: boolean): number {
    let change = 0;

    switch (name) {
      case "Aged Brie":
        change = 1;
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        if (sellIn <= 0) return -50;
        else if (sellIn <= 5) change = 3;
        else if (sellIn <= 10) change = 2;
        else change = 1;
        break;
      default:
        change = -1;
    }

    return isConjured ? change * 2 : change;
  }
}
