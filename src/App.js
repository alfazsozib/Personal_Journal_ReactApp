import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import datas from "./cardData"


function App() {
  const dataParse = datas.map((item)=>{
    return <Card 
    {...item}
    />;
  })
  console.log(dataParse)

  
  return (
    <div className="App text-black-500">
     <Navbar />
      {dataParse}
    </div>
  );
}

export default App;
