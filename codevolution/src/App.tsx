import './App.css'
import { Greet } from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name='Kauã' list={['A', 'B', 'C']}/>
    </div>
  )
}

export default App
