import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Counter from './components/Counter'

function App(){
  const [page, setPage] = useState("Home")

  const pageHandler = () => {
    if (page === "Home") {
      setPage("About")
    } else {
      setPage("Home")
    }
  }
  return (
    <div className="App">
      <Header pageHandler={pageHandler} page={page}/>
      <Main page={page}/>
      <Counter />

    </div>
  )
}

export default App
