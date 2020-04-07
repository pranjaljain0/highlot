import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions, ImageBackground } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <ImageBackground
            source={{
                uri:'https://res.cloudinary.com/daytlidrk/image/upload/c_scale,h_1080/v1586215337/lighted-tower-beside-building-2304895_vg4hpo.jpg'
            }}
            style = {{ 
                width: windowWidth,
                height: 800,
            }}>
            
            <View style={styles.headerContainerTextContainer}>
                <Text style={styles.headerContainerTitle}>Hi Hector Hughes</Text>
                <Text style={styles.headerContainerText}>Lorem Ipsum is the best text replacement is the tech industry and is irreplacable</Text>
            </View>
            </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        position:'absolute',
    },
    headerContainerTextContainer:{
        flex:1,
        justifyContent:'center',
        marginBottom:80,
        marginHorizontal:30,
    },
    headerContainerTitle:{
        fontSize:28,
        color:'#fff',
        marginVertical:8,
    },
    headerContainerText:{
        color:'#fff',
        marginRight:20,
    }
})
