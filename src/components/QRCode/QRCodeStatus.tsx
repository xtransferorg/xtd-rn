import React, { ReactElement } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Loading from '../Loading';
import { IconXSuccess2, IconXRefrese1 } from '../../icons/index';
import { useTheme } from '../Theme';
import createStyle from './style/status.style';
import ShouldRender from '../ShouldRender';

export enum QRCodeStatusEnum {
  active = 'active',
  scanned = 'scanned',
  loading = 'loading',
  expired = 'expired',
}

export interface StatusRenderInfo {
  status: QRCodeStatusEnum;
  onRefresh?: () => void;
}
export interface QRCodeStatusProps {
  status: keyof typeof QRCodeStatusEnum;
  testID?: string;
  statusRender?: (info: StatusRenderInfo) => ReactElement;
  loadingText?: string;
  scanSuccessText?: string;
  expiredText?: string;
  refreshText?: string;
  onRefresh?: () => void;
}

const QRCodeStatus = (props: QRCodeStatusProps) => {
  const token = useTheme();
  const styles = createStyle(token);
  const {
    status,
    statusRender,
    loadingText,
    scanSuccessText,
    expiredText,
    refreshText,
    onRefresh,
  } = props;

  if (status === QRCodeStatusEnum.active) {
    return <></>;
  }

  const expired = (
    <View style={styles.flex}>
      <ShouldRender condition={!!expiredText}>
        <Text style={styles.text}>{expiredText}</Text>
      </ShouldRender>
      <TouchableOpacity onPress={onRefresh} activeOpacity={0.8}>
        <View style={[styles.flexRow]}>
          <IconXRefrese1
            style={styles.icon}
            size={token['--font-size-2']}
            color={token['--color-primary-6']}
          />
          <ShouldRender condition={!!refreshText}>
            <Text style={[styles.textActive, styles.ml4]}>{refreshText}</Text>
          </ShouldRender>
        </View>
      </TouchableOpacity>
    </View>
  );

  const loading = (
    <View style={styles.flex}>
      <Loading name="loading-xt" loadingType="dot" size={32} />
      <ShouldRender condition={!!loadingText}>
        <Text>{loadingText}</Text>
      </ShouldRender>
    </View>
  );
  const scaned = (
    <View style={[styles.flex, styles.flexRow]}>
      <IconXSuccess2 size={token['--font-size-4']} />
      <ShouldRender condition={!!scanSuccessText}>
        <Text style={styles.ml4}>{scanSuccessText}</Text>
      </ShouldRender>
    </View>
  );

  const renderMap = {
    [QRCodeStatusEnum.active]: <></>,
    [QRCodeStatusEnum.scanned]: scaned,
    [QRCodeStatusEnum.loading]: loading,
    [QRCodeStatusEnum.expired]: expired,
  };

  const info: StatusRenderInfo = {
    status: QRCodeStatusEnum[status],
    onRefresh,
  };
  const defaultStatusRender = (info: StatusRenderInfo) =>
    renderMap[info.status];

  const mergedStatusRender = statusRender ?? defaultStatusRender;

  return mergedStatusRender(info);
};
export default QRCodeStatus;
