import { createContext, useContext, useMemo, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

export function useApiContext () {
    return useContext(Context);
}

const AppContext =({ children}) => {
    const [apiData, setApiData] = useState([]);
    const [data,setData] = useState([]);
    const [likes,setLiked] = useState([]);
    const [cart, setCart] = useState([]);

    const handleLikes = (product) => {
      const checkId = product?.id;
      const copyLike = [...likes];
      const filter = copyLike && copyLike.filter((item) => item.id === checkId);
      if(filter.length > 0){
        const result = copyLike && copyLike.filter((item) => item.id !== checkId);
        setLiked(result);
      }else {
        const ans = [...copyLike, product];
        setLiked(ans);
      }
    }
    
    const handleCart = (product) => {
      const checkId = product?.id;
      const copyCart = [...cart];
      console.log("copy", copyCart);
      const filter = copyCart && copyCart.filter((item) => item?.product?.id === checkId);
      if(filter.length > 0){
        const result = copyCart && copyCart.filter((item) => item?.product?.id !== checkId);
        console.log("remove", result);
        setCart(result);
      }else {
        const ans = [...copyCart, {numItems: 1, product}];
        console.log("Add", ans);
        setCart(ans);
      }
    }

    const url = "http://localhost:5000/";
    const headers = {
        "Content-Type": "application/json",
      };
      async function getData() {
        const response = await axios.get(url, { headers });
        setApiData(response.data);
      }

      async function getParticularData(id){
        const response = await axios.get(`${url}${id}`, { headers });
        setData(response.data);
        return response.data;
      }

      const value = useMemo(() => ({
        apiData,
        data,
         getParticularData,
         handleLikes,
         likes,
         handleCart,
         cart,
         setCart
      }), [apiData, data, handleLikes, likes, cart, handleCart]);

      useEffect(() => {
      getData();
      },[]);

    return <Context.Provider value={value}>{children}</Context.Provider>;

};

export default AppContext;