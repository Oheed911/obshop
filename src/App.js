
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
import Header from './components/Header/Header';
import ColorFilter from './components/Filter/colorFilter';
import { useEffect, useState } from 'react';
import LoadingSpinner from './components/Loadingspinner/LoadingSpinner';
function App() {

  //useContext 
  const [data,setData] = useState([
    {
      "title": "",
      "link": "",
      "source": "",
      "price": "",
      "rating": 0,
      "reviews": "",
      "delivery": "",
      "image": ""
    }])
    const [loading,setLoading] = useState(false)
  //get searchResp
  const handleCallback = (childData) =>{
    
    //convert childData into json object
    setData(childData.data);
    //data=childData;
    //console.log("child data is dfalksdjfalk",data);
  }

  const handleloading = (childData) =>{
    setLoading(childData)
  }


  return (
    <>
      <div className="App">
        <div className="header-place">
          <Header />
        </div>
        <h1 className="welcome-tag">Welcome on obshop, the best price comparator</h1>
        <div className="searchbar-placement">
          <Searchbar parentCallback = {handleCallback} parenttoCallback={handleloading}/>
        </div>

        <div className="body-placement">
          
          <div className="filter-placement">
          {
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />}
          </div>
        
          <div className="card-placement">
              {data.map((item) => {
                return <Card title={item.title} description={item.description} image={item.image} link={item.link} price={item.price} seller={item.seller} delivery={item.delivery} />

              })}
          </div>

        </div>

      </div>
    </>


  );
}

export default App;
