import React from 'react';
import { cardContentStyles, commonCardStyles } from './styles';

/**
 * Wrapper for content inside <Card>, adds padding and some generic <p> styling.
 * @param children React children nodes
 */
const CardContent: React.SFC = ({ children }) => (
  <div className="Card__Content Card__Padding">
    <style jsx>{commonCardStyles}</style>
    <style jsx>{cardContentStyles}</style>
    {children}
  </div>
);

export default CardContent;
