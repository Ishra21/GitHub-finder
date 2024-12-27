import React, { useContext } from 'react'
import TransactionContext from '../Context/TransactionContext'

const ListItem = ({transaction}) => {
const {deleteTransaction, editTransaction} = useContext(TransactionContext)

    return (
        <li className='py-5'>
            <h1 className='text-3xl font-bold'>{transaction.text}</h1>
            <h3 className='text-xl font-semibold'>{transaction.amount}</h3>
            <span className='float-end space-x-2'>
                <button className='font-semibold bg-yellow-500 px-3 py-1 rounded-sm' onClick={()=>editTransaction(transaction)}>Edit</button>
                <button className='font-semibold bg-red-600 px-3 py-1 rounded-sm' onClick={()=> deleteTransaction(transaction.id)}>Delete</button>
            </span>
        </li>
    )
}

export default ListItem