import React, { useContext, useEffect, useState } from 'react'
import TransactionContext from '../Context/TransactionContext'

const Form = () => {

    const { saveTransaction, edit, updateTransaction } = useContext(TransactionContext)
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const parsedAmount = parseInt(amount)
        if (edit.isEdit) {
            updateTransaction(edit.transaction.id, text, parsedAmount)
        }
        else {
            saveTransaction(text, parsedAmount)
        }
        setText("")
        setAmount("")
    }

    useEffect(() => {
        setText(edit.transaction.text)
        setAmount(edit.transaction.amount)
    }, [edit])


    return (
        <div>
            <form className='flex flex-col p-4 space-y-4' onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Enter Transaction' className='p-2 outline-none' onChange={(e) => setText(e.target.value)} value={text} required />
                <input type="number" placeholder='Enter Amount' className='p-2 outline-none' onChange={(e) => setAmount(e.target.value)} value={amount} required />
                <div className='flex justify-center mt-3'>
                    <button className='bg-teal-950 shadow-lg font-bold text-white tracking-wider text-l hover:bg-teal-900   px-4 py-1 rounded-lg  hover:translate-y-1 uppercase '>Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Form