import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

const initialState = {
  hideBtn: false
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ...initialState
    };
  }

  setButtonHidden = () =>
    this.setState({ hideBtn: true });
  
  render() {
    const configButton = {
      buttonText: "Get posts",
      emitEvent: () => {
        this.props.fetchPosts();
        this.setButtonHidden();
      }
    };

    return <div className="App" data-test="appComponent">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click the button to render posts." />
        {!this.state.hideBtn && <SharedButton {...configButton} />}
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
