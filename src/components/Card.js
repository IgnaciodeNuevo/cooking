import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

// import Image from "../components/image"

const CardWrapper = styled.article`
  background-color: #fff;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-base);
  transition: all var(--transition-duration-normal)
    var(--animation-type-cubic-fast);
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: var(--box-shadow-hover);
    transform: translateY(-0.5rem);
  }

  &:focus {
    border: 3px soli var(--color-brand-primary-dark);
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;

  &:focus {
    border: 3px soli var(--color-brand-primary-dark);
  }
`

const ContentWrapper = styled.p`
  padding: var(--space-m);
`

const Card = ({ to, title, excerpt }) => (
  <CardWrapper>
    <StyledLink to={to} />
    {/* <Image /> */}
    <ContentWrapper>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </ContentWrapper>
  </CardWrapper>
)

export default Card

Card.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
}
