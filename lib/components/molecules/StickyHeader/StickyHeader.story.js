import React from 'react';
import { storiesOf } from '@storybook/react';

import StickyHeader from './StickyHeader';
import defaultConfig from './StickyHeader.mock';

storiesOf('molecules/StickyHeader', module)
  .addParameters({ jest: ['StickyHeader'] })
  .add('StickyHeader', () => {
    return (
      <div style={{ height: '1200px', overflowY: 'scroll' }}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <StickyHeader>
          <h1 style={{ ...defaultConfig.variation1 }}>Sticky Header: No content width</h1>
        </StickyHeader>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <StickyHeader defaultTopHeight={34} tag="div">
          <h1 style={{ ...defaultConfig.variation2 }}>
            Sticky Header: Content width in percentage
          </h1>
        </StickyHeader>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys
        </p>
        <StickyHeader defaultTopHeight={68} tag="nav">
          <h1 style={{ ...defaultConfig.variation3 }}>Sticky Header: Fixed content width</h1>
        </StickyHeader>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    );
  });
