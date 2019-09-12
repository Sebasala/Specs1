import React from 'react';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';

export const Loader = ({ loaderVisibility }) => {

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className={loaderVisibility ? 'loader' : ''}>
      <RingLoader
        css={override}
        sizeUnit={"px"}
        size={150}
        color={'#1D424E'}
        loading={loaderVisibility}
      />
    </div>
  )
};