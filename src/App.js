
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
import Header from './components/Header/Header';
import ColorFilter from './components/Filter/colorFilter';
function App() {
  const data = [
    {
      "title": "",
      "link": "",
      "source": "",
      "price": "",
      "rating": "",
      "reviews": "",
      "delivery": "",
      "image": ""
    }]
  //get searchResp
  const handleCallback = (childData) =>{
    console.log(childData);
    //data=childData;
  }
  return (
    <>


      <div className="App">
        <div className="header-place">
          <Header />
        </div>
        <h1 className="welcome-tag">Welcome on obshop, the best price comparator</h1>
        <div className="searchbar-placement">
          <Searchbar parentCallback = {handleCallback}/>
        </div>

        <div className="body-placement">
          <div className="filter-placement">

            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
            <ColorFilter/>
          </div>
          <div className="card-placement">
           
          </div>

        </div>

      </div>
    </>


  );
}

export default App;
