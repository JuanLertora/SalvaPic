import React from "react";
import { View } from "react-native";
import { Link } from "react-router-native";

function AppBarTab({ active, children, to }) {
    return (
        <Link to={to}>
            
        </Link>
    )
}

function AppBar() {

    return (
        <View>
            <AppBarTab active={ } to={ } children={ } />
        </View>
    )

}

export default AppBar