class Storage {
    #items;
    // Приватна властивість для зберігання товарів

    constructor(initialItems) {
        this.#items = initialItems;
    // Ініціалізація масиву початковими товарами
    }

    getItems() {
        return this.#items;
    // Повертає масив поточних товарів
    }

    addItem(newItem) {
        this.#items.push(newItem);
    // Додає новий товар до масиву
    }

    removeItem(itemToRemove) {
        const index = this.#items.indexOf(itemToRemove);
    // Знаходить індекс товару
        if (index !== -1) {
            this.#items.splice(index, 1);
    // Видаляє товар, якщо він знайдений
        }
    }
}
    
  




const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
