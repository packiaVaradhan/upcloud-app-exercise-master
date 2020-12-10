import css from 'styled-jsx/css';

const globalStyles = css.global`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');
  @import 'color';

  /* Reset */
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  img {
    display: block;
  }

  a {
    outline: 0;
  }

  /* Base */
  html {
    font-size: 15px;
  }

  body {
    font-family: "Source Sans Pro", "system-ui", "sans-serif";
    font-size: 15px;
    font-weight: 400;
    line-height: 1.2rem;
  }

  html, body, #__next {
    height: 100%;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    color: accent(mainAccentColor);
    text-decoration: none;

    &:active {
      color: color(red);
    }

    &:focus {
      color: color(red);
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default globalStyles;
