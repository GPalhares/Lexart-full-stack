function CategorySelect({ value, onChange }) {
  return (
    <label>
      Category:
      <select value={value} onChange={onChange}>
        <option value="Geladeira">Geladeira</option>
        <option value="TV">TV</option>
        <option value="Celular">Celular</option>
      </select>
    </label>
  );
}

export default CategorySelect;
