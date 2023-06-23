import React from "react"
import { View } from "react-native"
import AppBar from "../AppBar/AppBar"
import { Route, Switch } from "react-router-native"
import Login from "../../pages/Login/Login"
import Home from "../Home/Home"
import Constants from 'expo-constants'

function Main() {
    return (
        <View>
            <AppBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/signin">
                    <Login/>
                </Route>
            </Switch>
        </View>
    )
}

export default Main