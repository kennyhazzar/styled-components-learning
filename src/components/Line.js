import React from 'react'
import styled from 'styled-components'

const Line = (props) => {
    return (
        <StyledLine {...props} />
    )
}

const StyledLine = styled.div`
    font-size: 24px;
    color: ${props => props.color || props.theme.colors.primary}
`

export default Line