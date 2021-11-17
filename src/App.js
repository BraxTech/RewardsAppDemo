import "./App.css";
import Navbar from "./NavBar/NavBar.component";
import CustomerProfileCard from "./Dashboard/Customer Profile Card/customer-profile-card.component";
import CustomerCard from "./Rework/Card/customer-card.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CustomerCard />
    </div>
  );
}

export default App;
