import { useDispatch } from 'react-redux';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Checkout from './components/Checkout';
import OrderDetails from './components/OrderDetails';
import Orders from './components/Orders';


function App() {
 // const dispatch = useDispatch();
  return (
    <div className="App">
        <Navbar/>
     
    <Routes>
    <Route path="/" element={<HomeScreen/>} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/orders/:orderId" element={<OrderDetails/>}/>
    <Route path="/orders" element={<Orders/>}/>
         
    </Routes>
    </div>
  );
}

export default App;
