import css from 'styled-jsx/css';

export default css`
  @import 'color';
  @import 'rem';

  .Button {
    align-items: center;
    background: transparent;
    border-radius: rem(2px);
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    //display: inline-flex;
    font-family: inherit;
    font-size: rem(14px);
    letter-spacing: rem(0.6px);
    height: rem(3px);
    width:rem(3px);
    margin: 0;
    padding: rem(6px) rem(6px);
    position: relative;
    text-decoration: none;

    &:hover  {
      text-decoration: none;
    }

    &:disabled,
    &:hover:disabled {
      background-color: transparent;
      border-color: color(grey, disabled-border, false);
      color: color(grey, disabled-text, false);
      cursor: not-allowed;
    }

    &--primary {
      background-color: accent(success);
      color: color(white, base, false);

      &:hover,
      &:focus,
      &:active {
        background-color: color(black);
        
        color: color(white);
      }
    }

    &--secondary {
      border-color: accent(alert);
      background:accent(alert);
      color: color(black);

      &:hover {
        border-color: color(black);
      }

      &:hover,
      &:active {
        background-color: transparent;
        border-color: color(black);
        color: color(black);
      }

      &:focus {
        background-color: color(black);
        border-color: color(black);
        color: color(white);
      }
    }
  }
`;
