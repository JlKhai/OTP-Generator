import { Route, Routes } from 'react-router-dom'
import './App.css'
import OtpInput from './pages/OtpInput'
import OtpReq from './pages/OtpReq'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<OtpReq />} />
        <Route path="/optinput" element={<OtpInput />} />
      </Routes>
    </>
  )
}

export default App
