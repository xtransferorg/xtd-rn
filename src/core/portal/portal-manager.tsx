import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

export type State = {
  portals: Array<{
    key: number;
    children: React.ReactNode;
    tag?: string;
  }>;
};

/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalManager extends PureComponent<
  { tag?: string },
  State
> {
  state: State = {
    portals: [],
  };

  mount = (key: number, children: React.ReactNode, tag?: string) => {
    if (tag && tag !== this.props.tag) return;
    this.setState((state) => ({
      portals: [...state.portals, { key, children, tag }],
    }));
  };

  update = (key: number, children: React.ReactNode, tag?: string) => {
    if (tag && tag !== this.props.tag) return;
    this.setState((state) => ({
      portals: state.portals.map((item) => {
        if (item.key === key) {
          return { ...item, children };
        }
        return item;
      }),
    }));
  };
  unmount = (key: number, tag?: string) => {
    if (tag && tag !== this.props.tag) return;
    this.setState((state) => ({
      portals: state.portals.filter((item) => item.key !== key),
    }));
  };

  render() {
    return this.state.portals.map(({ key, children }) => (
      <View
        key={key}
        collapsable={
          false /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */
        }
        pointerEvents="box-none"
        style={StyleSheet.absoluteFill}
      >
        {children}
      </View>
    ));
  }
}
