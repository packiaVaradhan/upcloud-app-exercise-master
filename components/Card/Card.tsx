import React from 'react';
import CardContent from './CardContent';
import CardHead from './CardHead';
import CardSection from './CardSection';
import { cardStyles } from './styles';

/**
 * Provides a card-like element.
 */
class Card extends React.PureComponent {
  static Content = CardContent;
  static Head = CardHead;
  static Section = CardSection;

  render() {
    const { children } = this.props;
    return (
      <section className="Card">
        <style jsx>{cardStyles}</style>
        {children}
      </section>
    );
  }
}

export default Card;
