import React, { Component } from "react";
import Services from "../../TaxManagementServices/Services";

import Purchases from "../purchases/Purchases";

class PurchaseTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    Services.getTransactions().then((response) => {
      this.setState({ items: response.data });
    });
  }

  render() {
    

    return (
      <div>
        <Purchases />
      </div>
    );
  }
}

export default PurchaseTransactions;
