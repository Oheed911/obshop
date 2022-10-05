
import './App.css';
import Searchbar from "./components/Searchbar/Searchbar";
import Card from "./components/Cards/Card"
import MultiRangeSlider from "./components/Filter/MultiRangeSlider";
import Header from './components/Header/Header';
import ColorFilter from './components/Filter/colorFilter';
function App() {
  const data = [
    {
      "title": "Apple iPhone 14 - 128 GB - Purple - Unlocked",
      "link": "https://www.google.com/shopping/product/5247562739365477032?q=iphone+14&hl=en&gl=us&prds=eto:16936622814067454205_0,pid:10334515395077377569,rsk:PC_8053804293482199477&sa=X&ved=0ahUKEwik8Ive7cT6AhWzMEQIHRESAPQQ8wII-ws",
      "source": "Apple",
      "price": "$799.00",
      "rating": "3.9",
      "reviews": "74",
      "delivery": "Free delivery",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxzTdMpJLnlTzaf8OnklkxEwKlj3EG3Fi7aOZ8Y8umxQej_zrhGxFY_VmHesWQrqedI_esFERxZniy_7Kh5sgDVpBXKnA7bkp6gF1wcJdz&usqp=CAE"
    },
    {
      "title": "Apple iPhone 14 Pro - 128 GB - Deep Purple - T Mobile",
      "link": "https://www.google.com/shopping/product/16740617664395627081?q=iphone+14&hl=en&gl=us&prds=eto:5756555100084962234_0,pid:16504379707580309532,rsk:PC_249950349010311029&sa=X&ved=0ahUKEwik8Ive7cT6AhWzMEQIHRESAPQQ8wIIkQw",
      "source": "Apple",
      "price": "$0.00 now",
      "rating": "4.1",
      "reviews": "180",
      "delivery": "Free delivery",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmnAgthZRcUcESVvk2kJ91uMOURncrLeRMbg3MbmoQ3k_uAit2GhlS8PA06IRHDJmjlxokU205Qo4mlQ3Ywe3z7S83w6iCdrEqbkApuS92mLb8MCW4KoEqlQ&usqp=CAE"
    },
    {
      "title": "Apple iPhone 14 Pro Max - 256 GB - Gold - T Mobile",
      "link": "https://www.google.com/shopping/product/7022475092194570095?q=iphone+14&hl=en&gl=us&prds=eto:3906506708948636513_0,pid:16765341764715713808,rsk:PC_8672923537105206374&sa=X&ved=0ahUKEwik8Ive7cT6AhWzMEQIHRESAPQQ8wIIpgw",
      "source": "Best Buy",
      "price": "$0.00 now",
      "rating": "3.8",
      "reviews": "174",
      "delivery": "Free delivery by Oct 11 & Free 14-day returns",
      "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8DazHyzNFakMuTaJPNeLMcccOmBdsI3CB-RvXVflTr_iTjpyqmI8TFaEq73T0LIp573e49MHEMYJXyx_8JeIhO8fgCJBqNSxAV6l5nhCMJYfQWHqBQAtz&usqp=CAE"
    },
    {
      "title": "Apple iPhone 14 Plus - 256 GB - Blue  - Verizon",
      "link": "https://www.google.com/shopping/product/3736208268921276419?q=iphone+14&hl=en&gl=us&prds=eto:1330840200673006674_0,pid:4279269170019875181,rsk:PC_9468624372169813779&sa=X&ved=0ahUKEwik8Ive7cT6AhWzMEQIHRESAPQQ8wIIuww",
      "source": "Apple",
      "price": "$0.00 now",
      "rating": "2.6",
      "reviews": "54",
      "delivery": "Free delivery",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQFpWAN7_OrH5IWrvnb0QDptPaeIHU0CUJV4mDEjGkQ5OekHT1KyBcICY4HEqosfJqeADv4XFEDko3GLya7-bxOfvRmaL70b7yt_pFcucCGHmrcLCkVthuH&usqp=CAE"
    },
    {
      "title": "Apple - iPhone 14 Pro 256GB - Space Black (Sprint) - 24 monthly installments",
      "link": "https://www.google.com/url?url=https://www.bestbuy.com/site/apple-iphone-14-pro-256gb-space-black-sprint/6487317.p%3FskuId%3D6487317%26ref%3DNS%26loc%3D101&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwik8Ive7cT6AhWzMEQIHRESAPQQ2SkI0gw&usg=AOvVaw3m0rL5vEXQoW7QaSa0fIJI",
      "source": "Best Buy",
      "price": "$0.00 now",
      "rating": null,
      "reviews": null,
      "delivery": "Free delivery by Oct 11 & Free 14-day returns",
      "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQe0te6jnbdOnX4OA4girl86W6vYFwX00Ap77nVJI2mlk3fZwvB7TeN36f2fsvE6uVSv9Pb2h-3cidDKnfRLlGsjq6VFy3jGjmyzQ-VCEtq&usqp=CAE"
    },
    {
      "title": "Apple iPhone 14 Plus - 512 GB - Midnight - T-Mobile",
      "link": "https://www.google.com/shopping/product/641700760417016356?q=iphone+14&hl=en&gl=us&prds=eto:885761542683596238_0,pid:6363951612460392052,rsk:PC_15226888188452609044&sa=X&ved=0ahUKEwik8Ive7cT6AhWzMEQIHRESAPQQ8wII5Qw",
      "source": "Apple",
      "price": "$0.00 now",
      "rating": "4.3",
      "reviews": "118",
      "delivery": "Free delivery",
      "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6hd1_D4s_2BjqrObH4js3FGkRdxCBFTogZfFbef462AOYWyfiP4NM-dx-1nFjr-JGHP5SmHWvX6DEJeUlBQPQ0iUYvzc2JyOzPcl-Z7Ox4gZOifzodIx3&usqp=CAE"
    },
    {
      "title": "Apple iPhone 14 Pro 128 GB in Deep Purple with installment",
      "link": "https://www.google.com/url?url=https://www.verizon.com/smartphones/apple-iphone-14-pro/%3Fsku%3Dsku5600276&rct=j&q=&esrc=s&sa=U&ved=0ahUKEwik8Ive7cT6AhWzMEQIHRESAPQQ2SkI-ww&usg=AOvVaw1HFTMiKnwzXP6xLdR9-RAz",
      "source": "Verizon",
      "price": "$0.00 now",
      "rating": null,
      "reviews": null,
      "delivery": "Free delivery",
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSKmuGaQhBCXskIu0fqfVa8WaZIYUZYhWrNqFs82ZYyjzE-OZhT0cIQXAPv3TchYg2hzdgV_brmwd77bxqg-oZaJjsvr3ZrzrQVk3NkcnI&usqp=CAE"
    },
  ];
  return (
    <>


      <div className="App">
        <div className="header-place">
          <Header />
        </div>
        <h1 className="welcome-tag">Welcome on obshop, the best price comparator</h1>
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
            <ColorFilter/>
          </div>
          <div className="card-placement">
            {data.map((data) => (
              <Card
                title={data.title}
                price={data.price}
                description={data.description}
                image={data.image}
                rating={data.rating != null ? parseFloat(data.rating, 10) : 0}
                delivery={data.delivery}
                link={data.link}
              />
            ))}
          </div>

        </div>

      </div>
    </>


  );
}

export default App;
