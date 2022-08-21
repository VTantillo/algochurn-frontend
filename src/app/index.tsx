import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import InfiniteSlider from './InfiniteSlider'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infinite-slider" element={<InfiniteSlider />} />
    </Routes>
  )
}

export default App
