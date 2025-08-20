import React, { useState } from 'react';
import { Button, Space, Picker, PickerOptionCascade, Fill } from '@xrnjs/ui';
import Card from '_global/Card';

// 地区级联数据
const regionData: PickerOptionCascade[] = [
  {
    label: '北京市',
    value: 'beijing',
    children: [
      {
        label: '北京市',
        value: 'beijing_city',
        children: [
          { label: '东城区', value: 'dongcheng' },
          { label: '西城区', value: 'xicheng' },
          { label: '朝阳区', value: 'chaoyang' },
          { label: '海淀区', value: 'haidian' },
          { label: '丰台区', value: 'fengtai' },
        ],
      },
    ],
  },
  {
    label: '上海市',
    value: 'shanghai',
    children: [
      {
        label: '上海市',
        value: 'shanghai_city',
        children: [
          { label: '黄浦区', value: 'huangpu' },
          { label: '徐汇区', value: 'xuhui' },
          { label: '长宁区', value: 'changning' },
          { label: '静安区', value: 'jingan' },
          { label: '普陀区', value: 'putuo' },
        ],
      },
    ],
  },
  {
    label: '广东省',
    value: 'guangdong',
    children: [
      {
        label: '广州市',
        value: 'guangzhou',
        children: [
          { label: '天河区', value: 'tianhe' },
          { label: '越秀区', value: 'yuexiu' },
          { label: '荔湾区', value: 'liwan' },
          { label: '海珠区', value: 'haizhu' },
        ],
      },
      {
        label: '深圳市',
        value: 'shenzhen',
        children: [
          { label: '南山区', value: 'nanshan' },
          { label: '福田区', value: 'futian' },
          { label: '罗湖区', value: 'luohu' },
          { label: '宝安区', value: 'baoan' },
        ],
      },
    ],
  },
];

// 公司部门级联数据
const departmentData: PickerOptionCascade[] = [
  {
    label: '技术部',
    value: 'tech',
    children: [
      {
        label: '前端组',
        value: 'frontend',
        children: [
          { label: 'React团队', value: 'react_team' },
          { label: 'Vue团队', value: 'vue_team' },
          { label: 'Angular团队', value: 'angular_team' },
        ],
      },
      {
        label: '后端组',
        value: 'backend',
        children: [
          { label: 'Java团队', value: 'java_team' },
          { label: 'Node.js团队', value: 'nodejs_team' },
          { label: 'Python团队', value: 'python_team' },
        ],
      },
      {
        label: '移动端组',
        value: 'mobile',
        children: [
          { label: 'iOS团队', value: 'ios_team' },
          { label: 'Android团队', value: 'android_team' },
          { label: 'React Native团队', value: 'rn_team' },
        ],
      },
    ],
  },
  {
    label: '产品部',
    value: 'product',
    children: [
      {
        label: '用户体验组',
        value: 'ux',
        children: [
          { label: 'UI设计师', value: 'ui_designer' },
          { label: 'UX设计师', value: 'ux_designer' },
          { label: '交互设计师', value: 'interaction_designer' },
        ],
      },
      {
        label: '产品策划组',
        value: 'planning',
        children: [
          { label: '产品经理', value: 'pm' },
          { label: '数据分析师', value: 'data_analyst' },
          { label: '用户研究员', value: 'user_researcher' },
        ],
      },
    ],
  },
];

const CascadeSelection = () => {
  const [regionResult, setRegionResult] = useState<string[]>([]);
  const [departmentResult, setDepartmentResult] = useState<string[]>([]);
  const [dynamicResult, setDynamicResult] = useState<string[]>([]);

  return (
    <Space>
      <Card title="地区级联选择">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '请选择地区',
                columns: regionData,
              }).then((data) => {
                console.log('地区选择结果:', data);
                const labels =
                  data.columns?.map((option) => option.label) || [];
                setRegionResult(labels as string[]);
              });
            }}
          >
            选择地区（省市区）
          </Button>
          {regionResult.length > 0 && (
            <Button fill={Fill.weak} disabled>
              已选择: {regionResult.join(' - ')}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="部门级联选择">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '请选择部门',
                columns: departmentData,
                description: '选择您所在的部门和团队',
              }).then((data) => {
                console.log('部门选择结果:', data);
                const labels =
                  data.columns?.map((option) => option.label) || [];
                setDepartmentResult(labels as string[]);
              });
            }}
          >
            选择部门团队
          </Button>
          {departmentResult.length > 0 && (
            <Button fill={Fill.weak} disabled>
              已选择: {departmentResult.join(' - ')}
            </Button>
          )}
        </Space>
      </Card>

      <Card title="带默认值的级联选择">
        <Space>
          <Button
            onPress={() => {
              Picker({
                title: '带默认值的地区选择',
                columns: regionData,
                defaultValue: ['guangdong', 'shenzhen', 'nanshan'], // 默认选择广东-深圳-南山
              }).then((data) => {
                console.log('带默认值级联选择结果:', data);
                const labels =
                  data.columns?.map((option) => option.label) || [];
                setRegionResult(labels as string[]);
              });
            }}
          >
            带默认值的级联选择
          </Button>
        </Space>
      </Card>

      <Card title="动态数据级联">
        <Space>
          <Button
            onPress={() => {
              // 模拟动态数据加载
              const dynamicDataWithChildren = [
                {
                  label: '动态省份A',
                  value: 'dynamic_a',
                  children: [
                    {
                      label: '动态城市A1',
                      value: 'dynamic_a1',
                      children: [
                        { label: '动态区县A1-1', value: 'dynamic_a1_1' },
                        { label: '动态区县A1-2', value: 'dynamic_a1_2' },
                      ],
                    },
                    {
                      label: '动态城市A2',
                      value: 'dynamic_a2',
                      children: [
                        { label: '动态区县A2-1', value: 'dynamic_a2_1' },
                        { label: '动态区县A2-2', value: 'dynamic_a2_2' },
                      ],
                    },
                  ],
                },
                {
                  label: '动态省份B',
                  value: 'dynamic_b',
                  children: [
                    {
                      label: '动态城市B1',
                      value: 'dynamic_b1',
                      children: [
                        { label: '动态区县B1-1', value: 'dynamic_b1_1' },
                        { label: '动态区县B1-2', value: 'dynamic_b1_2' },
                      ],
                    },
                  ],
                },
              ];

              Picker({
                title: '动态数据级联',
                columns: dynamicDataWithChildren,
                description: '数据动态加载示例',
              }).then((data) => {
                console.log('动态数据级联选择结果:', data);
                const labels =
                  data.columns?.map((option) => option.label) || [];
                setDynamicResult(labels as string[]);
              });
            }}
          >
            动态数据级联选择
          </Button>
          {dynamicResult.length > 0 && (
            <Button fill={Fill.weak} disabled>
              已选择: {dynamicResult.join(' - ')}
            </Button>
          )}
        </Space>
      </Card>
    </Space>
  );
};

export default CascadeSelection;
