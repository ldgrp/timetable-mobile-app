import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteSubject } from '../actions'
import SubjectItem from '../common/SubjectItem'

class DayScreen extends Component{
    generateFlatlist(day, subjects, schedules){
        const output = []
        if(schedules[day]){
            const daySchedule = schedules[day].schedule
            for(var item in daySchedule){
                output.push(Object.assign({}, subjects[daySchedule[item].name], daySchedule[item]))
            }
        }
        return output 
    }
    render(){
        const { day, subjectList, scheduleList } = this.props
        const list= this.generateFlatlist(day, subjectList, scheduleList)
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.date}>{moment().format('DD MMMM YYYY')}</Text>
                {
                    list?list.map((item, key) =>(
                        <SubjectItem
                            key={key}
                            subject={item.name}
                            teacher={item.teacher}
                            timeIn={item.timeIn}
                            timeOut={item.timeOut}
                            room={item.room}
                            color={item.color}
                            onItemPress={() => console.log(key)}
                        />
                    )):<View />
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 6,
    },
    date:{
        paddingTop: 10,
        paddingBottom: 12,
        paddingLeft: 10,
        color:'#999'
    },
    headerRight:{
        padding: 10
    }
})

function select(store){
    return {
        scheduleList: store.subjects.scheduleList,
        subjectList: store.subjects.subjectList
    }
  }
  
module.exports = connect(select)(DayScreen)