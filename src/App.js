
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
import Header from './components/Header/Header';
import ColorFilter from './components/Filter/colorFilter';
import { useState } from 'react';
import {Link} from "react-router-dom"
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
      "image": "",
    }])
    const [loading,setLoading] = useState(true)
    const [min,setMin] = useState(0)
    const [max,setMax] = useState(0)
  //get searchResp
  const handleCallback = (childData) =>{
    
    //convert childData into json object
    setData(childData.data);
    //data=childData;
    //console.log("child data is dfalksdjfalk",data);
  }
  const handleloading = (childData) =>{
    setLoading(childData.isLoading);
  }
  //Send min and max value to MultiRangeSlider


  return (
    <>
      <div className="App">
        <div className="header-place">
          <Header />
        </div>
        <h1 className="welcome-tag">Welcome on obshop, the best price comparator</h1>
        <div className="searchbar-placement">
          <Searchbar 
            parentCallback = {handleCallback}
            parenttocallback={handleloading} 
            min={min}  max={max}
          />
        </div>
      {loading?'':
        <div className="body-placement">
          <div className="filter-placement">
            <MultiRangeSlider
              min={0}
              max={1000}
              //onchahnge send data to searchbar
              onChange={({ min, max }) => {
                  setMin(min)
                  setMax(max)
                  console.log(min)
                  console.log(max)
                }
              }

            />
          </div>
          <div className="card-placement">
            {
                data.map((item) => {
                return (
                <a href={item.link} className="card__link">
                  <Card title={item.title} description={item.source} image={item.image} link={item.link} price={item.price} seller={item.seller} delivery={item.delivery} rating={item.rating!=null?parseFloat(item.rating):0.0}/>
                </a>)
               
              })}
          </div>

        </div>
      }

      </div>
    </>


  );
}

export default App;
