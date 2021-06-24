import React from "react"
import withFavoriteNumber from "./withFavoriteNumber"
function App(props) {
  return (
    <div>
      <h2>hello</h2>
      <h3>This number, {props.number}, came from the supercharge ability of the Higher Order Component</h3>
    </div>
  )
}

const FavoriteNumberAdded = withFavoriteNumber(App)
export default FavoriteNumberAdded
