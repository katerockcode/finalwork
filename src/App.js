import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
      <div className='grid'>
        <div className='nav'><Nav/></div>
        <div className='content'><MainPage/></div>
        <div className='footer'><Footer/></div>
  </div>);
}

export default App;
