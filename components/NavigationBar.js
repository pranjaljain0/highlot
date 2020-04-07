import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const NavigationBar = () => {
    return (
        <View style={styles.NavBarContainer}>
            <View style={styles.NavBarImageContainer}>
                <Image
                    source={
                        require('../assets/icons/Icon_ham.png')
                    }
                    style={{
                        height:30,
                        width:30,
                    }}
                />
                <View style={styles.CircularImageView}>
                    <Image
                        source={{
                            uri:'https://randomuser.me/api/portraits/women/54.jpg'
                        }}
                        style = {{ 
                            width: 40, 
                            height: 40,
                            borderRadius:50,
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default NavigationBar

const styles = StyleSheet.create({
    NavBarContainer:{
        height:100,
    },
    NavBarImageContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:40,
    },
    CircularImageView:{
        borderRadius:50,
        overflow:"hidden",
        padding:2,
        backgroundColor:'#fff',
    }
})
