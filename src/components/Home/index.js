// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {iplList: [], isLoading: false}

  componentDidMount() {
    this.getIplApi()
  }

  getIplApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()
    console.log(teamsData)
    const updatedData = teamsData.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplList: updatedData})
  }

  displayHomeContent = () => {
    const {iplList} = this.state
    console.log(iplList)

    return (
      <div className="Home-container">
        <div className="image-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">{}</ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-main-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.displayHomeContent()
        )}
      </div>
    )
  }
}

export default Home
