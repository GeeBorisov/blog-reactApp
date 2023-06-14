import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {

    const [updateFlag, setUpdateFlag] = useState(false);
    const {data, isloading, error} = useFetch('http://localhost:8000/posts', updateFlag);

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isloading && <div>Loading...</div>}
            { data && <BlogList updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} posts={data} />  }
            
        </div>
       
    );
}
 
export default Home;