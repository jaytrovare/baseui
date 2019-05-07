/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import {styled} from '../styles/index.js';
import {SIZE} from './constants.js';
import type {SharedPropsT} from './types.js';

function getInputPadding(size, sizing) {
  return {
    [SIZE.default]: {
      paddingTop: sizing.scale400,
      paddingRight: sizing.scale500,
      paddingBottom: sizing.scale400,
      paddingLeft: sizing.scale500,
    },
    [SIZE.compact]: {
      paddingTop: sizing.scale200,
      paddingRight: sizing.scale500,
      paddingBottom: sizing.scale200,
      paddingLeft: sizing.scale500,
    },
  }[size];
}

function getFont(size, typography) {
  return {
    [SIZE.default]: typography.font300,
    [SIZE.compact]: typography.font200,
  }[size];
}

export const Root = styled('div', props => {
  const {
    $size,
    $theme: {colors, typography},
  } = props;
  return {
    ...getFont($size, typography),
    color: colors.foreground,
    display: 'flex',
    width: '100%',
  };
});

function getInputEnhancerPadding($size, sizing) {
  return {
    [SIZE.default]: {
      padding: sizing.scale500,
    },
    [SIZE.compact]: {
      paddingTop: sizing.scale300,
      paddingRight: sizing.scale500,
      paddingBottom: sizing.scale300,
      paddingLeft: sizing.scale500,
    },
  }[$size];
}

export const InputEnhancer = styled('div', props => {
  const {
    $size,
    $theme: {colors, sizing, typography},
  } = props;
  return {
    ...getFont($size, typography),
    color: colors.foreground,
    display: 'flex',
    ...getInputEnhancerPadding($size, sizing),
    backgroundColor: colors.inputFillEnhancer,
  };
});

export const getInputContainerStyles = (props: SharedPropsT) => {
  const {
    $isFocused,
    $error,
    $disabled,
    $size,
    $theme: {colors, typography, animation},
  } = props;
  return {
    ...getFont($size, typography),
    color: $disabled ? colors.inputTextDisabled : colors.foreground,
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    backgroundColor: $disabled
      ? colors.inputFillDisabled
      : $isFocused
        ? colors.background
        : $error
          ? colors.inputFillError
          : colors.inputFill,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: $disabled
      ? colors.inputFillDisabled
      : $error
        ? colors.negative400
        : $isFocused
          ? colors.primary400
          : colors.inputFill,
    boxShadow: `0 2px 6px ${
      $disabled
        ? 'transparent'
        : $isFocused
          ? $error
            ? colors.shadowError
            : colors.shadowFocus
          : 'transparent'
    }`,
    transitionProperty: 'border, boxShadow, backgroundColor',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
  };
};

export const InputContainer = styled('div', getInputContainerStyles);

export const getInputStyles = (props: SharedPropsT) => {
  const {
    $disabled,
    $error,
    $size,
    $theme: {colors, sizing, typography},
  } = props;
  return {
    ...getFont($size, typography),
    color: $disabled ? colors.foregroundAlt : colors.foreground,
    caretColor: $error ? colors.negative400 : colors.primary,
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderWidth: '0',
    borderStyle: 'none',
    outline: 'none',
    ...getInputPadding($size, sizing),
    width: '100%',
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    '::placeholder': {
      color: $disabled ? colors.inputTextDisabled : colors.foregroundAlt,
    },
  };
};

export const Input = styled('input', getInputStyles);
