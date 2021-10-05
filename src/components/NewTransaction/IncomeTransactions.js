import React, { Component } from "react";
import { withRouter } from "react-router";
import Incomes from "../Incomes/Incomes";

class IncomeTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div>
        <Incomes />
      </div>
    );
  }
}

export default withRouter(IncomeTransactions);
