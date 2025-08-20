import { render, fireEvent } from '@testing-library/react-native';
import Tour from '..';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const layout1 = { x: 10, y: 0, width: 100, height: 100 };
const layout2 = { x: 10, y: 108, width: 100, height: 100 };
const title1 = '标题1';
const desc1 = '描述1';
const step1 = {
  title: title1,
  layout: layout1,
  description: desc1,
};
const title2 = '标题2';
const desc2 = '描述2';
const step2 = {
  title: title2,
  layout: layout2,
  description: desc2,
};

describe('Tour', () => {
  it('renders correctly with simple config', () => {
    const steps = [step1];
    const { getByTestId, getByText } = render(
      <Tour steps={steps} visible={true} />
    );
    // 外层mask
    expect(getByTestId('mask')).toBeTruthy();
    // tour内容
    expect(getByTestId('tourContent')).toBeTruthy();
    // 标题和描述
    expect(getByText(title1)).toBeTruthy();
    expect(getByText(desc1)).toBeTruthy();
    // 跳过按钮
    expect(getByTestId('skipBtn')).toBeTruthy();
    // 页码指示
    expect(getByText('(1/1)')).toBeTruthy();
    // 操作按钮 上一步
    expect(getByTestId('preBtn')).toBeTruthy();
    // 操作按钮 下一步
    expect(getByTestId('nextBtn')).toBeTruthy();
  });

  it('renders correctly after click next or pre', () => {
    const steps = [step1, step2];
    const { getByTestId, getByText } = render(
      <Tour steps={steps} visible={true} />
    );
    const preBtn = getByTestId('preBtn');
    const nextBtn = getByTestId('nextBtn');
    // defalut
    expect(getByText(title1)).toBeTruthy();
    expect(getByText(desc1)).toBeTruthy();

    fireEvent.press(nextBtn);
    // next
    expect(getByText(title2)).toBeTruthy();
    expect(getByText(desc2)).toBeTruthy();

    fireEvent.press(preBtn);
    // pre
    expect(getByText(title1)).toBeTruthy();
    expect(getByText(desc1)).toBeTruthy();
  });

  it('renders correctly with Custom indicatorsRender ', () => {
    const steps = [step1, step2];
    const { getByTestId, getByText } = render(
      <Tour
        steps={steps}
        visible={true}
        indicatorsRender={(current) => (
          <TouchableOpacity testID="cusSkipBtn">
            <Text>直接跳过({current + 1}/2)</Text>
          </TouchableOpacity>
        )}
      />
    );
    const preBtn = getByTestId('preBtn');
    const nextBtn = getByTestId('nextBtn');
    const indicator1 = '直接跳过(1/2)';
    const indicator2 = '直接跳过(2/2)';
    // 第一页
    expect(getByText(indicator1)).toBeTruthy();

    fireEvent.press(nextBtn);
    // 第二页
    expect(getByText(indicator2)).toBeTruthy();

    fireEvent.press(preBtn);
    // 第一页
    expect(getByText(indicator1)).toBeTruthy();
  });

  it('renders correctly with Custom preBtn & nextBtn ', () => {
    const preBtnTxt = '上一步';
    const nextBtnTxt = '下一步';
    const steps = [
      {
        ...step1,
        prevButton: preBtnTxt,
        nextButton: nextBtnTxt,
      },
    ];
    const { getByTestId, getByText } = render(
      <Tour steps={steps} visible={true} />
    );

    expect(getByText(preBtnTxt)).toBeTruthy();
    expect(getByText(nextBtnTxt)).toBeTruthy();
    expect(getByTestId('preBtn')).toBeTruthy();
    expect(getByTestId('nextBtn')).toBeTruthy();
  });
});
