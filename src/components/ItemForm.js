import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, onFormChange, formData }) {
  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    };

    onItemFormSubmit(newItem);
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onFormChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={onFormChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
