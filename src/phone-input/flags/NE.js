/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagNE(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="NEa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="NEb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F0642F" />
          <stop offset="100%" stopColor="#DF531D" />
        </linearGradient>
        <linearGradient id="NEc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#2DCC45" />
          <stop offset="100%" stopColor="#1FAF35" />
        </linearGradient>
        <linearGradient id="NEd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E85C27" />
          <stop offset="100%" stopColor="#DF531D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#NEa)" d="M0 0h21v15H0z" />
        <path fill="url(#NEb)" d="M0 0h21v5H0z" />
        <path fill="url(#NEc)" d="M0 10h21v5H0z" />
        <path fill="url(#NEa)" d="M0 5h21v5H0z" />
        <circle cx="10.5" cy="7.5" r="2" fill="url(#NEd)" />
      </g>
    </svg>
  );
}