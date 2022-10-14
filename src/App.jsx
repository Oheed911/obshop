
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
import Header from './components/Header/Header';

import {useState} from 'react';

function App() {
  //useContext 
  const [data, setData] = useState([
    {
      "title": "",
      "product_link": "",
      "source": "",
      "price": "",
      "rating": 0,
      "reviews": "",
      "delivery": "",
      "image_url": "",
    }])


    const [tempdata, settempData] = useState([
      {
        "title": "",
        "product_link": "",
        "source": "",
        "price": "",
        "rating": 0,
        "reviews": "",
        "delivery": "",
        "image_url": "",
      }])
  const [unique, setunique] = useState([])
  const [loading, setLoading] = useState(true)
  const [min, setMin] = useState(0.0)
  const [max, setMax] = useState(0)
  
  //get searchResp
  const handleCallback = (childData) => {

    //convert childData into json object
    setData(childData.data);
    settempData(childData.data);
    let maxval= Math.max(...tempdata.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      return price;
    }))
    setMax(maxval);

    let minVal= Math.min(...tempdata.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      return price;
    }))   
    setMin(minVal);

    setunique([]);
    
  }
  const handleloading = (childData) => {
    setLoading(childData.isLoading);
    
  }


  const handleClicked = () => {
    //filter data on basis of min and max
    //select only that that data whole data.price lies between min and max statue value
    let filteredData = tempdata.filter((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseInt(price);
      //check if price is between min and max
      if (price >= min && price <= max) {
        return item;
      }
      
    });
    setData(filteredData);
     //setting the minimum price
     let min=Math.min(...data.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      return price;
    }) )
    setMin(min);

    console.log(filteredData);
    let myprice=Math.max(...tempdata.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      
      return price;
    }))
    setMax(myprice);
  }
  let handleCheckBox = (checkVal) => {
    console.log(checkVal);
    //remove all values from data except checkVal
    let filteredData = tempdata.filter((item) => {
      if (item.source === checkVal) {
        return item;
      }
      //
    });
    //Check if data is empty or not
    setData(filteredData);
    console.log(filteredData);
    let myprice=Math.max(...tempdata.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      
      return price;
    }))
    setMax(myprice);

    //setting the minimum price
    let min=Math.min(...tempdata.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      return price;
    }))
    setMin(min);
    
  }
  let handleCheckBoxunclick = (checkVal) => {
    setData(tempdata);
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
            parentCallback={handleCallback}
            parenttocallback={handleloading}
            min={0} max={100000}
            source_list={[]}
          />
        </div>
        {loading || data.length===0 ? ''  :
          <div className="body-placement">
            <div className="filter-placement">
              <MultiRangeSlider
                min={//find min price from tempdata and setMin to that and also return value
                  Math.min(...tempdata.map((item) => {
                    //remove curreny from price
                    let price = item.price.replace(/[^0-9]/g, '');
                    //remove commas from price
                    price = price.replace(/,/g, '');
                    //convert price into integer
                    price = parseFloat(price);
                    return price;
                  }))   
              }
                max={
                  Math.max(...tempdata.map((item) => {
                    //remove curreny from price
                    let price = item.price.replace(/[^0-9]/g, '');
                    //remove commas from price
                    price = price.replace(/,/g, '');
                    //convert price into integer
                    price = parseFloat(price);
                    return price;
                  }))
                }
                //onchahnge send data to searchbar
                onChange={({ min, max }) => {
                  setMin(min)
                  //setmax to maximum price in data
                  setMax(max)
                 
                }
                }
              />
              <div className="provider-filter">
                <button className="filter-btn" onClick={handleClicked}>Set Filter</button>
                <hr/>
                <h3 className="Supp-title">Supplier</h3>
                <div className="provider-filter-container">
                  <div className="provider-filter-item">
                    {
                      //map over the unique sources and create a checkbox for each
                      [...new Set(tempdata.map(item => item.source))].map((item, index) => {
                        return (
                          //get on change event and send it to searchbar

                          <div key={index}>
                            <input className="filter-checkbox" type="checkbox" id={item} name={item} value={item} onChange={//set the state of the checkbox
                              (e) => {
                          
                                const value = e.target.value;
                               
                                const checked = e.target.checked;
                              
                                if (checked) {
                                  handleCheckBox(value);
                                  //setunique([...unique, value])
                                }
                                else {        
                                handleCheckBoxunclick();
                                }
                              }
                            } />
                            <label className="filter-label" for={item}>{item} </label>
                          </div>
                        )
                      }
                      )
                      
                    }
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="card-placement">
              {
                data.map((item) => {
                  return (
                    <a href={item.product_link} className="card__link"  target="_blank" rel="noopener noreferrer">
                      <Card title={item.title} description={item.source} image={item.image_url} link={item.product_link} price={item.price} seller={item.seller} delivery={item.delivery} rating={item.rating != null ? parseFloat(item.rating) : 0.0} />
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
