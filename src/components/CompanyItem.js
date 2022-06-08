// Matthew Funnell - 375494205
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 100,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: '#ffffff',
        color: '#cb6d4f',
        paddingBottom: 5,
        paddingTop: 5,
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    companyItemContainer: {
        margin: 10
    },
    employeeName: {
        fontSize: 16,
        margin: 2
    }
});

const CompanyItem = (props) => {
    return (
        <View style={styles.companyItemContainer}>
              <Card>
              <Card.Title
                title={props.companies.company}
                left={(props) => <Avatar.Icon {...props} color={'#ffffff'} style={{backgroundColor: '#941a1d'}} icon="database" />}
                />                  
                <Card.Content>
                    {props.companies.names.map((name) => {
                        return (
                            <Text style={styles.employeeName}>
                                {name.firstName} {name.lastName}
                            </Text>
                        )
                    })}
                </Card.Content>
            </Card>
        </View>
    )
}

export default CompanyItem;
