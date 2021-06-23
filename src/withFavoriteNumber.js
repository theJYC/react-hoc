import React from "react"

//export default on one line makes it tidier:
export default function withFavouriteNumber(component) {
    //declared as capital letter Component variable to follow naming convention:
    const Component = component

    return function(props) {
        return (
            <Component {...props} number={67}/>
        )
    }
}

/*
 A function that takes a component as its first argument and returns a new component that wraps
 the given component, providing extra capabilities to it.
*/
