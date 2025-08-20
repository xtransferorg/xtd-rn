import React from 'react';
import { ScrollView } from 'react-native';
import BasicUsage from './basicUsage';
import ParagraphAndTitle from './paragraphAndTitle';
import PresetPages from './presetPages';
import AdvancedFeatures from './advancedFeatures';

const SkeletonDemo = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BasicUsage />
      <ParagraphAndTitle />
      <PresetPages />
      <AdvancedFeatures />
    </ScrollView>
  );
};

export default SkeletonDemo;
