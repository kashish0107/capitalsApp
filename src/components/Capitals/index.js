import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  selectedCapital = event => {
    this.setState({activeId: event.target.value})
  }

  selectedCountry = () => {
    const {activeId} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )
    return filteredCountry.country
  }

  render() {
    const {activeId} = this.state
    const displayCountry = this.selectedCountry()

    return (
      <div className="main-con">
        <div className="inner-card">
          <h1>Countries and capitals</h1>
          <div className="select-con">
            <select onChange={this.selectedCapital} className="drop-down">
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country</p>
          </div>
          <h1>{displayCountry}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
