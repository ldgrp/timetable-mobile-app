import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

import { connect } from 'react-redux';
import { logout } from '../actions/auth';

let LogoutButton = ({dispatch}) =>{
    return (
        <Button 
            title="Logout" 
            onPress={() => dispatch(logout())}
        />
    )
}

LogoutButton = connect()(LogoutButton)

module.exports = LogoutButton