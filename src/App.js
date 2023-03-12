import './App.css';
import MainPage from './pages/MainPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MainPage />
    </LocalizationProvider>
  );
}

export default App;
