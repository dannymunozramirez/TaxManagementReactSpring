import axios from 'axios'

const TRANSACTION_REST_API_URL = "http://localhost:8080/api/"

class TransactionServices {
    getTransactions(){
      return  axios.get(TRANSACTION_REST_API_URL + "get/" )
    }

    createTransaction(transaction){
      return axios.post(TRANSACTION_REST_API_URL + "create/", transaction)
    }

    deleteTransaction(transactionId) {
      return axios.delete(TRANSACTION_REST_API_URL + "delete/" + transactionId);
    }

    updateTransaction(transaction, id) {
      return axios.put(TRANSACTION_REST_API_URL + "update/" + id,  transaction);
    }

    getTransactionById(document_id){
      return  axios.get(TRANSACTION_REST_API_URL + "get/" +  document_id)
    }
}

export default new TransactionServices();