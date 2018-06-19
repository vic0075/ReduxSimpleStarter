import React, {Component} from 'react';
import {connect} from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {

    setWeather(cityData = {}) {
        if (isEmpty(cityData)) {
            return;
        }

        console.log(cityData);
        const {lon, lat} = cityData.coord;

        return (
            <tr key={cityData.name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <Chart data={cityData.temps} color="red" unit="K"/>
                <Chart data={cityData.pressures} color="green" unit="hPa"/>
                <Chart data={cityData.humidities} color="blue" unit="%"/>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {Object.values(this.props.weather).map(this.setWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather} = {}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList)