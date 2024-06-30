import { useEffect, useState } from "react";
import axios from "../../api";
import { Link } from "react-router-dom";
import "./Content.css";
import logo from "../../images/movie-png.png";

const Content = () => {
  const [content, setContent] = useState([]);
  const [searchContent, setSearchContent] = useState("");
  const [data, setData] = useState(2);

  let count = 4;

  useEffect(() => {
    const loadContent = async () => {
      try {
        const res = await axios.get(`/shows`);
        setContent(res.data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    loadContent();
  }, []);

  const handleSearch = (e) => {
    setSearchContent(e.target.value);
  };

  const filteredContent = content.filter((element) =>
    element.name.toLowerCase().includes(searchContent.toLowerCase())
  );

  return (
    <div className="main_movie_content">
      <nav className="nav">
        <div className="container">
          <div className="nav_wrapper">
            <div className="nav_logo">
              <img src={logo} alt="logo" />
              <strong> Movies</strong>
            </div>
            <form id="nav_search-form">
              <input className="search-input"
                type="text"
                onChange={handleSearch}
                value={searchContent}
                id="search-input"
                placeholder="Search for movies or TV shows"
              />
            </form>
            <a href="/">Login</a>
          </div>
        </div>
      </nav>
      <section className="content">
        <div className="container">
          <div className="content_wrapper">
            {filteredContent.slice(0, count * data).map((element) => (
              <div key={element.id} className="card">
                <Link to={`/single-page/${element.id}`}>
                  <img src={element.image?.medium} alt={element.name} />
                </Link>
                <small className="card_year">{element.premiered.slice(0, 4)}</small>
                <div className="card-content">
                  <h3>{element.name}</h3>
                  <p><strong>Language:</strong> {element.language}</p>
                  <span><strong className="rating">Rating:</strong> {element.rating.average} / 10</span>
                  <p><strong>Scheduled:</strong> <span>{element.schedule.days.join(', ')}</span> <span>{element.schedule.time}</span></p>
                  <button className="btn">
                    <Link to={`/single-page/${element.id}`}>Watch</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="content_btn">
          <button type="button" onClick={() => setData((prevData) => prevData + 1)} className="content_card__btn">Show More</button>
        </div>
      </section>
    </div>
  );
};

export default Content;
