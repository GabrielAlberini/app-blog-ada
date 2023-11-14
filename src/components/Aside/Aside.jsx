import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

/* eslint-disable react/prop-types */
export const Aside = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-blog-ada.onrender.com/api/posts?populate=*"
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
    <div className="column is-one-quarter">
      <aside className="menu">
        <p className="menu-label">Menú</p>
        {loader ? (
          <Loader />
        ) : (
          <ul className="menu-list">
            {data?.map((item) => {
              return (
                <li key={item.name}>
                  <Link to={`post/${item.slug}`} href="#">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </aside>
    </div>
  );
};
