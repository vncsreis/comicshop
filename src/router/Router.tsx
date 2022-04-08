import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
