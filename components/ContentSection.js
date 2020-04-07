import React from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ContentSection = () => {
    return (
        <View style={styles.ContentSectionView}>
            <Text style={styles.ContentSectionViewText}>I want to</Text>
            <View style={styles.buttonSection}>
                <View style={styles.CircularButtonView}>
                    <TouchableOpacity
                        style={styles.CircularButton}>
                            <AntDesign name='key' size={30} color="#d8dbe2"/>
                            <Text style={styles.CircularButtonText}>Buy</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.CircularButtonView}>
                <TouchableOpacity
                    style={styles.CircularButton}>
                        <MaterialCommunityIcons name="file-document-box-multiple-outline" size={30} color="#d8dbe2"/>
                        <Text style={styles.CircularButtonText}>Sell</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.CircularButtonViewActive}>
                <TouchableOpacity
                    style={styles.CircularButtonActive}>
                        <AntDesign name='home' size={30} color="#fff"/>
                        <Text style={styles.CircularButtonTextActive}>Rent</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.CircularButtonSecondary}>
                <Text style={styles.ContentSectionViewText}>Area/City</Text>
                <TouchableOpacity
                    style={styles.CircularButtonSecondaryView}
                    >
                        <AntDesign name="home" size={30} color="#d8dbe2"/>
                        <Text style={styles.CircularButtonSecondaryViewText}>Chicago,USA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.CircularButtonSecondaryViewActive}
                    >
                        <Text style={styles.CircularButtonSecondaryViewActiveText}>Find Property</Text>
                        <AntDesign name="arrowright" size={30} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContentSection

const styles = StyleSheet.create({
    ContentSectionView:{
        // backgroundColor:'#6CB5DA',
        backgroundColor:'#fff',
        height:windowHeight,
        marginTop:(0.40*windowHeight),
        paddingTop:20,
        paddingHorizontal:30,
    },
    buttonSection:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    CircularButtonView:{
        borderRadius:50,
        borderWidth:2,
        borderColor:'#d8dbe2',
        justifyContent:'center',
    },
    CircularButton:{
        marginHorizontal:10,
        padding:20,
    },
    CircularButtonActive:{
        marginHorizontal:10,
        padding:20,
        borderWidth:0,
    },
    CircularButtonViewActive:{
        borderRadius:50,
        backgroundColor:'#00adb4',
        justifyContent:'center',
    },
    CircularButtonText:{
        color:'#d8dbe2',
    },
    CircularButtonTextActive:{
        color:'#fff',
    },
    ContentSectionViewText:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical:10,
    },
    CircularButtonSecondaryView:{
        borderColor:'#d8dbe2',
        borderWidth:2,
        padding:24,
        marginVertical:10,
        borderRadius:50,       
        flexDirection:'row', 
    },
    CircularButtonSecondaryViewText:{
        alignSelf:'center',
        marginLeft:10,
    },
    CircularButtonSecondaryViewActive:{
        backgroundColor:'#00adb4',
        padding:24,
        marginVertical:10,
        borderRadius:50,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    CircularButtonSecondaryViewActiveText:{
        color:'#fff',
        alignSelf:'center'
    }


})
