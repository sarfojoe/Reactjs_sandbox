import React, { Component } from "react";
import Post from "./Post/Post";

const posts = [
  {
    id: 1,
    title: "Lorem Ipsum er ganske enkelt fyldtekst",
    author: "Nana Sarfo",
    desc:
      "Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en ",
    img: "https://source.unsplash.com/featured/sunrise",
  },
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
];

class App extends Component {
  state = {
    posts: posts,
  };

  removeHandler = (removeId) => {
    const oldArray = [...this.state.posts];
    oldArray.splice(removeId, 1);
    this.setState({ posts: oldArray });
  };
  render() {
    const postList = this.state.posts.map((post, index) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          desc={post.desc}
          img={post.img}
          click={this.removeHandler.bind(this, index)}
        />
      );
    });

    return <div className="posts">{postList}</div>;
  }
}

export default App;
