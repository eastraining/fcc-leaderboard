var React = require('react');
var ReactDOM = require('react-dom');

// stylistic components
function Main() {
  return (
    <div className="main">
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
  constructor() {
    super();
    this.state = {
      'list': [], 
      'recent': true
    };
  }

  // TODO: get JSON array from API, and set state to the array
  switchBoard(bool) {
    
  }

  render() {
  	const topTitle = {'username': 'Camper Name', };
    return (
      <div className="site-content">
        <TitleRow />
        {this.state.list.map(function(listvalue, index){
          return <Row data={listvalue} index={index} />
        })}
      </div>
    )
  }
}

// TitleRow generator
function TitleRow() {
  
}

// Row generator
function Row(props) {
  const tempObj = props.data;
  const camper = tempObj['username'];
  const portrait = tempObj['img'];
  const recent = tempObj['recent'];
  const alltime = tempObj['alltime']
  
  return (
    <div className="table-row">
      <div className="serial-number">{props.index}</div>
      <Column data={camper} portrait={portrait} />
      <Column data={recent} />
      <Column data={alltime} />
    </div>
  );
}

// Column generator
function Column(props) {
  if ('portrait' in props) {
    return (
      <div className="table-column">
        <img src={portrait} className="table-portrait" />
        {props.data}
      </div>
    )
  }
  return (
    <div className="table-column">
      {props.data}
    </div>
  )
}


// render App
ReactDOM.render(
  <Main />,
  document.getElementById('app')
);