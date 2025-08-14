import React, { useState, useRef } from 'react';
import {
  AutoComplete,
  AutoCompleteOption,
  AutoCompleteRef,
  Button,
  Field,
  FloatingLayer,
  Space,
} from '@xrnjs/ui';
import styles from './style';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
// import { AddrTest } from './AddrTest';

const AutoCompleteScreen = () => {
  const [options1, setOptions1] = useState<AutoCompleteOption[]>([]);
  const [options2, setOptions2] = useState<AutoCompleteOption[]>([]);
  const [options3, setOptions3] = useState<AutoCompleteOption[]>([]);
  const autoRef = useRef<AutoCompleteRef>(null);
  const scrollRef = useRef<any>(null);
  const [showGoogleFloat, setShowGoogleFloat] = useState(false);
  const { flatten } = StyleSheet;
  const maxZIndex = 100; // DEMO确保上面的能覆盖下面的 业务开发需要注意

  const scrollTo = (y: number) => {
    if (!(y && y > 0)) return;

    setTimeout(
      () =>
        scrollRef.current?.scrollTo?.({
          x: 0,
          y,
          animated: true,
        }),
      500
    );
  };
  const maxHeigth = Dimensions.get('window').height - 198;
  console.log('options1===', options1);
  return (
    <ScrollView
      ref={scrollRef}
      // onScroll={(e) => {
      //   console.log('onScroll==', e?.nativeEvent);
      // }}
      keyboardShouldPersistTaps={'handled'}
    >
      <Space>
        <View style={flatten([styles.wrap, { zIndex: maxZIndex }])}>
          <Text style={styles.head}>基本使用</Text>

          <AutoComplete
            allowClear
            options={options1}
            onChange={(v) => {
              console.log('v===', v); // 最后一次就是最终结果值
              if (!v) {
                return setOptions1([]);
              }
              const arr: string[] = [];
              arr.length = 9;
              arr.fill('1');
              const ops = arr.map((_, i) => {
                return { value: v.repeat(i + 1) };
              });
              setOptions1(() => ops);
            }}
            onSelect={(value, option) => {
              console.log('onSelect===', { value, option });
            }}
            onVisibleChange={(isOpen) => {
              console.log('onVisibleChange~', isOpen);
            }}
            onFocus={() => {
              console.log('onFocus~');
              scrollTo(100);
            }}
            onBlur={() => {
              console.log('onBlur~');
            }}
            onClear={() => console.log('onClear~')}
          />
        </View>
        <View style={flatten([styles.wrap, { zIndex: maxZIndex - 1 }])}>
          <Text style={styles.head}>error状态</Text>
          <AutoComplete status="error" />
        </View>
        <View style={flatten([styles.wrap, { zIndex: maxZIndex - 1 }])}>
          <Text style={styles.head}>不可使用</Text>
          <AutoComplete disabled />
        </View>
        <View style={flatten([styles.wrap, { zIndex: maxZIndex - 2 }])}>
          <Text style={styles.head}>高亮匹配内容（请输入xt）</Text>
          <AutoComplete
            highlighted
            allowClear
            options={options2}
            onChange={(v) => {
              const datas = [
                'xtrfr',
                'xtrfr.cn',
                'xtrfr.com',
                'xtransfer',
                'xtransfer.cn',
                'xtransfer.com',
              ]
                .filter((v1) => !!v && v1.includes(v?.toLocaleLowerCase?.()))
                .map((v2) => {
                  return { value: v2 };
                });

              console.log('datas==', datas);
              setOptions2(datas);
            }}
            onFocus={() => {
              scrollTo(333);
            }}
          />
        </View>
        {/* <View style={flatten([styles.wrap, { zIndex: maxZIndex - 3 }])}>
        <Text style={styles.head}>
          完全自定义使用-谷歌地址联想示例（需要原生外壳支持）
        </Text>
        <AddrTest
          onFocus={() => {
            scrollTo(810);
          }}
        />
      </View> */}
        <View style={flatten([styles.wrap, { zIndex: maxZIndex - 4 }])}>
          <Text style={styles.head}>ref使用</Text>
          <Button
            onPress={() => autoRef.current?.focus()}
            style={styles.margBtm}
          >
            聚焦
          </Button>
          <Button
            onPress={() => autoRef.current?.blur()}
            style={styles.margBtm}
          >
            失焦
          </Button>
          <Button
            onPress={() => autoRef.current?.clear()}
            style={styles.margBtm}
          >
            清空
          </Button>
          <AutoComplete
            ref={autoRef}
            options={options3}
            onChange={(v) => {
              console.log('v===', v); // 最后一次就是最终结果值
              if (!v) return setOptions3([]);
              const arr: string[] = [];
              arr.length = 9;
              arr.fill('1');
              const ops = arr.map((_, i) => {
                return { value: v.repeat(i + 1) };
              });
              setOptions3(ops);
            }}
            onFocus={() => {
              scrollTo(1360);
            }}
          />
        </View>
        <Text style={styles.head}>该组件请在App端验证 （web不准）</Text>
        <View style={{ paddingBottom: 300 }}>
          <Button onPress={() => setShowGoogleFloat(true)}>
            FloatingLayer中AutoComplete滚动问题(Android)
          </Button>
          <FloatingLayer
            title="滚动问题"
            confirmButtonText="Next"
            visible={showGoogleFloat}
            useNative
            showCancelButton
            keyboardMargin={156}
            containerHeight={maxHeigth}
            onCancel={() => {
              setShowGoogleFloat(false);
            }}
            onConfirm={() => {
              setShowGoogleFloat(false);
            }}
          >
            <View style={{ zIndex: 2, width: '100%' }}>
              <Field label="Android滚动有问题 请输入xt" requiredMark>
                <AutoComplete
                  highlighted
                  allowClear
                  options={options2}
                  onChange={(v) => {
                    const datas = [
                      'xtrfr',
                      'xtrfr.cn',
                      'xtrfr.com',
                      'xtransfer',
                      'xtransfer.cn',
                      'xtransfer.com',
                    ]
                      .filter(
                        (v1) => !!v && v1.includes(v?.toLocaleLowerCase?.())
                      )
                      .map((v2) => {
                        return { value: v2 };
                      });

                    console.log('datas==', datas);
                    setOptions2(datas);
                  }}
                  onSelect={(value, option) => {
                    console.log('onSelect===', { value, option });
                  }}
                  onVisibleChange={(isOpen) => {
                    console.log('onVisibleChange~', isOpen);
                  }}
                  onFocus={() => {
                    console.log('onFocus~');
                    scrollTo(100);
                  }}
                  onBlur={() => {
                    console.log('onBlur~');
                  }}
                  onClear={() => console.log('onClear~')}
                />
              </Field>
            </View>
            <View style={{ width: '100%', paddingBottom: 180 }}>
              <Field
                label="Android滚动有问题 根据实际情况自定义解决 红色框为父视图 父视图内可以进行滑动 请输入xt"
                requiredMark
              >
                <AutoComplete
                  style={{
                    paddingBottom: 118,
                    borderWidth: 1,
                    borderColor: 'red',
                  }}
                  highlighted
                  allowClear
                  options={options2}
                  onChange={(v) => {
                    const datas = [
                      'xtrfr',
                      'xtrfr.cn',
                      'xtrfr.com',
                      'xtransfer',
                      'xtransfer.cn',
                      'xtransfer.com',
                    ]
                      .filter(
                        (v1) => !!v && v1.includes(v?.toLocaleLowerCase?.())
                      )
                      .map((v2) => {
                        return { value: v2 };
                      });

                    console.log('datas==', datas);
                    setOptions2(datas);
                  }}
                  onSelect={(value, option) => {
                    console.log('onSelect===', { value, option });
                  }}
                  onVisibleChange={(isOpen) => {
                    console.log('onVisibleChange~', isOpen);
                  }}
                  onFocus={() => {
                    console.log('onFocus~');
                    scrollTo(100);
                  }}
                  onBlur={() => {
                    console.log('onBlur~');
                  }}
                  onClear={() => console.log('onClear~')}
                />
              </Field>
            </View>
          </FloatingLayer>
        </View>

        <View>
          <Space gap={40}>
            <AutoComplete options={[{ value: '1' }]} placement="top" />
            <AutoComplete
              highlighted
              options={[
                { value: '1' },
                { value: '1' },
                { value: '1' },
                { value: '1' },
                { value: '122123123123123123213213241231256789dhckd dw8 8度' },
                { value: '1' },
                { value: '1' },
              ]}
              placement="top"
            />
          </Space>
          <View style={{ height: 40 }} />
        </View>
      </Space>
    </ScrollView>
  );
};

export default AutoCompleteScreen;
