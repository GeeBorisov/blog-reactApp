import { useState, useEffect} from "react"

const useFetch = (url, updateFlag) => {
    const [data, setData] = useState(null)
    const [isloading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        // console.log('useEffect run');

        const abortCont = new AbortController();

        setTimeout(()=>{
        fetch(url, {signal: abortCont.signal}).then((res) => {
            console.log("🚀 ~ file: Home.js:14 ~ fetch ~ res:", res)
            if (res.ok !== true) {
                throw Error('Could not fetch the data from this resource');
            }
            return res.json()
        }).then((data) => {
            setData(data)
            setLoading(false)
            setError(null)
        }).catch((err)=>{
            if (err.name === "AbortError") {
                // console.log("fetch aborted");
            } else {
                setError(err.message)
                setLoading(false)
            }
        })
        }, 1000)

        return () => {
            // console.log('cleanup')
            abortCont.abort();
        }
    }, [updateFlag])

    return {data, isloading, error}
}  

export default useFetch;