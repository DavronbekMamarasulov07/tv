import { Fragment, useEffect, useState } from "react";
import axios from "../../api";
import { Link } from "react-router-dom";
import "./Content.css";

const Content = () => {
  const [content, setContent] = useState([]); 

  useEffect(() => {
    const loadContent = async () => {
      try {
        const res = await axios("/shows");
        setContent(res.data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    loadContent();
  }, []);

  console.log(content);

  return (
    <section className="content">
      <div className="container">
        <div className="content_wrapper">
          {content.map((element) => (
            <div key={element.id} className="content_card">
              <Link to={`/single-page/${element.id}`}>
                <h3>{element.status}</h3>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;



