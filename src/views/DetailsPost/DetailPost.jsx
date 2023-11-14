import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Layout } from "../../components/Layout/Layout";
import { Loader } from "../../components/Loader/Loader";

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/posts", {
          params: {
            populate: "*",
            _where: [{ id: slug }],
          },
        });

        const item = response.data.data[0];

        const data = {
          id: item.id,
          name: item.attributes.name,
          date: item.attributes.date,
          description: item.attributes.description,
          imageUrl: item.attributes.image.data[0]?.attributes.url,
          categories: item.attributes.categories.data,
        };

        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <Layout>
      {loader ? (
        <Loader />
      ) : (
        post && (
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                {post.imageUrl && <img src={post.imageUrl} alt={post.name} />}
              </div>
              <div className="column is-half">
                <h1 className="title">{post.name}</h1>
                <p className="subtitle">{post.date}</p>
                <p>{post.description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <h2 className="title is-4">Categorías</h2>
                <ul>
                  {post.categories &&
                    post.categories.map((categoria) => (
                      <li key={categoria.id}>{categoria.attributes.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )
      )}
    </Layout>
  );
};

export { PostDetail };
