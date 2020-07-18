import React, { Fragment } from "react";
import axios from "axios";

import "./styles.css";

import CentreScreenContainer from "./components/CentreScreenContainer";
import Quote from "./components/Quote";
import RefreshButton from "./components/RefreshButton";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      selectedQuote: 0
    };
  }

  async retrieveQuotes() {
    const response = await axios.get("/.netlify/functions/getQuotes");

    this.setState({
      quotes: response.data
    });

    this.chooseRandomQuote();
  }

  chooseRandomQuote() {
    const quoteCount = this.state.quotes.length;

    this.setState({
      selectedQuote: Math.floor(Math.random() * quoteCount)
    });
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
