import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import {colors} from '@constants/index';
interface Props {
  progress: number;
  previous?: number;
}

const ProgressBar = (props: Props) => {
  const {progress, previous} = props;
  let animation = useRef(new Animated.Value(previous ? previous : 0));

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBar}>
        <Animated.View
          style={{
            backgroundColor: colors.purple,
            width,
          }}
        />
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    height: 5,
  },
  progressBar: {
    width: '100%',
    flexDirection: 'row',
    height: 5,
    borderColor: 'transparent',
    borderWidth: 0,
  },
});
