var React = require('react');
var ReactDOM = require('react-dom');

// stylistic components
function Main() {
  return (
    <div className="container">
      <Title text={'Camper Leaderboard'} />
      <App />
      <Footer />
    </div>
  )
}

function Title(props) {
  return <h1 className="text-center title">{props.text}</h1>;
}

function Footer() {
  return <footer className="text-center footer">Cobbled together by Yu Dong Hee.</footer>;
}


// App starts here
class App extends React.Component {
  render() {
    return (
      <div className="site-content">
        Hello world!
      </div>
    )
  }
}


// render App
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);