import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { DetailButtonProps } from './interface';
import styles from './styles/texts.style';
import Popup from '../Popup';

const DetailButton: React.FC<DetailButtonProps> = (props) => {
  const { showBullets, texts, popupTitle, showMoreText, popupUseNative } =
    props;
  const [visible, setVisible] = React.useState(false);

  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      <View>
        <Text style={styles.viewMore}>{showMoreText}</Text>
        <Popup
          visible={visible}
          position="bottom"
          useNative={popupUseNative}
          round
          safeAreaInsetBottom={true}
          onPressOverlay={() => setVisible(false)}
          style={styles.popupWrapper}
        >
          <Popup.Header
            title={<Text style={styles.title}>{popupTitle}</Text>}
            onCancel={() => setVisible(false)}
            showConfirmButton={false}
            headerStyle={styles.headerWrapper}
          />
          <ScrollView style={styles.scrollView}>
            {texts?.map((item, index) => (
              <View style={styles.listItem} key={index}>
                {showBullets && <View style={styles.dot} />}
                <Text style={styles.text}>{item.content}</Text>
              </View>
            ))}
          </ScrollView>
        </Popup>
      </View>
    </TouchableOpacity>
  );
};

export default DetailButton;
