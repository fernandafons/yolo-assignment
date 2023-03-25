import './App.css';
import Games from './pages/Games';
import Users from './pages/Users';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/games" element={<Games />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
