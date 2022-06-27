import { data } from "assets/data";
import MailList from "components/organisms/MailList/MailList";
import Heading from "components/atoms/Heading/Heading";
import TotalChecked from "components/molecules/TotalChecked/TotalChecked";
import MailListProvider from 'contexts/MailListContext'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <MailListProvider>
          <Heading />
          <MailList list={data} />
          <TotalChecked />
        </MailListProvider>
      </header>
    </div>
  );
}

export default App;
