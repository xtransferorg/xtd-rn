import React from 'react';
import { ScrollView, Text } from 'react-native';
import { IconXMarksmall1 } from '../../../icons/index';
import { Steps, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const StepsScreen = () => {
  return (
    <ScrollView>
      <Space style={styles.container}>
        <Card style={styles.section}>
          <Text style={styles.title}>横向步骤条</Text>
          <Steps
            current={0}
            data={[
              {
                title: '第一步',
                description: '引导用户按照流程完成任务',
              },
              {
                title: '第二步',
                description: '引导用户按照流程完成任务',
              },
              {
                title: '第三步',
                description: '引导用户按照流程完成任务',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Steps
            current={1}
            data={[
              {
                title: '第一步',
                description: '引导用户按照流程完成任务',
              },
              {
                title: '第二步',
                description: '引导用户按照流程完成任务',
              },
              {
                title: '第三步',
                description: '引导用户按照流程完成任务',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Steps
            current={2}
            data={[
              {
                title: '第一步',
              },
              {
                title: '第二步',
              },
              {
                title: '第三步',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Steps
            current={2}
            data={[
              {
                title: '第一步',
              },
              {
                title: '第二步',
              },
              {
                title: '第三步',
              },
              {
                title: '第四步',
              },
            ]}
          />
        </Card>

        <Card>
          <Steps
            current={0}
            collapse
            data={[
              {
                title: '第一步',
              },
              {
                title: '第二步',
              },
              {
                title: '第三步',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>纵向步骤条：从上往下</Text>
          <Steps
            style={styles.wrapper}
            direction="vertical"
            current={1}
            data={[
              {
                title: '第一步',
                description: '副标题',
                dot: <IconXMarksmall1 size={16} fillColor="#0DA554" />,
                time: '2024-7-1',
              },
              {
                title: '第二步',
                description:
                  '副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题',
                descriptionProps: { numberOfLines: 2 },
                time: '2024-7-5',
              },
              {
                title: '第三步',
                description: '副标题',
                time: '2024-7-10',
              },
            ]}
          />

          <Steps
            direction="vertical"
            current={0}
            data={[
              {
                title: '第一步',
                description: '副标题',
              },
              {
                title: '第二步',
                description:
                  '副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题',
              },
              {
                title: '第三步',
                description: '副标题',
              },
            ]}
          />

          <Steps
            direction="vertical"
            current={1}
            data={[
              {
                title: '第一步',
                description: '副标题',
              },
              {
                title: '第二步',
                description:
                  '副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题',
              },
              {
                title: '第三步',
                description: '副标题',
              },
            ]}
          />

          <Steps
            direction="vertical"
            current={2}
            data={[
              {
                title: '第一步',
                description: '副标题',
              },
              {
                title: '第二步',
                description:
                  '副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题',
              },
              {
                title: '第三步',
                description: '副标题',
              },
            ]}
          />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.title}>纵向步骤条：从下往上</Text>
          <Steps
            direction="vertical"
            reverse
            current={0}
            data={[
              {
                title: '第一步',
                description: '副标题',
              },
              {
                title: '第二步',
                description:
                  '副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题',
              },
              {
                title: '第三步',
                description: '副标题',
              },
            ]}
          />

          <Steps
            direction="vertical"
            reverse
            current={1}
            data={[
              {
                title: '第一步',
                description: '副标题',
              },
              {
                title: '第二步',
                description:
                  '副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题',
              },
              {
                title: '第三步',
                description: '副标题',
              },
            ]}
          />

          <Steps
            direction="vertical"
            reverse
            current={2}
            data={[
              {
                title: '第一步',
                description: '副标题',
              },
              {
                title: '第二步',
                description:
                  '副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题',
              },
              {
                title: '第三步',
                description: '副标题',
              },
            ]}
          />
        </Card>
      </Space>
    </ScrollView>
  );
};

export default StepsScreen;
