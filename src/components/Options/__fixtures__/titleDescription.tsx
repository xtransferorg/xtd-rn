import React from 'react';
import { Text } from 'react-native';
import { Card, Options } from '@xrnjs/ui';
import styles from './style';

const TitleDescriptionExample = () => {
  return (
    <Card style={styles.section}>
      <Text style={styles.title}>主副标题</Text>
      <Options
        defaultValue={['1']}
        options={[
          {
            label: '法人代表/实际控制人',
            labelTextProps: { numberOfLines: 1 },
            description: '占股10%及以上',
            descriptionTextProps: { numberOfLines: 1 },
            value: '1',
          },
          {
            label: '法人代表/实际控制人',
            labelTextProps: { numberOfLines: 1 },
            description: '占股10%及以上',
            descriptionTextProps: { numberOfLines: 1 },
            value: '占股10%及以上',
          },
        ]}
      />
    </Card>
  );
};

export default TitleDescriptionExample;
