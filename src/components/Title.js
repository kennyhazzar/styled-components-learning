import React from 'react'
import styled from 'styled-components'

const Title = (props) => {
    return (
        <StyledTitle {...props} />
    )
}

const StyledTitle = styled.div`
    color: ${props => props.color || props.theme.colors.primary};
`

export default Title