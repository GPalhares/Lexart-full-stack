function CategorySelect({ value, onChange }) {
  return (
    <label>
      Category:
      <select value={value} onChange={onChange}>
        <option value="Mobile">Mobile</option>
        <option value="Refrigerator">Refrigerator</option>
        <option value="TV">TV</option>
      </select>
    </label>
  );
}

export default CategorySelect;
