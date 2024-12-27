import React, { Children, useContext } from 'react'
import TransactionContext from '../Context/TransactionContext'

const DashBoard = () => {

const {transactions} = useContext(TransactionContext)

const income = transactions.filter((transaction) => transaction.amount > 0).reduce((p,c) => p+c.amount, 0)
console.log(income)

const expense = transactions.filter((transaction) => transaction.amount < 0).reduce((p,c) => p+c.amount, 0)
console.log(expense)

const balance = transactions.reduce((p,c) => p+c.amount, 0)
console.log(balance)
    return (
        <div className='md:flex gap-3 mx-3 justify-center items-center space-y-4 md:grid md:grid-cols-3'>
            <div className='bg-teal-200 p-4 rounded-lg '>
                <h1 className='font-bold tracking-wide text-2xl'>Total Income</h1>
                <h2 className='text-xl'>{income}</h2>
            </div>

            <div className='bg-teal-300 p-4 rounded-lg'>
                <h1 className='font-bold tracking-wide text-2xl'>Total Expense</h1>
                <h2 className='text-xl'>{expense}</h2>
            </div>

            <div className='bg-teal-400 p-4 rounded-lg'>
                <h1 className='font-bold tracking-wide text-2xl'>Total Balance</h1>
                <h2 className='text-xl'>{balance}</h2>
            </div>

        </div>
    )
}

export default DashBoard