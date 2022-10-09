
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
import Header from './components/Header/Header';

import { useState } from 'react';

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
  const [unique, setunique] = useState([])
  const [loading, setLoading] = useState(true)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  //get searchResp
  const handleCallback = (childData) => {

    //convert childData into json object
    setData(childData.data);
    setunique([]);
    //data=childData;
    //console.log("child data is dfalksdjfalk",data);
  }
  const handleloading = (childData) => {
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
            parentCallback={handleCallback}
            parenttocallback={handleloading}
            min={min} max={max}
            source_list={unique}
          />
        </div>
        {loading ? '' :
          <div className="body-placement">
            <div className="filter-placement">
              <MultiRangeSlider
                min={0}
                max={10000}
                //onchahnge send data to searchbar
                onChange={({ min, max }) => {
                  setMin(min)
                  setMax(max)
                }
                }
              />
              <div className="provider-filter">
                <h3 className="Supp-title">Supplier</h3>
                <div className="provider-filter-container">
                  <div className="provider-filter-item">
                    {
                      //map over the unique sources and create a checkbox for each
                      [...new Set(data.map(item => item.source))].map((item, index) => {
                        return (
                          //get on change event and send it to searchbar

                          <div key={index}>
                            <input className="filter-checkbox" type="checkbox" id={item} name={item} value={item} onChange={//set the state of the checkbox
                              (e) => {
                                //get the value of the checkbox
                                const value = e.target.value;
                                //get the checked state of the checkbox
                                const checked = e.target.checked;
                                //if the checkbox is checked
                                if (checked) {
                                  //add the value to the array
                                  setunique([...unique, value])
                                }
                                //if the checkbox is unchecked
                                else {
                                  //remove the value from the array
                                  setunique(unique.filter((item) => item !== value))
                                }
                              }
                            } />
                            <label className="filter-label" for={item}>{item}</label>
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
                    <a href={item.product_link} className="card__link">
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
