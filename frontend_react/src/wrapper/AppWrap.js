import React from 'react'
import { SocialMedia } from '../miniComponent'

// HOC (Higher order component for wrapping social media links and navigation dots)
const AppWrap = (Component, idName, classNames) => function HOC() {
  
    // wrapping the component giving it an id name and social media
    return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
            <Component />
        </div>

    </div>
  )
}

export default AppWrap