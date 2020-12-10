import React from 'react';
import { commonCardStyles, cardHeadStyles } from './styles';

interface ICardProps {
  // title for the card
  title: React.ReactNode;
}

/**
 * Generic head element for <Card> component, should be first child inside <Card>
 */
const CardHead: React.SFC<ICardProps> = ({ title }) => (
  <div className="Card__Head Card__Padding">
    <style jsx>{commonCardStyles}</style>
    <style jsx>{cardHeadStyles}</style>
    
    <h2>{title} </h2>
  </div>
);

export default CardHead;
