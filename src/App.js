import './App.css';
import Cards from './Components/Cards/Cards'
import Filter from './Components/Filter/Filter';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';

import { useSelector} from 'react-redux';

function App() {
  const filterlist = useSelector((state) => state.FilterSearch); 
  
  const renderCards = () => {
    return filterlist.map((item, i) => {
      return <Cards key={i} price={item.price} location={item.location} address={item.address} beds={item.beds} bathroom={item.bathroom} size={item.size}/>
    })
  }
  return (
    <div className="App">
      <Navbar />

      <div className='query_card'>
        <SearchBar />
        <Filter />
        
        
      </div>
      <div className='showdata'>
          {renderCards()}
        </div>
      
    </div>
  );
}

export default App;
