import React from 'react';
import styles from './styles';

export interface IProps {
  autoFocus?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  id?: string;
  secondary?: boolean;
  type?: 'button' | 'reset' | 'submit';
  onClick?(): void;
}

const CLASS_BASE: string = 'Button';

const Button = ({
  autoFocus,
  children,
  disabled,
  href,
  id,
  secondary,
  onClick,
  type = 'button',
}: IProps) => {
  const classNames: string[] = [CLASS_BASE];
  if (secondary) {
    classNames.push(`${CLASS_BASE}--secondary`);
  } else {
    classNames.push(`${CLASS_BASE}--primary`);
  }

  const classString = classNames.join(' ');

  if (href) {
    return (
      <a id={id} href={href} className={classString}>
        {children}
      </a>
    );
  }

  return (
    <button
      autoFocus={autoFocus}
      id={id}
      onClick={onClick}
      className={classString}
      disabled={disabled}
      type={type}
    >
      <style jsx>{styles}</style>
      {children}
    </button>
  );
};

export default Button;
