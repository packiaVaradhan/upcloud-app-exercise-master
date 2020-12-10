import React from 'react';
import css from 'styled-jsx/css';

export interface IProps {
  size?: 'default' | 'big' | 'small' | 'tiny' | number;
  strokeWidth?: number;
}

const CLASS_BASE = 'Loader';

const SIZES: { [index: string]: string } = {
  big: '128px',
  default: '64px',
  small: '30px',
  tiny: '18px',
};

const STROKES: { [index: string]: number } = {
  big: 2,
  default: 3,
  small: 5,
  tiny: 8,
};

const svgAnimateSupport =
  typeof document !== 'undefined' &&
  /SVGAnimate/.test(
    document
      .createElementNS('http://www.w3.org/2000/svg', 'animate')
      .toString(),
  );

const styles = css`
  @import 'color';

  .Loader {
    max-height: 100%;
    max-width: 100%;

    @keyframes loader-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    &__background {
      stroke: color(grey, border);
    }

    &__foreground {
      stroke: accent(mainAccentColor);
    }

    &.no-anim {
      animation: loader-spin 800ms linear infinite;
    }
  }
`;

/**
 * Spinning circle loader with default UpCloud colors.
 *
 * @param size Size of the loader: default | big | small | tiny | any number
 */
function Loader({ size = 'big', strokeWidth }: IProps) {
  let width;
  let height;

  if (typeof size === 'string' && SIZES[size]) {
    width = height = SIZES[size];
  } else if (typeof size === 'number') {
    width = size;
    height = size;
  }

  // tslint:disable-next-line:no-parameter-reassignment
  strokeWidth = strokeWidth || STROKES[size];

  return (
    <svg
      className={CLASS_BASE + (!svgAnimateSupport ? ' no-anim' : '')}
      width={width}
      height={height}
      viewBox={`0 0 100 100`}
    >
      <style jsx>{styles}</style>

      {!svgAnimateSupport && (
        <defs>
          <clipPath id="cut-off-half">
            <rect x="50" y="0" width="50" height="100" />
          </clipPath>
        </defs>
      )}

      <circle
        className={`${CLASS_BASE}__background`}
        cx="50"
        cy="50"
        fill="none"
        r="30"
        strokeWidth={strokeWidth}
      />
      <circle
        className={`${CLASS_BASE}__foreground`}
        cx="50"
        cy="50"
        fill="none"
        r="30"
        strokeWidth={strokeWidth}
        strokeLinecap="square"
        clipPath={svgAnimateSupport ? undefined : 'url(#cut-off-half)'}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;180 50 50;720 50 50"
          keyTimes="0;0.5;1"
          dur="1.1s"
          begin="0s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          calcMode="linear"
          values="94.2477796076938 94.24777960769377;
          28.274333882308138 160.22122533307945;
          94.2477796076938 94.24777960769377"
          keyTimes="0;0.5;1"
          dur="1.1"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default Loader;
