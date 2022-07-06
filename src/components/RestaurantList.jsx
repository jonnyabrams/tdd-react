import { useEffect } from "react"

const RestaurantList = ({ loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants()
  }, [loadRestaurants])
  
  return (
    <div>RestaurantList</div>
  )
}

export default RestaurantList