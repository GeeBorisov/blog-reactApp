// import { div } from "prelude-ls";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";
import deletePost from "./DeletePost";

const BlockDetails = () => {
    const {id} = useParams()
    const {data: blog, isloading, error} = useFetch('http://localhost:8000/posts/' + id);
    const navigate = useNavigate();

    const afterDelete = () => {
        navigate('/')
    }

    return (
        <div className="blog-details">
            {isloading && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {blog&& (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="author">Written by: {blog.author}</p>
                    <div className="blog-body">{blog.body}</div>
                    <button onClick={() => {deletePost(blog.id, afterDelete)}} className="btn-delete">Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlockDetails;