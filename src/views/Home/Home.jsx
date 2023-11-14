import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Loader } from "../../components/Loader/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/posts?populate=*"
        );

        const mappedData = response.data.data.map((item) => ({
          id: item.id,
          name: item.attributes.name,
          date: item.attributes.date,
          description: item.attributes.description,
          slug: item.attributes.slug,
          imageUrl: item.attributes.image.data[0]?.attributes.url,
          categories: item.attributes.categories.data,
        }));

        setData(mappedData);
        setLoader(false);
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="container">
        {loader ? (
          <Loader />
        ) : (
          <div className="columns">
            {data.map((item) => (
              <div key={item.id} className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <Link to={`/post/${item.slug}`}>
                      <figure className="image is-4by3">
                        <img src={item.imageUrl} alt={item.name} />
                      </figure>
                    </Link>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">{item.name}</p>
                    <p className="subtitle is-6">{item.date}</p>
                    <div className="content">{item.description}</div>
                    {item.categories.map((category) => (
                      <p
                        key={category.attributes.name}
                        style={{ backgroundColor: category.attributes.color }}
                        className="subtitle is-6 p-2"
                      >
                        {category.attributes.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};
