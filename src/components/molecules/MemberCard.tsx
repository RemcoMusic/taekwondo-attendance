import { StyleSheet, Text, View } from 'react-native';

import Button from '../atoms/Button';
import ImageViewer from '../atoms/ImageViewer';

type Person = {
  name: string
}

export default function Entry(person: Person) {
    return (
      <View style={styles.entryContainer}>
        <ImageViewer location='template' name={person.name}></ImageViewer>
        <Button text="Present"/>
        <Button text="Absent"/>
      </View>
    );
  }

const styles = StyleSheet.create({
    entryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9c2ff',
        marginVertical: 8
    }
});