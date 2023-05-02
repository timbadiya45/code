import { createContext, useContext, useMemo, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

export function useApiContext () {
    return useContext(Context);
}

const AppContext =({ children}) => {
    const [apiData, setApiData] = useState([]);
    const [data,setData] = useState([]);
    
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
      }), [apiData, data]);

      useEffect(() => {
      getData();
      },[]);

    return <Context.Provider value={value}>{children}</Context.Provider>;

};

export default AppContext;