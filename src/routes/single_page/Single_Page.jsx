import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "../../api";
import "./Singli_Page.css"

const Single_Page = () => {
  const [content, setContent] = useState(null);
  const data = useParams();

  useEffect(() => {
    axios(`/shows/${data.pageId}`)
      .then(response => setContent(response.data))
  }, []);


  return (
    <div>
      {
        content ?
          <div className="container">
            <div className="movie_card">
            <div className="page"><Link to="/">All Movies</Link> /  <span>{content.name}</span></div>
            <div className="movie_card_content">
              <p className="preview_movie_title"> <strong> {content.name}</strong></p>
              <div className="show_content">
                <img src={content.image.original} />
                <p className="description">{content.summary}</p>
                <div className="show_info_content">
                  <h4>Show Info</h4>
                  <p><strong>Network: </strong><span>{content.network.name}</span> (${content.premiered.slice(0, 4)} - ${content.ended.slice(0, 4)})</p>
                  <p><strong>Schedule: </strong>{content.schedule.days} at {content.schedule.time} ({content.runtime}min)</p>
                  <p><strong>Status: </strong>{content.status}</p>
                  <p><strong>Show Type: </strong>{content.type}</p>
                  <p><strong>Genres: </strong>{content.genres[0] ? content.genres[0] : ""}  {content.genres[1] ? " | " + content.genres[1] : ""}  {content.genres[1]}</p>
                  <p><strong>Official site: </strong><a href={content.network.officialSite}>Link</a></p>
                </div>
              </div>
            </div>
          </div>
          </div>
          :
          <></>
      }
    </div>
  )
}

export default Single_Page
