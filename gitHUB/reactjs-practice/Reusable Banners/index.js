// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} banner-card`}>
      <div>
        <h1 className="head">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
