import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { primary } from '../colours/index'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import NavigationBar from '../components/NavigationBar'
import ContentSection from '../components/ContentSection'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <NavigationBar/>
            <ScrollView style={{
                }}>
                <ContentSection/>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:primary
    }
})
