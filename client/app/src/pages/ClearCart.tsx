import React, { useEffect } from "react";

const ClearCart: React.FC = () => {
 useEffect(() => {
    // This code runs after the component mounts
    localStorage.removeItem("shopping-cart");
 }, []); // The empty array means this effect runs once on mount

 return <>
    <h1>Cart Cleared</h1>
 </>;
};

export default ClearCart;
