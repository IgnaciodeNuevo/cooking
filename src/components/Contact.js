import React from "react"
import styled from "styled-components"

const Form = styled.form`
  background-color: var(--color-brand-tertiary-medium);
  padding: var(--space-l);
  border-radius: var(--border-radius);

  @media (min-width: 80em) {
    width: 50%;
  }
`

const Wrapper = styled.div`
  margin-bottom: var(--space-l);
`

const Label = styled.label`
  font-family: var(--font-family-heading);
  font-size: var(--h6);
  display: block;
  margin-bottom: var(--space-s);
`

const Input = styled.input`
  font-family: var(--font-family-body);
  font-size: var(--h6);
  display: block;
  padding: var(--space-s);
  border: 3px solid var(--color-brand-primary-dark);
  border-radius: var(--border-radius);
  color: var(--color-brand-primary-dark);
  width: 100%;
`

const Textarea = styled.textarea`
  font-family: var(--font-family-body);
  font-size: var(--h6);
  display: block;
  margin-bottom: var(--space-s);
  padding: var(--space-s);
  border: 3px solid var(--color-brand-primary-dark);
  border-radius: var(--border-radius);
  color: var(--color-brand-primary-dark);
  width: 100%;
  resize: none;
`

const Button = styled.button`
  background-color: var(--color-brand-primary-dark);
  padding: var(--space-m);
  border-radius: var(--border-radius);
  font-family: var(--font-family-body);
  font-size: var(--font-base);
  color: var(--color-base-lightest);
  cursor: pointer;
  border: 2px solid var(--color-brand-primary-dark);
  border-top-width: 2px;
  box-shadow: var(--box-shadow-base);
  transition: all var(--transition-duration-normal)
    var(--animation-type-cubic-fast);

  &:hover {
    background-color: var(--color-brand-primary-medium);
    border-color: var(--color-brand-primary-medium);
    box-shadow: var(--box-shadow-hover);
    transform: translateY(-0.125rem);
  }

  &:focus {
    outline-style: none;
    outline-color: -webkit-focus-ring-color;
    outline-width: 5px;
  }
`

const H2 = styled.h2`
  margin-bottom: var(--space-m);
  color: var(--color-base-lightest);
`

const Contact = () => (
  <Form
    name="contact"
    action="/success/"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </p>
    <H2>Contacto</H2>
    <Wrapper>
      <Label htmlFor="name">Tu nombre:</Label>
      <Input name="name" type="text" placeholder="D. Joe" />
    </Wrapper>

    <Wrapper>
      <Label htmlFor="email">Tu email:</Label>
      <Input name="email" type="email" placeholder="d.joe@email.com" />
    </Wrapper>

    <Wrapper>
      <Label htmlFor="message">Mesaje:</Label>
      <Textarea name="message" rows="8" placeholder="Mi mensaje es..." />
    </Wrapper>

    <Button type="submit">Enviar</Button>
  </Form>
)

export default Contact
