import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface props {
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function Tabs({children}: props) {
    return (
        <View style={styles.view}>
            <Text>{children}</Text>
        </View>
    );
}
