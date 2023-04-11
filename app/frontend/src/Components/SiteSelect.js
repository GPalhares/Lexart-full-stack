function SiteSelect({ value, onChange }) {
  return (
    <label>
      Site:
      <select value={value} onChange={onChange}>
        <option value="All">Todas</option>
        <option value="Mercado Livre">Mercado Livre</option>
        <option value="Buscapé">Buscapé</option>
      </select>
    </label>
  );
}

export default SiteSelect;
