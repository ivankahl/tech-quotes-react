import React, { Fragment } from "react";
import axios from "axios";

import "./styles.css";

import CentreScreenContainer from "./components/CentreScreenContainer";
import Quote from "./components/Quote";
import RefreshButton from "./components/RefreshButton";

export default class App extends React.Component {
  async retrieveQuote() {
    const response = await axios.get("/.netlify/functions/getQuotes");

    console.log(response.data);
  }

  render() {
    return (
      <Fragment>
        <RefreshButton onClick={this.retrieveQuote}>Refresh</RefreshButton>
        <CentreScreenContainer>
          <Quote quote="Hello World" author="Ivan Kahl" />
        </CentreScreenContainer>
      </Fragment>
    );
  }
}
