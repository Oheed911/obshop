
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
import Header from './components/Header/Header';

import { useEffect, useState } from 'react';

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
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [tempmin, settempMin] = useState(0)
  const [tempmax, settempMax] = useState(0)
  let [supplierFilter, setsupplierFilter] = useState([])
  //get searchResp
  const handleCallback = (childData) => {

    //convert childData into json object
    setData(childData.data);
    settempData(childData.data);
    //find minmim value from data
    let minu = Math.min(...childData.data.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      return price;
    }))
    let maxu = Math.max(...childData.data.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      return price;
    }))
    settempMin(minu);
    settempMax(maxu);
    setunique([]);
    //setsupplierFilter([]);
  }
  const handleloading = (childData) => {
    setLoading(childData.isLoading);

  }
  useEffect(() => {
    setMin(tempmin);
    setMax(tempmax);
  }, [tempmin, tempmax])

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
    let minimum = Math.min(...data.map((item) => {
      //remove curreny from price
      let price = item.price.replace(/[^0-9]/g, '');
      //remove commas from price
      price = price.replace(/,/g, '');
      //convert price into integer
      price = parseFloat(price);
      return price;
    }))
    setMin(minimum);
    let myprice = Math.max(...tempdata.map((item) => {
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
  let handleCheckBox = () => {
    //remove all values from data except the values in supplierFilter
    let filteredData=null;
      filteredData = tempdata.filter((item) => {
        if (supplierFilter.includes(item.source)) {
          return item;
        }
      })
    
    console.log(filteredData);
    //Check if data is empty or not
    setData(filteredData);
  }
  let handleCheckBoxunclick = () => {
    if(supplierFilter.length==0){
      setData(tempdata);
    }
    else{
      let filteredData = tempdata.filter((item) => {
        if (supplierFilter.includes(item.source)) {
          return item;
        }
        else{
          return null;
        }
      })
      console.log(filteredData);
      //Check if data is empty or not
      setData(filteredData);
    }
   
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
        {loading || data.length === 0 ? '' :
          <div className="body-placement">
            <div className="filter-placement">
              <MultiRangeSlider
                min={
                  tempmin
                }
                max={
                  tempmax
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
                <hr />
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
                                  if(!supplierFilter.includes(value)){
                                    supplierFilter.push(value);
                                  }
                           
                                  handleCheckBox(value);
                                  //setunique([...unique, value])
                                }
                                else {
                                  //Remove all the values from supplier filter that are not checked
                                  console.log(supplierFilter);
                                  supplierFilter = supplierFilter.filter((item) => {
                                    if (item !== value) {
                                      return item;
                                    }
                                  })
                                  setsupplierFilter(supplierFilter);
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
                    <a href={item.product_link} className="card__link" target="_blank" rel="noopener noreferrer">
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
