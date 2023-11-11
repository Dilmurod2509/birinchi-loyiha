import React from "react"; 6.9k (gzipped: 2.7k)
import GoodItem from "./GoodItem";

const GoodLIst = ({ data }) => {
    return (
        <div className="goodList">
            {data.map((item) => (
                <GoodItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default GoodLIst;