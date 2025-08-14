import React, { FC, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { CodeInput, Button, CodeInputRef } from '@xrnjs/ui';
import Card from '_global/Card';

interface CodeInputScreenProps {}
const CodeInputScreen: FC<CodeInputScreenProps> = () => {
  const codeInputRef = useRef<CodeInputRef>(null);

  const handleSubmit = (code: string) => {
    console.log(code);
  };

  const handleSubmit2 = (code: string) => {
    console.log(code);
  };

  const handleChange = (val: string) => {
    console.log('val------>', val);
  };

  const handleFill = () => {
    const code = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, '0');
    codeInputRef?.current?.setCodeValue(code);
  };

  return (
    <ScrollView>
      <Card title="验证码输入框">
        <View>
          <CodeInput autoFocus cellCount={4} onComplete={handleSubmit} />
        </View>
      </Card>
      <Card title="手动填充">
        <View>
          <CodeInput
            ref={codeInputRef}
            defaultValue={'123456'}
            onComplete={handleSubmit2}
          />

          <Button onPress={handleFill} style={{ marginTop: 7 }}>
            手动填充
          </Button>
        </View>
      </Card>
      <Card title="extra dom">
        <View>
          <CodeInput
            cellCount={8}
            onChange={handleChange}
            onComplete={handleSubmit2}
            extra={
              <View style={{ padding: 7 }}>
                <Button>extra button</Button>
              </View>
            }
          />
        </View>
      </Card>
      <Card title="mask">
        <View>
          <CodeInput
            cellCount={6}
            mask
            defaultValue={'123456'}
            onComplete={handleSubmit2}
          />
        </View>
      </Card>
      <Card title="错误态">
        <View>
          <CodeInput
            type="error"
            cellCount={6}
            defaultValue={'123'}
            onComplete={handleSubmit2}
          />
        </View>
      </Card>
      <Card title="错误态 mask">
        <View>
          <CodeInput
            mask
            type="error"
            cellCount={6}
            defaultValue={'123'}
            onComplete={handleSubmit2}
          />
        </View>
      </Card>
      <Card title="自定义样式">
        <View>
          <CodeInput
            defaultValue={''}
            onComplete={handleSubmit2}
            cellStyle={{ borderColor: 'blue' }}
            cellFocusStyle={{ borderColor: 'red' }}
            cellTextStyle={{ color: 'green' }}
          />
        </View>
      </Card>
    </ScrollView>
  );
};

export default CodeInputScreen;
