import { useEffect, useState } from "react"; 4.2k (gzipped: 1.8)
import GoodLIst from "./components/GoodLIst";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setData(json));
    })
}

return (
    <div className="app">
        <GoodLIst data={data} />
    </div>
);
export default App;