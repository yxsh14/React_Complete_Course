import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setdata] = useState({});
    // Now we need a hook which will invoked when it's called
    // Hume api ko sirf tabhi request bbejhni hai jab function invoked ho
    // iske liye appropiate hook hoga useEffect
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setdata(res[currency])).catch((err) => { console.log(`Error hai: ${err}`) })
        console.log(data);
    }, [currency])
    return data;
    // ab yaha humko currency data or setdata return karana hai to pura hook hi return kar dete hain or default hooks mai bhi yahi hota hai 
}
export default useCurrencyInfo;

// Ese ho gaya hamara custom hook create.




