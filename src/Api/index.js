import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let apiUrl = URL;
    if (country && country !== 'global') {
        apiUrl = `${URL}/countries/${country}`
    }
    try {
        const { data } = await axios.get(apiUrl);
        return {
            confirmed : data.confirmed,
            recovered : data.recovered,
            deaths : data.deaths,
            lastUpdated : data.lastUpdate
        }
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);
        const fetchedDailyData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return fetchedDailyData;
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const { data : { countries }} = await axios.get(`${URL}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}
