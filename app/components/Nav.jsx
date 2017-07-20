let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    alert('Not yet wired up!');
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

// let Nav = (props) => {
//   return (
//     <div className="top-bar">
//       <div className="top-bar-left">
//         <ul className="menu">
//           <li className="menu-text">
//             React Weather App
//           </li>
//           <li>
//             <IndexLink to="/" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
//           </li>
//           <li>
//             <Link to="/about" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
//           </li>
//           <li>
//             <Link to="/examples" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="top-bar-right">
//         <form onSubmit={this.onSearch}>
//
//         </form>
//       </div>
//     </div>
//   );
// };

module.exports = Nav;
