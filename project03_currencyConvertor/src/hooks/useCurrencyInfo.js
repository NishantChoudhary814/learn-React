import { useState ,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=>JSON.parse(res))
        .then((res)=>setData(res[currency]))
    },[currency])

    return data;
}

export default useCurrencyInfo;
