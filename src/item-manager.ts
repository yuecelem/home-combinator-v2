import Item from "./item.ts";
import Section from "./section.ts";

export default class ItemManager {
    itemList: Item[];
    sectionList: Section[];
    idCount = 1;

    constructor() {
        this.itemList = [];
        this.sectionList = [new Section("Section 1")];
    }

    addNewItem(
        brand: string,
        itemType: string,
        sectionName: string,
        price: number,
        link: string,
    ) {
        const newItem = new Item(
            this.idCount,
            brand,
            itemType,
            sectionName,
            price,
            link,
        );

        this.itemList.push(newItem);
        this.idCount += 1;
    }
}
