import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Comic from '../pages/Comic';
import Home from '../pages/Home';
import Bag from '../pages/Bag';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/comic/:id" element={<Comic />} />
          <Route path="/bag" element={<Bag />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
