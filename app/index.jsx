var React = require('react');
var ReactDOM = require('react-dom');

// used links
const fccAPI = 'https://fcctop100.herokuapp.com/api/fccusers/top/'

// stylistic components
function Main() {
  return (
    <div className="main container">
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
      'category': 'recent'
    };

    this.getJSON = this.getJSON.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.getJSON(this.state.category, this);
  }

  // get JSON array from API, and set state to the array
  getJSON(category, object) {
    var request = new XMLHttpRequest();
    request.open('GET', fccAPI + category, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        object.setState({'list': JSON.parse(request.responseText)});
      }
      else if (request.readyState === 4 && request.status !== 200) {
        alert('error: JSON API call failed.');
      }
    };
    request.send();
  }

  // TODO: handling change of category

  render() {
  	const topTitle = {'username': 'Camper Name', };
    return (
      <div className="site-content">
        <TitleRow />
        {this.state.list.map(function(listvalue, index){
          return <Row data={listvalue} key={index} index={index} />
        })}
      </div>
    )
  }
}

// TitleRow generator
function TitleRow() {
  return (
    <div className="table-row">
      <div className="serial-number">#</div>
      <Column data={'Camper Name'} />
      <Column data={'Past 30 Days'} />
      <Column data={'All Time'} />
    </div>
  )
}

// Row generator
function Row(props) {
  const tempObj = props.data;
  const camper = tempObj['username'];
  const portrait = tempObj['img'];
  const recent = tempObj['recent'];
  const alltime = tempObj['alltime'];
  const index = props.index + 1;
  
  return (
    <div className="table-row">
      <div className="serial-number">{index}</div>
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
      <div className="table-column name-column">
        <img src={props.portrait} className="table-portrait" />
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