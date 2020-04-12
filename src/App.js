import React from 'react';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './Api';
import coronaImage from './images/image.png';

class App extends React.Component {

    state = {
        data : {},
        country: "",
        isLoading: false
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState( {
            data : fetchedData
        });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country});
    }

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={ this.state.data }/>
                <CountryPicker handleChange={this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/>
            </div>
        )
    }
}

export default App;
