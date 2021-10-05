import React, { Component } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonDatetime,
} from "@ionic/react";
import { withRouter } from "react-router-dom";
import Services from "../../TaxManagementServices/Services";

class UpdatePurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document_id: this.props.match.params.document_id, // getting id from the route
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
      enteredType: "",
      enteredDescription: "",
    };

    this.updatePurchase = this.updatePurchase.bind(this);
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.changeAmountHandler = this.changeAmountHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
  }

  componentDidMount() {
    Services.getTransactionById(this.state.document_id).then((res) => {
      let transaction = res.data;
      this.setState({
        enteredTitle: transaction.title,
        enteredDate: transaction.date,
        enteredAmount: transaction.amount,
        enteredDescription: transaction.description,
      });
    })
  }

  updatePurchase = (e) => {
    e.preventDefault();

    let transaction = {
      document_id: this.state.document_id,
      title: this.state.enteredTitle,
      date: this.state.enteredDate,
      amount: this.state.enteredAmount,
      type: "purchase",
      description: this.state.enteredDescription,
    };

    Services.updateTransaction(transaction, transaction.document_id).then((res) => {
      this.props.history.push("/tab2");
    });
  };

  changeTitleHandler = (event) => {
    this.setState({ enteredTitle: event.target.value });
  };

  changeDateHandler = (event) => {
    this.setState({ enteredDate: event.target.value });
  };
  changeDescriptionHandler = (event) => {
    this.setState({ enteredDescription: event.target.value });
  };
  changeAmountHandler = (event) => {
    this.setState({ enteredAmount: event.target.value });
  };

  cancel = () => {
    this.props.history.push("/tab2");
  };

  clearTransactionHandler = () => {
    this.setState({
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
      enteredType: "",
      enteredDescription: "",
    });
  };
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Update Purchase</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput
                onIonChange={this.changeTitleHandler}
                value={this.state.enteredTitle}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Date</IonLabel>
              <IonDatetime
                onIonChange={this.changeDateHandler}
                displayFormat="YY MMM DD"
                placeholder="Select Date"
                value={this.state.enteredDate}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Amount</IonLabel>
              <IonInput
                onIonChange={this.changeAmountHandler}
                value={this.state.enteredAmount}
              ></IonInput>
            </IonItem>
            {/* <IonItem>
              <IonLabel position="floating">Type</IonLabel>
              <IonSelect onIonChange={this.onSelectHandler}>
                <IonSelectOption value="income">Income</IonSelectOption>
                <IonSelectOption value="purchase">Purchase</IonSelectOption>
              </IonSelect>
            </IonItem> */}
            <IonItem>
              <IonLabel position="floating">Description (optional)</IonLabel>
              <IonInput
                onIonChange={this.changeDescriptionHandler}
                value={this.state.enteredDescription}
              ></IonInput>
            </IonItem>

            <IonButton
              color="success"
              slot="start"
              class="ion-text-center"
              onClick={this.updatePurchase}
            >
              Update
            </IonButton>
            <IonButton
              color="danger"
              slot="start"
              class="ion-text-center"
              onClick={this.cancel}
            >
              cancel
            </IonButton>
            <IonButton
              color="warning"
              slot="start"
              class="ion-text-center"
              onClick={this.clearTransactionHandler}
            >
              clear
            </IonButton>
          </IonList>
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(UpdatePurchase);
