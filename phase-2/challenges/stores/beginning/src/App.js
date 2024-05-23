import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useEffect, useState } from 'react';

/*
Deliverables
1. Make states 'stores', 'query', and the form ('name', 'image', 'season', 'episode').
2. Make a GET request to localhost:8085/stores and pass the stores to 'setStores()'.
   Pass 'stores' as a prop to <StoreList /> so that it can render those stores.
3. Make a POST request when the <NewStoreForm /> is submitted, and also
   call 'setStores()' with the new store.
4. Change 'query' as the user types into <Search>, and as 'query' changes, change
   the list of stores that are being displayed in <StoreList>.
*/

function App() {
  const [ stores, setStores ] = useState([]);
  const [ query, setQuery ] = useState('');

  useEffect(() => {
    // Make a GET request for stores and populate the stores state
    fetch('http://localhost:8085/stores')
    .then(resp => resp.json())
    // .then(setStores)
    .then(storeArrayInDb => {
      setStores(storeArrayInDb);
    })
  }, []);

  const filterStores = stores.filter(store => store.name.toLowerCase().includes(query.toLowerCase()));

  console.log(filterStores);

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search query={query} setQuery={setQuery} />
      <NewStoreForm stores={stores} setStores={setStores} />
      <StoreList stores={filterStores} />
    </div>
  );
}

export default App;
