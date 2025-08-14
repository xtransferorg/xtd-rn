import type {
  HolderProps,
  HolderRef,
  NotificationInstance,
  NotificationProps,
  NotificationRef,
} from './interface';
import React, {
  forwardRef,
  Key,
  ReactElement,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { remove } from 'lodash';
import Portal from '../Portal';
import Notification from './Notification';

type NotificationInstanceProps = Omit<NotificationProps, 'status'>;

export const Instance = (opt: NotificationProps) => {
  const key = Portal.add(
    <Notification
      {...opt}
      visible
      onClosed={() => {
        Portal.remove(key);
        opt.onClosed?.();
      }}
    />
  );
  return key;
};

export const info = (opt: NotificationInstanceProps) => {
  return new Promise<void>((resolve) => {
    Instance({ ...opt, status: 'info', onClosed: resolve });
  });
};

export const success = (opt: NotificationInstanceProps) => {
  return new Promise<void>((resolve) => {
    Instance({ ...opt, status: 'success', onClosed: resolve });
  });
};

export const error = (opt: NotificationInstanceProps) => {
  return new Promise<void>((resolve) => {
    Instance({ ...opt, status: 'error', onClosed: resolve });
  });
};

export const warning = (opt: NotificationInstanceProps) => {
  return new Promise<void>((resolve) => {
    Instance({ ...opt, status: 'warning', onClosed: resolve });
  });
};

const keys = ['success', 'info', 'warning', 'error'] as const;

/**
 * TODO 抽象成通用的 Holder 组件，便于 Popup 等组件复用
 */
const Holder = forwardRef<HolderRef, {}>((_, ref) => {
  const [instances, setInstances] = useState<
    {
      key: Key;
      node: ReactElement;
      ref: React.RefObject<NotificationRef>;
    }[]
  >([]);

  useImperativeHandle(ref, () => {
    const open = (props: HolderProps) => {
      const notificationRef = React.createRef<NotificationRef>();
      setInstances([
        ...instances,
        {
          key: props.key,
          node: <Notification {...props} ref={notificationRef} visible />,
          ref: notificationRef,
        },
      ]);
    };

    const destroy = (key: Key) => {
      instances
        .find((item) => item.key === key)
        ?.ref.current?.close(() => {
          remove(instances, (item) => item.key === key);
          setInstances([...instances]);
        });
    };

    return {
      open,
      destroy,
    };
  });

  return (
    <>
      {instances.map((item, index) =>
        React.cloneElement(item.node, {
          ...item.node.props,
          offset: index * 20,
        })
      )}
    </>
  );
});

export const useNotification = () => {
  const holderRef = React.useRef<HolderRef>(null);

  const api = useMemo(() => {
    const originOpen = (config: HolderProps) => {
      if (!holderRef.current) {
        return;
      }

      holderRef.current.open(config);
    };

    const destroy = (key: Key) => {
      if (!holderRef.current) {
        return;
      }

      holderRef.current?.destroy(key);
    };

    const methods = {} as NotificationInstance;
    keys.forEach((status) => {
      methods[status] = (config: NotificationInstanceProps & { key: Key }) =>
        originOpen({ ...config, status });
    });

    return {
      ...methods,
      destroy,
    };
  }, [holderRef.current]);

  return [api, <Holder key="holder" ref={holderRef} />] as const;
};
