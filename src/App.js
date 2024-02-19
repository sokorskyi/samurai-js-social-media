import React from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";
import { compose } from "redux";
import { connect } from "react-redux";
import { initApp, selectApp, setGlobalError } from "./redux/reducers/appReducer";
import Preloader from "./components/UI/Preloader/Preloader";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  
  handleGlobalRejection = (event) => {
    this.props.setGlobalError(event.reason.message)
  }

  componentDidMount() {
    // this.props.initApp()
    window.addEventListener('unhandledrejection', this.handleGlobalRejection);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleGlobalRejection)
  }

  render() {
    return (
      <div className="app-wrapper">
        {
          this.props.isAppInitialized
          ? <>
              <Header />
              <Navbar />
              <MainContent />
            </> 
          : <Preloader /> 
          }
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  isAppInitialized: selectApp(state).isAppInitialized,
});

const mapDispatchToProps = {
  initApp,
  setGlobalError,
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),

)(App);
