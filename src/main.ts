import ItemManager from "./item-manager";

const itemManager = new ItemManager();

itemManager.addNewItem("ikea", "koltuk", "Section 1", 1500, "linkExample");
itemManager.addNewItem("Nord", "koltuk", "Section 1", 1500, "linkExample");

itemManager.removeFromItemList(2);
console.log(itemManager);
