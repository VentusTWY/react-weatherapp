import React from "react";
import moment from 'moment';
import { Flex, Text, Spacer, Button, Center } from "@chakra-ui/react";
import { BiRefresh } from 'react-icons/bi'

export const Weather: React.FC<{ weatherData: any }> = ({ weatherData }) => {
    const refresh = () => {
        window.location.reload();
    }

    return (
        weatherData !== null ? (
            <Center width='100vw' height='100vh'>
                <Flex fontFamily={'cursive'} flexDirection={'column'} color='white' backgroundColor='#01579b' width='80vw' borderRadius='15px'>
                    <Flex padding={2.5} alignItems='left' backgroundColor='#424242' fontSize='30px' borderRadius='15px' fontWeight={600}  >
                        {weatherData.name} <Spacer />  <Flex paddingTop={2.5} paddingRight={1}><BiRefresh cursor='pointer' onClick={refresh} /> </Flex>
                    </Flex>
                    <Flex gap='8px' padding={2.5} flexDir='column' >
                        <Flex fontWeight={550} fontSize='28px' justifyContent={'space-between'} >
                            {moment().format('dddd')}, {moment().format('MMMM Do YYYY, h:mm:ss a')} <Text>{weatherData.weather[0].description} </Text>
                        </Flex>

                        <Flex justifyContent={'space-between'} >
                            <Text>Temperature : {weatherData.main.temp} &deg;C</Text>
                            <Text>Humidity : {weatherData.main.humidity}%</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'}>
                            <Text>Sunrise : {new Date(Number(weatherData.sys.sunrise) * 1000).toLocaleTimeString('en-IN')}</Text>
                            <Text>Sunset : {new Date(Number(weatherData.sys.sunset) * 1000).toLocaleTimeString('en-IN')}</Text>
                        </Flex>
                    </Flex>
                </Flex >
            </Center>) : null
    )
}
