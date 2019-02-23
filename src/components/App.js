import React, { Component } from "react";
import ToolBar from "ToolBar";
import TipsPopup from "TipsPopup";
import DashboardPage from "DashboardPage";
// Remember to add import each page here

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* The ToolBar and TipsPopup that live on every page */}
        <ToolBar />
        <TipsPopup />

        {/* Include the <main class="layout"> directly within each of the  
          following components that (for now) represent all of our pages.
          Comment in/out each component page to test it (again, for now)  */}

        <IndexPage />
        {/* <SignupPage /> */}
        {/* <LoginPage /> */}
        <DashboardPage />
        {/* <ModuleStartPage /> */}
        {/* <PortfolioDisplayPage /> */}
        {/* <PortfolioCreatePage /> */}
        {/* <PortfolioEditPage /> */}
        {/* <HelpPage /> */}
        {/* <CompetencyPage /> */}

        {/* Once these are all created, we will use React Router to move
          between them, then split them into components  */}
      </div>
    ); // end return
  } // end render()
} // end class

export default App;
