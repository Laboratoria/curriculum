import { connect } from 'react-redux';
import MainComponent from './components/Main';

const MainWithRedux = connect(
  // `connect` recibe dos parámetros. El primero de ellos es
  // `mapStateToProps` que justamente lo que haces es mapear valores del state
  // a props que recibirá `MainComponent`
  function mapStateToProps(state) {
    // buscamos los 3 valores que nos interesan
    const {
      filteredProducts,
      asideTitulo,
      asideLinks
    } = state.AppReducer;

    // y devolvemos las nuevas props
    return {
      products: filteredProducts,
      asideTitulo,
      asideLinks
    };
  }
)(MainComponent);

export default MainWithRedux;
