import {useState, useEffect} from 'react'
import API_KEY from './keys'

//  ""
const CONTEXT_KEY = "9b"

const useGoogleSearch = (term) => {
    const [data,setDAta] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`

            ).then(response=>response.json())
            .then(result=>{
                setDAta(result)
            })
        }
        fetchData();

    },[term])

    return{data}
}

export default useGoogleSearch
