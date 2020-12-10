import React from 'react';
import Wrapper from 'components/Wrapper';
import css from 'styled-jsx/css';
import Link from 'next/link';

import globalStyles from './globalStyles';
import styles from './styles';

// some custom styles for header wrapper
const headerWrapperCss = css.resolve`
  .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <style jsx>{styles}</style>
        {headerWrapperCss.styles}

        <header className="app-header">
          <img
            className="app-logo"
            src="/static/upcloud-logo.svg"
            alt="UpCloud logo"
          />
          <nav className="app-nav">
            <ul className="menu">
              <li>
                <Link href="/?route=servers">
                  <a>Servers</a>
                </Link>
              </li>
              <li>
                <Link href="/?route=storages">
                  <a>Storages</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Wrapper>{children}</Wrapper>

        <style jsx global>
          {globalStyles}
        </style>
      </div>
    );
  }
}

export default Layout;
