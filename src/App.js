import Balance from "./components/Balance";
import { Header } from "./components/Header";
import Incomeexpense from "./components/Incomeexpense";
import Inputform from "./components/Inputform";
import Translist from "./components/Translist";
import { TransProvider } from './context/transContext'





function App() {
  return (
    <TransProvider>
      <Header />
      <div className="App">
        <Balance />
        <Incomeexpense />
        <Translist />
        <Inputform />
      </div>
    </TransProvider>
  );
}

export default App;
