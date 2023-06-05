import React from "react";
import moment from 'moment';
import { Flex, Text, Spacer, Button, Center } from "@chakra-ui/react";
import { BiRefresh } from 'react-icons/bi'
import "@fontsource/roboto/700.css" //change the weight here

export const Weather: React.FC<{ weatherData: any }> = ({ weatherData }) => {
    const refresh = () => {
        window.location.reload();
    }

    return (
        weatherData !== null ? (
            <Center >
                <Flex fontFamily={'Roboto'} flexDirection={'column'} color='black' width='80vw' borderColor='blackAlpha.800' borderWidth='8px' borderRadius='15px'>
                    <Flex padding={2.5} alignItems='left' fontSize={['18px', '22px', '30px']} fontWeight={600}   >
                        <Flex borderBottom='4px'> {weatherData.name} </Flex>  <Spacer />  <Flex paddingTop={2.5} paddingRight={1}><BiRefresh cursor='pointer' onClick={refresh} /> </Flex>
                    </Flex>
                    <Flex gap='8px' padding={2.5} flexDir='column' fontSize={['13px', '15px', '20px', '28px']} >
                        <Flex fontWeight={550} justifyContent={'space-between'} >
                            {moment().format('dddd')}, {moment().format('MMMM Do YYYY')} <Text _firstLetter={{ textTransform: 'uppercase' }}>{weatherData.weather[0].description} </Text>
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
            </Center >) : null
    )
}
