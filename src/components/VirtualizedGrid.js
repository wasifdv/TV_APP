import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../style';

const VirtualizedGrid = ({ data, renderItem, numColumns = 3 }) => {
  const formatData = (dataList, columns) => {
    const numberOfFullRows = Math.floor(dataList.length / columns);
    let numberOfElementsLastRow = dataList.length - (numberOfFullRows * columns);
    
    while (numberOfElementsLastRow !== columns && numberOfElementsLastRow !== 0) {
      dataList = [...dataList, { key: `blank-${numberOfElementsLastRow}`, empty: true }];
      numberOfElementsLastRow++;
    }
    return dataList;
  };

  const renderGridItem = ({ item, index }) => {
    if (item.empty) {
      return <View style={[styles.gridItem, { backgroundColor: 'transparent', borderWidth: 0 }]} />;
    }
    return renderItem({ item, index });
  };

  return (
    <FlatList
      data={formatData(data, numColumns)}
      renderItem={renderGridItem}
      numColumns={numColumns}
      keyExtractor={(item, index) => item.key || index.toString()}
      removeClippedSubviews={true}
      maxToRenderPerBatch={6}
      windowSize={5}
      initialNumToRender={6}
    />
  );
};

export default VirtualizedGrid;
