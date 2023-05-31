import React from "react";
import moment from 'moment';
import { Flex, Text, Spacer } from "@chakra-ui/react";

const Weather: React.FC<{ weatherData: any }> = ({ weatherData }) => {
    return (
        weatherData !== null ? (
            <Flex flexDirection={'column'} alignItems={'center'} backgroundColor='#F5F5DC' borderRadius='8px' fontSize='20px'>
                <Text marginBottom='50px' fontSize='55px' fontWeight={500} borderBottom='4px' borderColor='black' color='blue'>City Name : {weatherData.name}</Text>
                <Text>Sunrise : {new Date(Number(weatherData.sys.sunrise) * 1000).toLocaleTimeString('en-IN')}</Text>
                <Text>Sunset : {new Date(Number(weatherData.sys.sunset) * 1000).toLocaleTimeString('en-IN')}</Text>
                <Text>Description : {weatherData.weather[0].description}</Text>
                <Text>Temperature : {weatherData.main.temp} &deg;C</Text>
                <Text>Humidity : {weatherData.main.humidity}</Text>
                <Text>Day : {moment().format('dddd')}</Text>
                <Text>Date : {moment().format('LL')}</Text>
            </Flex >) : null
    )
}

export default Weather;