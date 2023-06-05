import { useState, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import "@fontsource/roboto/700.css" //change the weight here

export function Clock() {
    const [date, setDate] = useState<any>(new Date());

    function refresh() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refresh, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, [])  //no dependencies so only runs once

    return (
        <Flex>
            <Text fontSize={[40, 60, 80]} fontFamily={'Roboto'}>
                {date.toLocaleTimeString('en-IN')}
            </Text>
        </Flex>
    )
}


