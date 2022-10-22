import { connect } from 'react-redux';
import App from './Component';
// connecting redux store to App component
const mapStateToProps = state => ({ dark: state.theme.dark });

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
