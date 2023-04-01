import { StyleSheet, Text, Image, View } from 'react-native';

type imageProperties = {
    location: string,
    name: string
}

export default function ImageViewer(imageProperties: imageProperties) {
    return (
        <View style={styles.imageContainer}>
            <Image source={require('../../../assets/user.png')} style={styles.imageContainer}></Image>
            <Text>{imageProperties.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 50,
        height: 100,
    }
});