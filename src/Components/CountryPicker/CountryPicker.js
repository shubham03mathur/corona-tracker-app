import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../Api';
import styles from './CountryPicker.module.css';

const CountryPicker = (props) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchAllCountries = async () => {
            setCountries(await fetchCountries());
        }
        fetchAllCountries();
    }, [countries])
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue={props.country} onChange={(event) => props.handleChange(event.target.value)}>
                <option value="global">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;