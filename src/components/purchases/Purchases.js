import React, { Component } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonTitle,
} from "@ionic/react";
import { withRouter } from "react-router-dom";
import Services from "../../TaxManagementServices/Services";

class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addPurchaseHandler = this.addPurchaseHandler.bind(this);
    this.deleteTransactionHandler = this.deleteTransactionHandler.bind(this);
    this.editTransaction = this.editTransaction.bind(this);
  }

  componentDidMount() {
    Services.getTransactions().then((response) => {
      this.setState({ items: Object.values(response.data) });
    });
  }

  editTransaction = (document_id) => {
    this.props.history.push(`/update-form-purchase/${document_id}`);
  };

  addPurchaseHandler = () => {
    this.props.history.push("/purchase-form");
  };
  viewPurchase = (document_id) => {
    this.props.history.push(`/view-purchase/${document_id}`)
  }

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
        <IonCard>
          <IonCardContent>
            <IonList>
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
                    item.type === "purchase" && (
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
                            onClick={() => this.viewPurchase(item.document_id)}
                          >
                            View
                          </IonButton>
                        </IonLabel>
                      </IonItem>
                    )
                )}
              </IonList>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonButton
          slot="end"
          class="ion-text-center"
          onClick={this.addPurchaseHandler}
        >
          Add Purchase
        </IonButton>
      </div>
    );
  }
}

export default withRouter(Purchase);
