import React, { useContext } from 'react'
import ListItem from './ListItem'
import TransactionContext from '../Context/TransactionContext'

const ListGroup = () => {

    const {transactions} = useContext(TransactionContext)
    return (
        <div className='bg-emerald-200 shadow-2xl mx-4 mt-4 rounded-lg p-5'>
            <ul>
                {
                    transactions.map((transaction) => <ListItem key={transaction.id} transaction = {transaction} />)
                }
            </ul>
        </div>
    )
}

export default ListGroup