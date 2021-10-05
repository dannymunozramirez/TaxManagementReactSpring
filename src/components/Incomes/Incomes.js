import React, { Component } from "react";
import {
  IonButton,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonTitle,
} from "@ionic/react";
import { withRouter } from "react-router-dom";
import Services from "../../TaxManagementServices/Services";

class Incomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addIncomeHandler = this.addIncomeHandler.bind(this);
    this.deleteTransactionHandler = this.deleteTransactionHandler.bind(this);
    this.editTransaction = this.editTransaction.bind(this);
  }

  componentDidMount() {
    Services.getTransactions().then((response) => {
      this.setState({ items: Object.values(response.data) });
    });
  }

  editTransaction = (document_id) => {
    this.props.history.push(`/update-form/${document_id}`);
  };

  logHandler = () => {
    console.log("Handler");
  };

  addIncomeHandler = () => {
    this.props.history.push("/income-form");
  };

  viewIncome = (document_id) => {
    this.props.history.push(`/view-income/${document_id}`);
  };

  deleteTransactionHandler = (document_id) => {
    Services.deleteTransaction(document_id).then((response) => {
      this.setState({
        items: this.state.items.filter(
          (item) => item.document_id !== document_id
        ),
      });
    });
  };
  render() {
    return (
      <div>
        <IonList>
          <IonItem className="ion-align-self-left">
            <IonLabel>
              <IonTitle>Title</IonTitle>
            </IonLabel>
            <IonLabel>
              <IonTitle>Amount</IonTitle>
            </IonLabel>
            <IonLabel>
              <IonTitle>Type</IonTitle>
            </IonLabel>
            <IonLabel>
              <IonTitle>Date</IonTitle>
            </IonLabel>
            <IonLabel>
              <IonTitle>Description</IonTitle>
            </IonLabel>
            <IonLabel>
              <IonTitle>Actions</IonTitle>
            </IonLabel>
          </IonItem>
          <IonItemDivider></IonItemDivider>

          <IonList>
            {this.state.items.map(
              (item) =>
                item.type === "income" && (
                  <IonItem
                    className="ion-align-self-left"
                    key={1 + "" + item.document_id}
                  >
                    <IonLabel>{item.title}</IonLabel>
                    <IonLabel>{item.amount}</IonLabel>
                    <IonLabel>{item.type}</IonLabel>
                    <IonLabel>{item.date}</IonLabel>
                    <IonLabel>{item.description}</IonLabel>

                    <IonLabel>
                      <IonButton
                        color="secondary"
                        onClick={() => this.editTransaction(item.document_id)}
                      >
                        Update
                      </IonButton>
                      <IonButton
                        color="danger"
                        style={{ marginLeft: "10px" }}
                        onClick={() =>
                          this.deleteTransactionHandler(item.document_id)
                        }
                      >
                        Delete
                      </IonButton>

                      <IonButton
                        color="success"
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.viewIncome(item.document_id)}
                      >
                        View
                      </IonButton>
                    </IonLabel>
                  </IonItem>
                )
            )}
          </IonList>
        </IonList>
        <IonButton
          slot="end"
          class="ion-text-center"
          onClick={this.addIncomeHandler}
        >
          Add Income
        </IonButton>
      </div>
    );
  }
}

export default withRouter(Incomes);

/**
 * <IonRow>
                  <IonItemDivider></IonItemDivider>
                  <IonCol>
                    <IonHeader>Amount</IonHeader>
                    <br />
                    {this.state.amount}
                  </IonCol>
                  <IonCol>
                    <IonHeader>Date</IonHeader>
                    <br />
                    {this.state.date}
                  </IonCol>
                  <IonCol>
                    <IonHeader>Type</IonHeader>
                    <br />
                    {this.state.type}
                  </IonCol>
                  <IonCol>
                    <IonHeader>Description</IonHeader>
                    <br />
                    {this.state.description}
                  </IonCol>
                </IonRow>
 */

/**
 * <IonList>
              <IonItem className="ion-align-self-left">
                <IonLabel>
                  <IonTitle>Transaction Title</IonTitle>
                </IonLabel>
                <IonLabel>
                  <IonTitle>Amount</IonTitle>
                </IonLabel>
                <IonLabel>
                  <IonTitle>Type</IonTitle>
                </IonLabel>
                <IonLabel>
                  <IonTitle>Date</IonTitle>
                </IonLabel>
                <IonLabel>
                  <IonTitle>Description</IonTitle>
                </IonLabel>
                <IonLabel>
                  <IonTitle>Actions</IonTitle>
                </IonLabel>
              </IonItem>
              <IonItemDivider></IonItemDivider>

              <IonList>
                {this.state.items.map(
                  (item) =>
                    item.type === "income" && (
                      <IonItem
                        className="ion-align-self-left"
                        key={1 + "" + item.document_id}
                      >
                        <IonLabel>{item.title}</IonLabel>
                        <IonLabel>{item.amount}</IonLabel>
                        <IonLabel>{item.type}</IonLabel>
                        <IonLabel>{item.date}</IonLabel>
                        <IonLabel>{item.description}</IonLabel>

                        <IonLabel>
                          <IonButton
                            color="secondary"
                            onClick={() =>
                              this.editTransaction(item.document_id)
                            }
                          >
                            Update
                          </IonButton>
                          <IonButton
                            color="danger"
                            style={{ marginLeft: "10px" }}
                            onClick={() =>
                              this.deleteTransactionHandler(item.document_id)
                            }
                          >
                            Delete
                          </IonButton>

                          <IonButton
                            color="success"
                            style={{ marginLeft: "10px" }}
                            onClick={() => this.viewIncome(item.document_id)}
                          >
                            View
                          </IonButton>
                        </IonLabel>
                      </IonItem>
                    )
                )}
              </IonList>
            </IonList>
 */
