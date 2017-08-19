import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from './Colors';

class Card extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={[styles.headerLeft]}>
                        <Text style={[styles.headerText, this.props.headerLeftStyle]}>{this.props.headerLeft}</Text>
                    </View>
                    <View style={[styles.headerCenter]}>
                        <Text style={[styles.headerText, this.props.headerCenterStyle]}>{this.props.headerCenter}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <View style={[styles.headerRight]}>
                            <Text style={[styles.headerText, this.props.headerRightStyle]}>{this.props.headerRight}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                     {this.props.children}
                </View>
                {this.props.disableFooter?null:
                <View style={styles.footerContainer}>
                     <View style={[styles.footerLeft]}>
                        <Text style={[styles.footerText]}>{this.props.footerLeft}</Text>
                    </View>
                    <View style={[styles.footerCenter]}>
                        <Text style={[styles.footerText]}>{this.props.footerCenter}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={[styles.footerRight]} onPress={this.props.onPressFooterRight}>
                            <Text style={[styles.footerText, this.props.footerRightStyle]}>{this.props.footerRight}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        borderRadius: 1,
        backgroundColor: '#FAFAFA',
        borderWidth:.5,
        borderColor: '#DADADA',
    },
    headerContainer:{
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 15,
        borderBottomWidth:.5,
        borderColor: '#DADADA'
    },
    headerLeft:{
        flex: 1
    },
    headerCenter:{
    },
    headerRight:{
        alignSelf: 'flex-end'
    },
    headerText:{
        fontFamily: 'roboto-medium',
        fontSize: 16,
    },
    body:{
        backgroundColor: 'white',
    },
    bodyText:{
        fontFamily: 'roboto-regular',
        fontSize: 14
    },
    footerContainer:{
        flexDirection:'row',
    },
    footerText:{
        fontFamily: 'roboto-regular',
        fontSize: 12
    },
    footerLeft:{
        flex: 1
    },
    footerCenter:{
    },
    footerRight:{
        alignSelf:'flex-end',
    },
})
module.exports = Card