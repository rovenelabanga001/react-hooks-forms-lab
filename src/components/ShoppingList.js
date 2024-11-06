import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  const [itemList, setItemList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchItem(event.target.value);
  }

  function handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  console.log(formData);
  function onItemFormSubmit(newItem) {
    setItemList((prevItems) => [...prevItems, newItem]);
    setFormData({ name: "", category: "Produce" });
  }
  console.log(itemList);
  const itemsToDisplay = itemList.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchItem.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
        onFormChange={handleFormChange}
        formData={formData}
      />
      <Filter
        search={searchItem}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
