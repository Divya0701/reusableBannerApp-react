// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {details} = props
  const {headerText, description, className} = details

  return (
    <div className={`container ${className}`}>
      <div className="mini-container">
        <h1 className="main-heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </div>
  )
}
export default BannerCardItem
