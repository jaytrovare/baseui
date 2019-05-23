/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagTH(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="THa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="THb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F12532" />
          <stop offset="100%" stopColor="#EB212E" />
        </linearGradient>
        <linearGradient id="THc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#322B6C" />
          <stop offset="100%" stopColor="#241F4E" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#THa)" d="M0 0h21v15H0z" />
        <path fill="url(#THb)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#THa)" d="M0 3h21v9H0z" />
        <path fill="url(#THc)" d="M0 5h21v5H0z" />
      </g>
    </svg>
  );
}