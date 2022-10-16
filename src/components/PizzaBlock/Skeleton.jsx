import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="123" r="118" /> 
    <rect x="0" y="305" rx="11" ry="11" width="280" height="88" /> 
    <rect x="0" y="258" rx="13" ry="13" width="280" height="27" /> 
    <rect x="2" y="427" rx="9" ry="9" width="103" height="29" /> 
    <rect x="136" y="414" rx="17" ry="17" width="143" height="48" /> 
    <rect x="209" y="446" rx="0" ry="0" width="2" height="3" />
  </ContentLoader>
)

export default Skeleton;