'use strict';

import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

const keys = Object.keys(nodeEmoji.emoji);

const names = [...keys, ...keys.map(key => `:${key}:`)];

const defaultStyle = {
  color: '#000',
};

interface Props {
  name: string;
  emojiStyle: any;
}

const Emoji = (props: Props) => {
  const {name, emojiStyle} = props;

  return (
    <Text style={emojiStyle} {...props}>
      {nodeEmoji.get(name)}
    </Text>
  );
};

Emoji.propTypes = {
  name: PropTypes.oneOf(names).isRequired,
};

export default Emoji;
