let React = require('react');
let {Link} = require('react-router');

// let Examples = React.createClass({
//   render: function(){
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });

let Examples = (props) => {
  return (
    <div>
      <h3 className="text-center page-title">Examples</h3>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
        <li>
          <Link to='/?location=Bangkok'>Bangkok, TH</Link>
        </li>
        <li>
          <Link to='/?location=Osaka'>Osaka, JP</Link>
        </li>
      </ol>
    </div>
  );
};


module.exports = Examples;
