//Post is associated with Blogs
import sanityClient from "../client.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Post = () => {
    const [postData, setPost] = useState(null);

    useEffect(()=>{
        sanityClient
            .fetch(`*[_type=="post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data)=> setPost(data))
            .catch(console.error);
    }, [])

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto ">
                <h1 className="text-2xl flex justify-center cursive"> Blogs </h1>
                <h2 className="text-lg flex justify-center mb-12"> Welcome to the page of Blogs </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article>
                        <Link to={"/post/"+ post.slug.current} key={post.slug.current}>
                        <span>
                            <img src="" alt="" />
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400" key={index}>
                                <h3></h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                </div>
            </section>
        </main>
    );
}
 
export default Post;