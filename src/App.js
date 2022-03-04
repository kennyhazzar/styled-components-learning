import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Console from './components/Console'
import Flex from './components/Flex'
import Title from './components/Title'

const App = () => {
    return (
        <AppWrapper>
            <Flex justify="center">
                <Title>Hello there!</Title>
            </Flex>
            <Flex direction="column" margin="10px 0">
                <Console/>
                <Button outlined align='flex-end'>Отправить</Button>
            </Flex>
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 2em;
    background: black;
    color: white;
`

export default App