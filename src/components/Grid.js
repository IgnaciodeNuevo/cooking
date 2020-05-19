import React from "react"
import styled from "styled-components"

const StyledGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(320px - (var(--space-l) * 2)), 1fr));
    grid-gap: var(--space-l);
`

const Grid = ({ children }) => (
    <StyledGrid>
        {children}
    </StyledGrid>
)

export default Grid
