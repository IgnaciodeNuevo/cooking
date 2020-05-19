import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--component-max-with);
  padding: var(--space-xl) var(--space-l);
`

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Wrapper
