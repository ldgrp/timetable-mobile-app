import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import FloatLabelTextInput from "react-native-floating-label-text-input";
import { connect } from 'react-redux';
import { addSubject, deleteSubject } from '../actions'
class AddSubjectScreen extends Component {
    static navigationOptions={
        title:'Add Subject'
    }
    state = {
        subject: 'Maths B',
        teacher: 'Edward Qin',
        room: 'SHB 213',
        timeIn: '10:15',
        timeOut: '12:25',
        color: '#000',
        focusIndex: -1
    }
    onAddButtonPress(){
        const { subject, teacher, room, timeIn, timeOut, color } = this.state
        const { dispatch } = this.props
        dispatch(addSubject(subject, teacher, room, color,"Monday", timeIn, timeOut))
        dispatch({type: 'Navigation/BACK'})
    }
    render(){
        const { subject, teacher, room, timeIn, timeOut, color } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                <View style={styles.section}>
                    <FloatLabelTextInput
                        placeholder={"Subject"}
                        value={subject}
                        maxLength={20}
                        onChangeTextValue={text => this.setState({ subject: text })}
                        onFocus={() => this.setState({ focus: 0 })}
                        onBlur={() => this.setState({ focus: -1 })}
                    /> 
                </View>
                <View style={styles.section}>
                    <FloatLabelTextInput
                        placeholder={"Teacher"}
                        maxLength={24}
                        value={teacher}
                        onChangeTextValue={text => this.setState({ teacher: text })}
                        onFocus={() => this.setState({ focus: 1 })}
                        onBlur={() => this.setState({ focus: -1 })}
                    /> 
                </View>
                <View style={styles.section}>
                    <FloatLabelTextInput
                        placeholder={"Room"}
                        maxLength={10}
                        value={room}
                        onChangeTextValue={text => this.setState({ room: text })}
                        onFocus={() => this.setState({ focus: 2 })}
                        onBlur={() => this.setState({ focus: -1 })}
                    /> 
                </View>
                <View style={styles.section}>
                    <FloatLabelTextInput
                        placeholder={"Time In"}
                        value={timeIn}
                        onChangeTextValue={text => this.setState({ timeIn: text })}
                        onFocus={() => this.setState({ focus: 3 })}
                        onBlur={() => this.setState({ focus: -1 })}
                    /> 
                    <FloatLabelTextInput
                        placeholder={"Time Out"}
                        value={timeOut}
                        onChangeTextValue={text => this.setState({ timeOut: text })}
                        onFocus={() => this.setState({ focus: 4 })}
                        onBlur={() => this.setState({ focus: -1 })}
                    /> 
                </View>
                <View style={styles.section}>
                    <FloatLabelTextInput
                        placeholder={"Color"}
                        value={color}
                        onChangeTextValue={text => this.setState({ color: text })}
                        onFocus={() => this.setState({ focus: 5 })}
                        onBlur={() => this.setState({ focus: -1 })}
                    /> 
                </View>
                </View>
                <Button title = 'Add' onPress={() => this.onAddButtonPress()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        // flex: 1
    },
    section: {
        flexDirection: "row",
        
    },
    form: {
        marginTop: 10,
        marginBottom: 10,
    }
})

function select(store){
    return {
        subjects: store.subjects.list
    }
}


module.exports = connect(select)(AddSubjectScreen)