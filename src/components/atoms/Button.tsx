import { StyleSheet, View, Pressable, Text } from 'react-native';

type buttonLabel = {
    text: string
}

export default function Button(props: buttonLabel) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 100,
      height: 68,
      marginHorizontal: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: 'blue'
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });