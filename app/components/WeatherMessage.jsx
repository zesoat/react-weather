let React = require('react');

// let WeatherMessage = React.createClass({
//   render: function(props) {
//     let {temp, location} = this.props;
//     return (
//       <h3>It is it {temp} in {location}</h3>
//     );
//   }
// });

// let WeatherMessage = (props) => {
//   let {temp, location} = props;
//   return (
//     <h3>It is it {temp} in {location}.</h3>
//   );
// };

let WeatherMessage = ({temp, location}) => {
  return (
    <h3>It is it {temp} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
