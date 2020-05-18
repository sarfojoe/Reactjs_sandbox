/* import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Blog = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h1>This is Blog Page</h1>
      <ul>
        <li>
          <Link to={`${url}/html&css`}>HTML and CSS</Link>
        </li>
        <li>
          <Link to={`${url}/UIprototyping`}>UI Prototying</Link>
        </li>
        <li>
          <Link to={`${url}/react_basics`}>React Basics</Link>
        </li>
        <li>
          <Link to={`${url}/about`}>About</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/BlogId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};
const Topic = () => {
  let { BlogId } = useParams();
  return <h1>This is page for {BlogId}</h1>;
};
 */
/* const Blog = (props) => {
  return (
    <div className="post" onClick={props.click}>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <p>{props.desc}</p>
    </div>
  );


  {
    id: 1,
    title: "Lorem Ipsum er ganske enkelt fyldtekst",
    author: "Nana Sarfo",
    desc:
      "Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en ",
    img: "https://source.unsplash.com/featured/sunrise",
  };
  {
    id: 2,
    title: "Lorem Ipsum er ganske enkelt fyldtekst",
    author: "Myra Duku",
    desc:
      "Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en ",
    img: "https://source.unsplash.com/featured/laptop",
  },
  {
    id: 3,
    title: "Lorem Ipsum er ganske enkelt fyldtekst",
    author: "Adwoa Sika",
    desc:
      "Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en ",
    img: "https://source.unsplash.com/featured/snow",
  },
};
 */

/* export default Blog; */

import React from "react";
import Post from "../Post/Post";
import postdata from "../postdata";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

const Blog = () => {
  let match = useRouteMatch();
  const post = postdata;

  const blogList = post.map((post) => {
    return (
      <div class="posts">
        <div key={post.id}>
          <img src={post.img} alt={post.title} />
          <div>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <Link to={`${match.url}/${post.title}`}>Read more</Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Switch>
        <Route path="/blog/:postId">
          <Post />
        </Route>
        <Route path={match.path}>{blogList}</Route>
      </Switch>
    </div>
  );
};

export default Blog;
