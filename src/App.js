
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
function App() {
  const data = [
    {
      title: "AntDesign",
      price: "2000",
      description:"hellooowiow"
    },
    {
      title: "AntDesign",
      price: "2000",
      description:"hellooowiow"
    },
    {
      title: "AntDesign",
      price: "2000",
      description:"hellooowiow"
    }
  ];
  return (
    <div className="App">
      <div className="searchbar-placement">
        <Searchbar />
      </div>
      <div className="body-placement">
        <div className="filter-placement">

          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
        </div>
        <div className="card-placement">
          {data.map((data) => (
            <Card title={data.title} price={data.price} description={data.description}/>
          ))}
        </div>

      </div>

    </div>

  );
}

export default App;
