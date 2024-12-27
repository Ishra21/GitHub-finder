import { Children, createContext, useState } from "react";

const TransactionContext = createContext()

export const TransactionProvider =({children}) =>{


const [transactions, setTransactions] = useState([])

// Delete transaction
const deleteTransaction = (id) =>{
    // console.log(id)
    setTransactions(transactions.filter((item)=> item.id !== id ))
}

// Add Transaction
const saveTransaction = (text,amount) =>{
// console.log(text,amount)
setTransactions([{id:crypto.randomUUID(), text: text, amount : amount}, ...transactions])
}

const[edit, setEdit] = useState({transaction  : {}, isEdit : false})
// Edit transaction
const editTransaction = (transaction) =>{
    // console.log(transaction)
    setEdit({transaction : transaction, isEdit: true})
}

// Update Transaction
const updateTransaction = (id,text,amount) =>{
    setTransactions(transactions.map((transaction) => {
        if(transaction.id == id) {
            return {id,text, amount}
        }else { 
            return transaction;
        }
    }))
    setEdit({transaction : {}, isEdit: false})
}

    return(
        <TransactionContext.Provider value={{transactions, deleteTransaction, saveTransaction, editTransaction, edit, updateTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContext