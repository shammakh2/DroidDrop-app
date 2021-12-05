import * as React from 'react';
import {StyleSheet, Text, View, Button, PermissionsAndroid} from 'react-native';
import {BleManager} from 'react-native-ble-plx';

interface props {
    children: React.ReactNode;
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 100,
        fontWeight: '900',
    },
    button: {
        margin: 3,
        padding: 3,
    },
});

export default function Tabs(children: props) {
    const props = children.route.params.children;

    function onClick() {
        PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        ]).then(result => {
            console.log(result);
        });
    }

    function scanAndConnect(manager) {
        manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.error(error);
                return;
            }
            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.
            if (device.name != null) {
                console.log(device.name);
            }
        });
    }

    function onClick2() {
        let manager = new BleManager();
        scanAndConnect(manager);
    }
    // console.log('Log', subscription);

    return (
        <View style={styles.view}>
            <Text style={styles.text}>{props}</Text>
            <View style={styles.button}>
                <Button title="Blueetooth On" onPress={onClick}></Button>
            </View>
            <View style={styles.button}>
                <Button title="Blueetooth Off" onPress={onClick2}></Button>
            </View>
        </View>
    );
}
