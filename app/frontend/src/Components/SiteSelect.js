function SiteSelect({ value, onChange }) {
  return (
    <label>
      Site:
      <select value={value} onChange={onChange}>
        <option value="Todas">Todas</option>
        <option value="Mercado Livre">Mercado Livre</option>
        <option value="Buscape">Buscapé</option>
      </select>
    </label>
  );
}

export default SiteSelect;
