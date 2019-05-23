/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagBO(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="BOa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="BOb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#058C3F" />
          <stop offset="100%" stopColor="#007A34" />
        </linearGradient>
        <linearGradient id="BOc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E63426" />
          <stop offset="100%" stopColor="#D52B1E" />
        </linearGradient>
        <linearGradient id="BOd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFEB1F" />
          <stop offset="100%" stopColor="#FAE400" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#BOa)" d="M0 0h21v15H0z" />
        <path fill="url(#BOb)" d="M0 10h21v5H0z" />
        <path fill="url(#BOc)" d="M0 0h21v5H0z" />
        <path fill="url(#BOd)" d="M0 5h21v5H0z" />
      </g>
    </svg>
  );
}