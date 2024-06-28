import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "../../api";

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
        <>
          <h3>{content.name}</h3>
        </>
        :
        <></>
      }
    </div>
  )
}

export default Single_Page
