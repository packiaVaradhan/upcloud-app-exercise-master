import React from 'react';
import { commonCardStyles, cardSectionStyles } from './styles';

/**
 * Sections for the <Card> component; adds separators between sections. Should be placed inside <Card.Content>
 */
const CardHead: React.SFC = ({ children }) => (
  <div className="Card__Section Card__Padding">
    <style jsx>{commonCardStyles}</style>
    <style jsx>{cardSectionStyles}</style>
    {children}
    <hr style={{margin:0}}/>
  </div>
);

export default CardHead;
