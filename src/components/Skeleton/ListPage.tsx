/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles/list.style';
import Card from '../Card';
import Skeleton from '../../core/skeleton';

const ListPage: React.FC = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Card style={styles.cardContainer}>
        <Skeleton
          loading
          title={false}
          paragraph={{
            rows: 5,
            widths: [70, 70, 100, 100, 100],
          }}
        />
      </Card>
      <Card style={styles.cardContainer}>
        <Skeleton
          loading
          title={false}
          paragraph={{
            rows: 5,
            widths: [70, 70, 100, 100, 100],
          }}
        />
      </Card>
      <Card style={styles.cardContainer}>
        <Skeleton
          loading
          title={false}
          paragraph={{
            rows: 5,
            widths: [70, 70, 100, 100, 100],
          }}
        />
      </Card>
      <Card style={styles.cardContainer}>
        <Skeleton
          loading
          title={false}
          paragraph={{
            rows: 5,
            widths: [70, 70, 100, 100, 100],
          }}
        />
      </Card>
      <Card style={styles.cardContainer}>
        <Skeleton
          loading
          title={false}
          paragraph={{
            rows: 5,
            widths: [70, 70, 100, 100, 100],
          }}
        />
      </Card>
    </ScrollView>
  );
};

export default ListPage;
