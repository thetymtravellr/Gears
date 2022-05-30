import axios from "axios";
import { useEffect, useState } from "react";

const useItems = () => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
       axios.get('https://inventory-management-site.herokuapp.com/inventory')
       .then(data => setItems(data.data))
    },[items])

    return { items }
}

export default useItems;