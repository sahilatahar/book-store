import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books/Books';
import Editor from './pages/Editor/Editor';
import { ContextProvider } from './context/Context';
import "./App.scss";

function App() {

  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/:page" element={<Editor />} />
          <Route path="/:page/:id" element={<Editor />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App