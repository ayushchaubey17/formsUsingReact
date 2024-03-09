import { useState } from 'react'

import Form from './Form'
import MultipleForm from './MultipleForm'


function App() {
  
  return (
    <>
      <h1>This is single form page</h1>
      <Form />
      <h1>This is Multiple form page</h1>
      <MultipleForm/>
    </>
  )
}

export default App
