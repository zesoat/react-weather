let React = require('react');
let {Link, IndexLink} = require('react-router');

// let Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to="/" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
//         <Link to="/about" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
//         <Link to="/examples" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
//       </div>
//     );
//   }
// });

let Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
      <Link to="/about" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>About</Link>
      <Link to="/examples" activeClass="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
    </div>
  );
};

module.exports = Nav;
