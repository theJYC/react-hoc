import React from "react"
import withFavoriteNumber from "./withFavoriteNumber"

function App(props) {
  return (
    <div>
      <h2>Hi! 👋🏼</h2>
      <h3>This number, {props.number}, came from the Higher Order Component</h3>
    </div>
  )
}

const FavoriteNumberAdded = withFavoriteNumber(App)
export default FavoriteNumberAdded
