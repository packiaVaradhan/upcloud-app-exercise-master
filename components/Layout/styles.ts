import css from 'styled-jsx/css';

const styles = css`
  @import 'rem';

  .app {
    background: #f9f9f9;
    min-height: 100%;
   overflow: hidden;
   // background: #f1f1f1;
  }

  .app-header {
    background: white;
    padding: 2rem 0;
    height: 6.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }

  .app-logo {
    width: 100px;
    margin-left: 2rem;

    @media (min-width: 400px) {
      width: 200px;
    }
  }

  .app-nav {
    display: flex;
    float: right;
    justify-content: space-around;

    a + a {
      margin-left: rem(10px);
    }
  }
  .menu {
    display: flex;
  }
  .menu li {
    list-style-type: none;
    margin-left: 2rem;
  }

  .menu a {
    font-size: 1.4rem;
    color: color(mainAccentColor);
    &:active {
      color: color(mainAccentColor);
    }

    &:focus {
      color: color(mainAccentColor);
    }

    &:hover {
      text-decoration: underline;
    }
  }


  .sidebar {
    
  margin: 0;
  padding: 0;
  display:flex;
  background-color: #f1f1f1;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  margin-left:2rem;
  display: block;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: color(mainAccentColor);
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

`;

export default styles;
