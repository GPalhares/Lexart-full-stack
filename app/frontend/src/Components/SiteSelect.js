function SiteSelect({ value, onChange }) {
  return (
    <label>
      Site:
      <select value={value} onChange={onChange}>
        <option value="All">Todos</option>
        <option value="Meli">Mercado Livre</option>
        <option value="Buscape">Buscapé</option>
      </select>
    </label>
  );
}

export default SiteSelect;
