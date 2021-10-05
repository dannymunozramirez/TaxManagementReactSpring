import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonGrid,
  IonHeader,
  IonItemDivider,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Services from "../../TaxManagementServices/Services";

class IncomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document_id: this.props.match.params.document_id,
      title: "",
      amount: "",
      description: "",
      date: "",
      type: "",
    };
  }

  componentDidMount() {
    Services.getTransactionById(this.state.document_id).then((response) => {
      let transaction = response.data;
      this.setState({
        title: transaction.title,
        amount: transaction.amount,
        description: transaction.description,
        date: transaction.date,
        type: transaction.type,
      });
    });
  }

  onBackHandler = () => {
    this.props.history.push("/Tab1");
  };

  render() {
    console.log(this.state.title + " TITLE");
    return (
      <div>
        <IonCard>
          <IonCardHeader>
            <IonTitle>TITLE</IonTitle> 
            <br/>
            <IonText> {this.state.title}</IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
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
            </IonGrid>
            <IonButton
              slot="start"
              class="ion-text-center"
              onClick={this.onBackHandler}
            >
              Back
            </IonButton>
          </IonCardContent>
        </IonCard>
      </div>
    );
  }
}

export default withRouter(IncomeView);
