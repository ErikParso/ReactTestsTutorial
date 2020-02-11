import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

class App extends Component {

  render() {
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.props.fetchPosts
    };

    console.log(this.props.posts);

    return <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click the button to render posts." />
        <SharedButton {...configButton} />
        {this.props.posts && this.props.posts.length > 0 &&
          this.props.posts.map((post, i) => <ListItem key={i} title={post.title} desc={post.body} />)}
      </section>
    </div>
  };
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
