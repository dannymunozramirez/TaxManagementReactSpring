import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Incomes from '../components/Incomes/Incomes.js';
import './Tab1.css';

const Tab1: React.FC = (props) => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Incomes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Incomes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Incomes />
      </IonContent>
      
    </IonPage>
  );
};

export default Tab1;
