import {
  StyleSheet,
  SafeAreaView,
  SectionList,
  SectionListData,
} from 'react-native';
import React, {Component} from 'react';

interface Props {
  Child: any;
  sections: ReadonlyArray<SectionListData<any, any>>;
  horizontal?: boolean | null | undefined;
  multip?: boolean | null | undefined;
  style?: {};
}

export default class CourseScroll extends Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
  }
  render() {
    const {Child, sections, horizontal, multip} = this.props;
    const {container} = styles;
    return (
      <SafeAreaView style={container}>
        <SectionList
          contentContainerStyle={[multip ? styles.multip : null]}
          stickySectionHeadersEnabled={false}
          sections={sections}
          horizontal={horizontal}
          renderItem={({item}: any) => {
            return <Child item={item} />;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  multip: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
