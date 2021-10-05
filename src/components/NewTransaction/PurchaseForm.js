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

class PurchaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document_id: 0,
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
      enteredType: "",
      enteredDescription: "",
    };

    this.addTransactionHandler = this.addTransactionHandler.bind(this);
    this.onTitleHandler = this.onTitleHandler.bind(this);
    this.onDateHandler = this.onDateHandler.bind(this);
    this.onAmountHandler = this.onAmountHandler.bind(this);
    this.onDescriptionHandler = this.onDescriptionHandler.bind(this);
  }

  // Handling form to sent to backend
  onSelectHandler = (event) => {
    this.setState({ enteredType: event.target.value });
  };

  onTitleHandler = (event) => {
    this.setState({ enteredTitle: event.target.value });
  };
  onDateHandler = (event) => {
    this.setState({ enteredDate: event.target.value });
  };
  onAmountHandler = (event) => {
    this.setState({ enteredAmount: event.target.value });
  };
  onDescriptionHandler = (event) => {
    this.setState({ enteredDescription: event.target.value });
  };

  // Handling buttons

  addTransactionHandler = (event) => {
    event.preventDefault();
    let transaction = {
      document_id: this.state.document_id + 1,
      title: this.state.enteredTitle,
      amount: +this.state.enteredAmount,
      date: new Date(this.state.enteredDate),
      type: "purchase",
      description: this.state.enteredDescription,
    };

    Services.createTransaction(transaction).then((response) => {
      this.props.history.push("/tab2");
    });
    

    this.setState({
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
      enteredType: "purchase",
      enteredDescription: "",
    });
  };

  cancelTransactionHandler = () => {
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
            <IonTitle>Add New Purchase</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput
                onIonChange={this.onTitleHandler}
                value={this.state.enteredTitle}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Date</IonLabel>
              <IonDatetime
                onIonChange={this.onDateHandler}
                displayFormat="YY MMM DD"
                placeholder="Select Date"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Amount</IonLabel>
              <IonInput
                onIonChange={this.onAmountHandler}
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
                onIonChange={this.onDescriptionHandler}
                value={this.state.enteredDescription}
              ></IonInput>
            </IonItem>

            <IonButton
              color="success"
              slot="start"
              class="ion-text-center"
              onClick={this.addTransactionHandler}
            >
              save
            </IonButton>
            <IonButton
              color="danger"
              slot="start"
              class="ion-text-center"
              onClick={this.cancelTransactionHandler}
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

export default withRouter(PurchaseForm);
