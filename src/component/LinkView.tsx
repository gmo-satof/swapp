import * as React from 'react';
import { GestureResponderEvent, Platform, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import type { NavigationAction } from '@react-navigation/core';
import { useLinkProps } from '@react-navigation/native';

type Props = {
  to: string;
  action?: NavigationAction;
  target?: string;
  onPress?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
  ) => void;
} & (TouchableOpacityProps & { children: React.ReactNode });

/**
 * Component to render link to another screen using a path.
 * Uses an anchor tag on the web.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 * @param props.children Child elements to render the content.
 */
export default function LinkView({ to, action, ...rest }: Props) {
  const props = useLinkProps({ to, action });

  const onPress = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
  ) => {
    if ('onPress' in rest) {
      rest.onPress?.(e);
    }

    props.onPress(e);
  };

  return React.createElement(TouchableOpacity, {
    ...props,
    ...rest,
    ...Platform.select({
      web: { onClick: onPress } as any,
      default: { onPress },
    }),
  });
}
