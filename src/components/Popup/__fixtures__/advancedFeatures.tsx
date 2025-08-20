import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, Alert } from 'react-native';
import { Popup, Button, Space } from '@xrnjs/ui';
import Card from '_global/Card';
import styles from './style';

const AdvancedFeatures = () => {
  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);
  const [visible4, setVisible4] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleFormSubmit = () => {
    if (!formData.name || !formData.email) {
      Alert.alert('提示', '请填写完整信息');
      return;
    }
    Alert.alert('成功', '表单提交成功');
    setVisible2(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <ScrollView>
      <Space>
        <Card>
          <Text style={styles.cardTitle}>带滚动内容的弹出层</Text>
          <Popup
            visible={visible1}
            position="bottom"
            round
            onPressOverlay={() => setVisible1(false)}
          >
            <Popup.Header
              title="详细内容"
              onCancel={() => setVisible1(false)}
              showConfirmButton={false}
            />
            <ScrollView style={styles.scrollView}>
              {Array.from({ length: 20 }, (_, index) => (
                <View key={index} style={styles.listItem}>
                  <View style={styles.dot} />
                  <Text style={styles.text}>
                    这是第 {index + 1} 项内容，可以滚动查看更多详细信息
                  </Text>
                </View>
              ))}
            </ScrollView>
          </Popup>
          <Button onPress={() => setVisible1(true)}>滚动内容弹出层</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>表单弹出层</Text>
          <Popup
            visible={visible2}
            position="bottom"
            round
            closeOnPressOverlay={false}
          >
            <Popup.Header
              title="填写信息"
              confirmButtonText="提交"
              onCancel={() => {
                setVisible2(false);
                setFormData({ name: '', email: '' });
              }}
              onConfirm={handleFormSubmit}
            />
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>姓名</Text>
                <TextInput
                  style={styles.input}
                  value={formData.name}
                  onChangeText={(text) =>
                    setFormData({ ...formData, name: text })
                  }
                  placeholder="请输入姓名"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>邮箱</Text>
                <TextInput
                  style={styles.input}
                  value={formData.email}
                  onChangeText={(text) =>
                    setFormData({ ...formData, email: text })
                  }
                  placeholder="请输入邮箱"
                  keyboardType="email-address"
                />
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible2(true)}>表单弹出层</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>自定义动画时长</Text>
          <Popup
            visible={visible3}
            position="center"
            duration={800}
            onPressOverlay={() => setVisible3(false)}
          >
            <View style={styles.wrapper}>
              <View style={styles.contentContainer}>
                <Text style={styles.text}>
                  这个弹出层使用了 800ms 的动画时长
                </Text>
              </View>
            </View>
          </Popup>
          <Button onPress={() => setVisible3(true)}>自定义动画时长</Button>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>生命周期回调</Text>
          <Popup
            visible={visible4}
            position="center"
            onPressOverlay={() => setVisible4(false)}
            onOpen={() => console.log('弹出层开始打开')}
            onOpened={() => console.log('弹出层打开完成')}
            onClose={() => console.log('弹出层开始关闭')}
            onClosed={() => console.log('弹出层关闭完成')}
          >
            <View style={styles.customContent}>
              <Text style={styles.warningText}>
                查看控制台可以看到生命周期回调的执行
              </Text>
            </View>
          </Popup>
          <Button onPress={() => setVisible4(true)}>生命周期回调</Button>
        </Card>
      </Space>
    </ScrollView>
  );
};

export default AdvancedFeatures;
