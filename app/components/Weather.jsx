let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location:location,
        temp: temp,
        isLoading: false
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });

  },
  render: function(){
    let {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location){
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <h3 className="text-center">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
