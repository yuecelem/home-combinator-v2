export default class Item {
    id: number;
    brand: string;
    itemType: string;
    sectionName: string;
    price: number;
    link: string;

    constructor(
        id: number,
        brand: string,
        itemType: string,
        sectionName: string,
        price: number,
        link: string,
    ) {
        this.id = id;
        this.brand = brand;
        this.itemType = itemType;
        this.sectionName = sectionName;
        this.price = price;
        this.link = link;
    }

    setId(id: number) {
        this.id = id;
    }

    setBrand(brand: string) {
        this.brand = brand;
    }

    setType(type: string) {
        this.itemType = type;
    }

    setAssignedSectionName(sectionName: string) {
        this.sectionName = sectionName;
    }

    setPrice(price: number) {
        this.price = price;
    }

    setLink(link: string) {
        this.link = link;
    }
}
