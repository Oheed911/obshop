
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
function App() {
  return (
    <>
      
      <MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
    </>
  
  );
}

export default App;
