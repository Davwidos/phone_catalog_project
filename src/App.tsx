import { useContext } from 'react';
import './App.scss';
import Item from './components/Item';
import MyContext, { MyContextProvider } from './provider/CartProvider';

const TotalCost = () => {
  const { cartValue } = useContext(MyContext);
  return <div>Total cost: {cartValue}</div>;
};

export const App = () => {
  return (
    <MyContextProvider>
      <div className="App">
        <h1>Product Catalog</h1>
        <Item id={3} />
        <Item id={5} />
        <br />
        <TotalCost />
      </div>
    </MyContextProvider>
  );
};

export default App;
