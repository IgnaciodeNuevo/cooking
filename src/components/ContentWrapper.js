import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: var(--component-max-with);
    padding: var(--space-xl) var(--space-l);
`

const ContentWrapper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default ContentWrapper
