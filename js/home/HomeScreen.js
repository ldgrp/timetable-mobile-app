import React, { Component } from 'react';
import {
    Layout,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteSubject } from '../actions'
import DayScreen from './DayScreen'
import WeekScreen from './WeekScreen'

class HomeScreen extends Component{
    static navigationOptions= ({navigation}) => ({
        title: 'MONDAY',
        headerRight: <Text style={styles.headerRight} onPress={() => navigation.state.params.navigateToAddSubject()}>Add</Text>
    })
    componentWillMount(){
        this.props.navigation.setParams({navigateToAddSubject: this.navigateToAddSubject.bind(this)})
    }
    navigateToAddSubject(){
        this.props.dispatch({type: 'NAV_ADD_SUBJECT'})
    }
    render(){
        const {subjects} = this.props
        return (
            <WeekScreen/>
        )
    }
}

const styles = StyleSheet.create({
    container:{
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
        subjects: store.subjects.list
    }
}

module.exports = connect(select)(HomeScreen)