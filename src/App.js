import React from "react"
import withFavoriteNumber from "./withFavoriteNumber"
function App(props) {
  console.log(props.number)
  return (
    <div>
      <h2>hello</h2>
    </div>
  )
}

const FavoriteNumberAdded = withFavoriteNumber(App)
export default FavoriteNumberAdded
