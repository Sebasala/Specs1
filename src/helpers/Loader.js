import React from 'react';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';

export const Loader = ({ loaderVisibility, loaderProgress }) => {

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className={ loaderVisibility ? 'loader' : '' }>
      <BounceLoader
        css={override}
        sizeUnit={"px"}
        size={60}
        color={'#1D424E'}
        loading={loaderVisibility}
      />
      {loaderVisibility ? <span>Cargando ... {loaderProgress ? `${loaderProgress} %` : ''}</span> : '' }
    </div>
  )
};