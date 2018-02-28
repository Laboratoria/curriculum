// lib/FilterableProductTable/SearchBar
import { connect } from 'react-redux';
import SearchBarComponent from './components/SearchBar';
import { filterTextChanged, inStockOnlyChanged } from '../actions';

const SearchBarWithRedux = connect(
  function mapStateToProps(state) {
    const {
      filterText,
      inStockOnly
    } = state.AppReducer;

    return {
      filterText,
      inStockOnly
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      setFilterText(newFilterText) {
        dispatch(filterTextChanged(newFilterText))
      },
      setInStockOnly(newValue) {
        dispatch(inStockOnlyChanged(newValue))
      }
    };
  }
)(SearchBarComponent);

export default SearchBarWithRedux;
