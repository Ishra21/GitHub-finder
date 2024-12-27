import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import DashBoard from './Components/DashBoard'
import ListGroup from './Components/ListGroup'
import { TransactionProvider } from './Context/TransactionContext'

const App = () => {
  return (
    <TransactionProvider>
      <Navbar />
      <div className='h-screen bg-teal-700'>
      <div>
        <Form />
        <DashBoard />
        <ListGroup />
      </div>
      </div>
    </TransactionProvider>
  )
}

export default App