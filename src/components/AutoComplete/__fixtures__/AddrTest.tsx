// import React, { FC, useState, useEffect, useRef } from 'react';
// import { AutoComplete, Field, Input, Radio } from '@xrnjs/ui';

// import {
//   PredictionsResult,
//   PredictionsResultItem,
//   getPlacePredictions,
//   PlaceDetailInfo,
//   AddressComponent,
//   getPlaceDetail,
//   initPlaceSdk,
// } from 'react-native-place-module';
// import { iosOrAndroid } from '../../../utils';

// // 自定义地址类型情况
// // eslint-disable-next-line no-shadow
// enum AddrType {
//   STREET = 'route',
//   STREET_NUMBER = 'street_number',
//   CITY = 'locality',
//   STATE = 'administrative_area_level_1',
// }

// // 自定义获取对应的地址信息，后续可能业务会有变化，可以根据业务实际情况调整
// const getAddrInfo = (addressComponents: AddressComponent[]) => {
//   const streetNum: string[] = [];
//   const street: string[] = [];
//   const city: string[] = [];
//   const state: string[] = [];

//   addressComponents?.forEach?.((v: AddressComponent) => {
//     if (v?.types?.includes(AddrType.STREET_NUMBER)) {
//       streetNum.push(v.name);
//     } else if (v?.types?.includes(AddrType.STREET)) {
//       street.push(v.name);
//     } else if (v?.types?.includes(AddrType.CITY)) {
//       city.push(v.name);
//     } else if (v?.types?.includes(AddrType.STATE)) {
//       state.push(v.name);
//     }
//   });

//   const joinTag = ' ';

//   return {
//     street: [...streetNum, ...street].join(joinTag),
//     city: city.join(joinTag),
//     state: state.join(joinTag),
//   };
// };

// interface AddrTestProps {
//   onFocus?: () => void;
// }
// // 地址联想 demo
// const AddrTest: FC<AddrTestProps> = ({ onFocus }: AddrTestProps) => {
//   const [visible, setVisible] = useState(false);
//   const [country, setCountry] = useState('us');
//   const [addrOptions, setAddrOptions] = useState<
//     { label: string; value: string }[]
//   >([]);
//   const isSelectBefore = useRef<boolean>(false);
//   const [addr, setAddr] = useState({
//     street: '',
//     unit: '',
//     city: '',
//     state: '',
//   });
//   const changeAddr = (place: {
//     street?: string;
//     unit?: string;
//     city?: string;
//     state?: string;
//   }) => {
//     place &&
//       setAddr({
//         ...addr,
//         ...place,
//       });
//   };

//   const _getPlacePredictions = (str: string, country?: string) => {
//     console.log('getPlacePredictions===', getPlacePredictions);
//     getPlacePredictions?.(str, country || 'us')
//       .then((res: PredictionsResult) => {
//         console.log('getPlacePredictions=', res); // 调试时候放开
//         const tempOptions = res?.map?.((place: PredictionsResultItem) => {
//           return {
//             label: place?.fullText,
//             value: place?.placeId,
//           };
//         });

//         setAddrOptions(tempOptions);
//         doOpen();
//       })
//       .catch((err: any) => {
//         console.log('getPlacePredictions error=', err);
//       });
//   };

//   const _getPlaceDetail = (placeId: string) => {
//     console.log('getPlaceDetail placeId==', placeId);
//     placeId &&
//       getPlaceDetail(placeId)
//         .then((res: PlaceDetailInfo) => {
//           // console.log('getPlaceDetail', JSON.stringify(res)); // 调试时候放开
//           isSelectBefore.current = true;
//           changeAddr(getAddrInfo(res?.addressComponents));
//           doClose();
//         })
//         .catch((err: any) => {
//           console.log('getPlaceDetail error==', err);
//         });
//   };

//   const doClose = () => {
//     setVisible(false);
//   };

//   const doOpen = () => {
//     setVisible(true);
//   };

//   useEffect(() => {
//     console.log('initPlaceSdk');
//     // ios:AIzaSyBb8UuJaA0xwTgtExYD50q17P6FnS4WUZQ
//     // android: AIzaSyAmeQmct6PKm1-jj5-qlKIV4uZCuMleJMM
//     // 测试：AIzaSyAXrW9QUkLFf7-lc0CgueoHshdSdfxDwxI
//     initPlaceSdk(
//       iosOrAndroid(
//         'AIzaSyBb8UuJaA0xwTgtExYD50q17P6FnS4WUZQ',
//         'AIzaSyAXrW9QUkLFf7-lc0CgueoHshdSdfxDwxI'
//       )
//     ); // 谷歌联想初始化 业务控制
//   }, []);

//   return (
//     <>
//       <Field label="Country" requiredMark>
//         <Radio
//           defaultValue={'us'}
//           options={[
//             {
//               label: '中国',
//               value: 'cn',
//             },
//             {
//               label: '美国',
//               value: 'us',
//             },
//             {
//               label: '泰国',
//               value: 'th',
//             },
//             {
//               label: '哥伦比亚',
//               value: 'co',
//             },
//             {
//               label: '孟加拉国',
//               value: 'bd',
//             },
//             {
//               label: '阿根廷	',
//               value: 'ar',
//             },
//             {
//               label: '澳大利亚		',
//               value: 'au',
//             },
//             {
//               label: '日本',
//               value: 'jp',
//             },
//             {
//               label: '韩国',
//               value: 'kr',
//             },
//           ]}
//           onChange={(v) => {
//             console.log('country===', v);
//             setCountry(v as string);
//           }}
//         />
//       </Field>
//       <Field label="Address line 1" requiredMark style={{ zIndex: 1 }}>
//         <AutoComplete
//           open={visible}
//           value={addr.street}
//           options={addrOptions}
//           highlighted
//           onBlur={doClose}
//           onChange={(str) => {
//             console.log('onChange', str);
//             // 刚刚选中导致的改变，就不用再次搜索了
//             if (isSelectBefore.current) {
//               isSelectBefore.current = false;
//               return;
//             }
//             changeAddr({ street: str });
//             const trimStr = str.trim();
//             trimStr && _getPlacePredictions(trimStr, country);
//           }}
//           onFocus={() => {
//             onFocus?.();
//             // 聚焦了原本有值也搜索
//             addr.street && _getPlacePredictions(addr.street, country);
//           }}
//           onSelect={(value, option) => {
//             console.log('onSelect==', { value, option });
//             if (option?.value) {
//               const id = option.value;
//               _getPlaceDetail(id);
//             }
//           }}
//         />
//       </Field>
//       <Field label="Address line 2" requiredMark>
//         <Input
//           placeholder="Apartment, unit, suite, floor#"
//           value={addr.unit}
//           onChange={(unit) => {
//             changeAddr({ unit });
//           }}
//         />
//       </Field>
//       <Field label="City" requiredMark>
//         <Input
//           placeholder="请输入"
//           value={addr.city}
//           onChange={(city) => {
//             changeAddr({ city });
//           }}
//         />
//       </Field>
//       <Field label="Province/state" requiredMark>
//         <Input
//           placeholder="请输入"
//           value={addr.state}
//           onChange={(state) => {
//             changeAddr({ state });
//           }}
//         />
//       </Field>
//     </>
//   );
// };

// export { AddrTest };

// //////////////////////////////// getPlacePredictions 返回数据结构
// // [
// //   {
// //     fullText: '88 Marketplace, South Jefferson Street, 芝加哥伊利诺伊州美国',
// //     placeId: 'ChIJNVO7aJstDogRk8WWJWJeJoU',
// //     primaryText: '88 Marketplace',
// //     secondaryText: 'South Jefferson Street, 芝加哥伊利诺伊州美国',
// //   },
// //   {
// //     fullText: '888 JAPANESE BBQ, South Decatur Boulevard, 拉斯维加斯内华达美国',
// //     placeId: 'ChIJ2ZqQmk3HyIARu4MykGBZuDg',
// //     primaryText: '888 JAPANESE BBQ',
// //     secondaryText: 'South Decatur Boulevard, 拉斯维加斯内华达美国',
// //   },
// //   {
// //     fullText: '88 Morgan Street, 泽西市新泽西州美国',
// //     placeId: 'ChIJnco2dqxQwokRkIZm38RoMfA',
// //     primaryText: '88 Morgan Street',
// //     secondaryText: '泽西市新泽西州美国',
// //   },
// //   {
// //     fullText: '886, Saint Marks Place, 纽约美国',
// //     placeId: 'ChIJKbjLf5xZwokRYa6BYJg0Xns',
// //     primaryText: '886',
// //     secondaryText: 'Saint Marks Place, 纽约美国',
// //   },
// //   {
// //     fullText: '888 7th Avenue, 纽约美国',
// //     placeId: 'ChIJ91mQmvdYwokRHRU7QKprCek',
// //     primaryText: '888 7th Avenue',
// //     secondaryText: '纽约美国',
// //   },
// // ];
// //////////////////////////////// getPlaceDetail 返回数据结构
// // {"latitude":41.85391850000001,"longitude":-87.64159219999999,"addressComponents":[{"name":"Floor 2","shortName":"Floor 2","types":["subpremise"]},{"types":["street_number"],"name":"2105","shortName":"2105"},{"types":["route"],"name":"South Jefferson Street","shortName":"S Jefferson St"},{"types":["neighborhood","political"],"name":"East Pilsen","shortName":"East Pilsen"},{"types":["locality","political"],"shortName":"Chicago","name":"Chicago"},{"shortName":"Cook County","types":["administrative_area_level_2","political"],"name":"Cook County"},{"types":["administrative_area_level_1","political"],"shortName":"IL","name":"Illinois"},{"types":["country","political"],"shortName":"US","name":"美国"},{"types":["postal_code"],"shortName":"60616","name":"60616"}],"name":"88 Marketplace","placeId":"ChIJNVO7aJstDogRk8WWJWJeJoU","formattedAddress":"2105 S Jefferson St Floor 2, Chicago, IL 60616美国","types":["supermarket","grocery_or_supermarket","store","point_of_interest","food","establishment"]}
