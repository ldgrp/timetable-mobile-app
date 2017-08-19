import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

class SubjectItem extends Component{
    render(){
        const { timeIn, timeOut, subject, teacher, room, color, onItemPress } = this.props
        return (
            <TouchableOpacity 
                style={[styles.container, color && {backgroundColor: color}]}
                onPress={onItemPress}
            >
                <View style={styles.left}>
                    <Text style={styles.timeText}>{timeIn}</Text>
                    <Text style={styles.timeText}>{timeOut}</Text>
                </View>
                <View style={styles.center}>
                    <Text style={styles.subjectText}>{subject.toUpperCase()}</Text>
                    <Text style={styles.teacherText}>{teacher}</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.roomText}>{""}</Text>
                    <Text style={styles.roomText}>{room }</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height:60,
        flexDirection:'row',
        padding: 10,
        backgroundColor: '#555',
        marginVertical: 2
    },
    left:{
        // backgroundColor:'blue',
        alignItems:'flex-end',
        justifyContent: 'center',
        marginRight:10,
        flex:1
    },
    center:{
        // backgroundColor:'green',
        flex:5
    },
    right:{
        // backgroundColor:'yellow',
        alignItems:'flex-end',
        justifyContent:'center',
        flex:2,
        marginRight:10,
    },
    timeText:{
        fontFamily:'roboto-regular',
        fontSize: 14,
        color: 'white'
    },
    subjectText:{
        fontFamily:'roboto-bold',
        fontSize: 18,
        color:'white',
    },
    teacherText:{
        fontFamily:'roboto-regular',
        fontSize: 14,
        color:'white',
    },
    roomText:{
        fontFamily:'roboto-bold-italic',
        fontSize: 14,
        color:'white',
    }
})

module.exports = SubjectItem