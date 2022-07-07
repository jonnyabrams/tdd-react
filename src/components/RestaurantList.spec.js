import { render, screen } from "@testing-library/react"
import { RestaurantList } from "./RestaurantList"

describe('RestaurantList', () => {
  const restaurants = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ]

  let loadRestaurants

  const renderComponent = (propOverrides = {}) => {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      restaurants, ...propOverrides
    }

    loadRestaurants = props.loadRestaurants

    render(
      <RestaurantList 
        {...props}
      />
    )
  }

  it('loads restaurants on first render', () => {
    renderComponent()

    expect(loadRestaurants).toHaveBeenCalled()
  })

  it('displays the restaurants', () => {
    renderComponent()

    expect(screen.getByText('Sushi Place')).toBeInTheDocument()
    expect(screen.getByText('Pizza Place')).toBeInTheDocument()
  })

  it('displays the loading indicator while loading', () => {
    renderComponent({loading: true})
    // use the 'progressbar' ARIA role
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  });

  it('does not display the loading indicator while not loading', () => {
    renderComponent({loading: false})
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    // query methods return a null if an element is not found, whereas get methods throw an error. Because we expect to not find the element here, a query method is necessary for our assertion to succeed.
  })
})