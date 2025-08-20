import { ScrollView } from 'react-native';
import React from 'react';
import BasicUsage from './basicUsage';
import LayoutStyles from './layoutStyles';
import DataTypes from './dataTypes';
import EventHandling from './eventHandling';
import CustomStyles from './customStyles';

const RadioDemo: React.FC = () => {
  return (
    <ScrollView>
      <BasicUsage />
      <LayoutStyles />
      <DataTypes />
      <EventHandling />
      <CustomStyles />
    </ScrollView>
  );
};

export default RadioDemo;
