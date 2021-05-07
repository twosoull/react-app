import React, { Component } from 'react';

import './App.css'; //이곳에 있는 css는 이곳의 컴포넌트의 디자인이 된다.

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>      
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>

    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>

    );
  }
}

class App extends Component {
    render () {
      return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="Html is HyperText MarkUp Language."></Content>
      </div>
    );
  }
}

export default App;