import React, { createContext, Component, ReactNode } from 'react';
import type { EmitterSubscription } from 'react-native';
import {
  DeviceEventEmitter,
  NativeEventEmitter,
  StyleSheet,
  View,
} from 'react-native';

import PortalManager from './portal-manager';

export type PortalHostProps = {
  children: React.ReactNode;
  tag?: string;
};

export type Operation =
  | { type: 'mount'; key: number; children: React.ReactNode; tag?: string }
  | { type: 'update'; key: number; children: React.ReactNode; tag?: string }
  | { type: 'unmount'; key: number; tag?: string };

export type PortalMethods = {
  mount: (children: React.ReactNode, key?: number, tag?: string) => number;
  update: (key: number, children: React.ReactNode, tag?: string) => void;
  unmount: (key: number, tag?: string) => void;
};

export const PortalContext = createContext<PortalMethods>(null as any);
// events
const addType = 'REACT_NATIVE_XIAOSHU_ADD_PORTAL';
const removeType = 'REACT_NATIVE_XIAOSHU_REMOVE_PORTAL';
const updateType = 'REACT_NATIVE_XIAOSHU_UPDATE_PORTAL';
// fix react native web does not support DeviceEventEmitter
const TopViewEventEmitter = DeviceEventEmitter || new NativeEventEmitter();

class PortalGuard {
  private nextKey = 10000;
  add = (e: React.ReactNode, tag?: string) => {
    const key = this.nextKey++;
    TopViewEventEmitter.emit(addType, e, key, tag);
    return key;
  };
  remove = (key: number, tag?: string) =>
    TopViewEventEmitter.emit(removeType, key, tag);
  update = (key: number, children: ReactNode, tag?: string) =>
    TopViewEventEmitter.emit(updateType, key, children, tag);
}
/**
 * portal
 */
export const portal = new PortalGuard();
/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from '@fruits-chain/react-native-xiaoshu';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal.Host>
 *         <Text>Content of the app</Text>
 *       </Portal.Host>
 *     );
 *   }
 * }
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */
export default class PortalHost extends Component<PortalHostProps> {
  static displayName = 'Portal.Host';
  nextKey = 0;
  queue: Operation[] = [];
  manager: PortalManager | undefined | null;

  // @ts-ignore
  addTypeEmitter: EmitterSubscription;
  // @ts-ignore
  removeTypeEmitter: EmitterSubscription;
  // @ts-ignore
  updateTypeEmitter: EmitterSubscription;

  componentDidMount() {
    const manager = this.manager;
    const queue = this.queue;

    this.addTypeEmitter = TopViewEventEmitter.addListener(addType, this.mount);
    this.removeTypeEmitter = TopViewEventEmitter.addListener(
      removeType,
      this.unmount
    );

    this.updateTypeEmitter = TopViewEventEmitter.addListener(
      updateType,
      this.update as any
    );

    while (queue.length && manager) {
      const action = queue.pop();
      if (!action) {
        continue;
      }
      // tslint:disable-next-line:switch-default
      switch (action.type) {
        case 'mount':
          manager.mount(action.key, action.children, action.tag);
          break;
        case 'update':
          manager.update(action.key, action.children, action.tag);
          break;
        case 'unmount':
          manager.unmount(action.key, action.tag);
          break;
      }
    }
  }

  componentWillUnmount() {
    if (this.addTypeEmitter.remove) {
      this.addTypeEmitter.remove();
    } else {
      // TODO 旧版本如何做兼容
      // @ts-ignore
      TopViewEventEmitter.removeListener?.(addType, this.mount);
    }

    if (this.removeTypeEmitter.remove) {
      this.removeTypeEmitter.remove();
    } else {
      // TODO 旧版本如何做兼容
      // @ts-ignore
      TopViewEventEmitter.removeListener?.(removeType, this.unmount);
    }

    if (this.updateTypeEmitter.remove) {
      this.updateTypeEmitter.remove();
    } else {
      // TODO 旧版本如何做兼容
      // @ts-ignore
      TopViewEventEmitter.removeListener?.(updateType, this.update);
    }
  }

  setManager = (manager?: PortalManager | undefined | null) => {
    this.manager = manager;
  };

  mount = (children: React.ReactNode, _key?: number, tag?: string) => {
    const key = _key || this.nextKey++;
    if (this.manager) {
      this.manager.mount(key, children, tag);
    } else {
      this.queue.push({ type: 'mount', key, children, tag });
    }

    return key;
  };

  update = (key: number, children: React.ReactNode, tag?: string) => {
    if (this.manager) {
      this.manager.update(key, children, tag);
    } else {
      const op: Operation = { type: 'mount', key, children, tag };
      const index = this.queue.findIndex(
        (o) =>
          o.type === 'mount' ||
          (o.type === 'update' && o.key === key && o.tag === tag)
      );

      if (index > -1) {
        this.queue[index] = op;
      } else {
        this.queue.push(op);
      }
    }
  };

  unmount = (key: number, tag?: string) => {
    if (this.manager) {
      this.manager.unmount(key, tag);
    } else {
      this.queue.push({ type: 'unmount', key, tag });
    }
  };

  render() {
    return (
      <PortalContext.Provider
        value={{
          mount: this.mount,
          update: this.update,
          unmount: this.unmount,
        }}
      >
        {/* Need collapsable=false here to clip the elevations, otherwise they appear above Portal components */}
        <View style={styles.container} collapsable={false}>
          {this.props.children}
        </View>
        <PortalManager ref={this.setManager} tag={this.props.tag} />
      </PortalContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
