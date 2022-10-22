import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Data = [
    {
        categoryId: 'fruits',
        title: 'mango',
        quantity: 2,
    },
    {
        categoryId: 'fruits',
        title: 'apple',
        quantity: 5,
    },
    {
        categoryId: 'fruits',
        title: 'coconut',
        quantity: 4,
    },
    {
        categoryId: 'fruits',
        title: 'orange',
        quantity: 2,
    },
    {
        categoryId: 'fruits',
        title: 'pomegranade',
        quantity: 2,
    },
    {
        categoryId: 'fruits',
        title: 'mausmi',
        quantity: 3,
    },
    {
        categoryId: 'flowers',
        title: 'rose',
        quantity: 1,
    },
    {
        categoryId: 'flowers',
        title: 'lili',
        quantity: 4,
    },
    {
        categoryId: 'flowers',
        title: 'jasmine',
        quantity: 2,
    },
    {
        categoryId: 'flowers',
        title: 'hibiscus',
        quantity: 8,
    },
    {
        categoryId: 'flowers',
        title: 'daffodils',
        quantity: 9,
    },
    {
        categoryId: 'flowers',
        title: 'seasonal flowers',
        quantity: 1,
    },
    {
        categoryId: 'flowers',
        title: 'sregional fruits',
        quantity: 1,
    },
    {
        categoryId: 'vegetables',
        title: 'potato',
        quantity: 8,
    },
    {
        categoryId: 'vegetables',
        title: 'tomato',
        quantity: 5,
    },
    {
        categoryId: 'vegetables',
        title: 'guard',
        quantity: 2,
    },
    {
        categoryId: 'vegetables',
        title: 'brinjal',
        quantity: 6,
    },
];


const sectionListData = [];

Data.forEach((item) => {
    //console.log(item)
    if (sectionListData.length > 0) {
        let dataMatched = false;
        sectionListData.forEach((objectData) => {
            if (objectData.categoryId === item.categoryId) {
                objectData.data.push(item.title)
                dataMatched = true;
            }
        });
        if (dataMatched === false) {
            let newData = {
                categoryId: item.categoryId,
                data: [item.title]
            };
            sectionListData.push(newData)
        }
    }
    else {
        let newData = {
            categoryId: item.categoryId,
            data: [item.title]
        };
        sectionListData.push(newData)
    }
});
console.log(sectionListData)


const Item = ({ categoryId }) => (
    <View style={styles.item}>
        <Text style={styles.categoryId}>{categoryId}</Text>
    </View>
);

export default class SectionListAssignment extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                    <SectionList
                        sections={sectionListData}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => <Item categoryId={item} />}
                        renderSectionHeader={({ section: { categoryId} }) => (
                            <Text style={styles.header}>{categoryId}</Text>
                        )}
                    />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#d1cfff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff9"
    },
    categoryId: {
        fontSize: 24,
        color:'#0000de',
    }
});