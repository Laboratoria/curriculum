import React from 'react'

const SearchBar = ({
  filterText, inStockOnly,
  setFilterText, setInStockOnly
}) => {
  return (
    <form>
      <input
        type="text" placeholder="Search..."
        value={filterText}
        onChange={evt => {
          setFilterText(evt.target.value)
        }}
        />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={evt => {
            setInStockOnly(evt.target.value)
          }}
          />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  setFilterText: PropTypes.func.isRequired,
  setInStockOnly: PropTypes.func.isRequired
}

export default SearchBar
