import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import PurchaseTransactions from '../components/NewTransaction/PurchaseTransactions';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Purchase</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <PurchaseTransactions />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
