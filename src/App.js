
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
import Header from './components/Header/Header';
import ColorFilter from './components/Filter/colorFilter';
import { useState } from 'react';
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
    setLoading(childData.isLoading);
  }

  return (
    <>
      <div className="App">
        <div className="header-place">
          <Header />
        </div>
        <h1 className="welcome-tag">Welcome on obshop, the best price comparator</h1>
        <div className="searchbar-placement">
          <Searchbar parentCallback = {handleCallback} parenttocallback={handleloading}/>
        </div>
      {loading?'':
        <div className="body-placement">
          <div className="filter-placement">
<<<<<<< HEAD
=======
          {
>>>>>>> 4ca2db90971ee083a9954e9a182e66f177110c46
            <MultiRangeSlider
              min={0}
              max={1000}
              //onchahnge send data to searchbar
              onChange={(value) => {
                setMin(value[0])
                setMax(value[1])
              }}
              
            />
          </div>
        
          <div className="card-placement">
<<<<<<< HEAD
            {
                data.map((item) => {
=======
              {data.map((item) => {
>>>>>>> 4ca2db90971ee083a9954e9a182e66f177110c46
                return <Card title={item.title} description={item.description} image={item.image} link={item.link} price={item.price} seller={item.seller} delivery={item.delivery} />

              })}
          </div>

        </div>
      }

      </div>
    </>


  );
}

export default App;
