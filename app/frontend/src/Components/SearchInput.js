function SearchInput({ value, onChange }) {
  return (
    <label>
      Search Text:
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

export default SearchInput;
