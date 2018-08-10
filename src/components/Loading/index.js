import React, { Component } from 'react'

// https://www.html5tricks.com/demo/svg-css3-loading-icons/index.html
class Circle1 extends Component {
  render() {
    let { size = 'middle' } = this.props
    const { color = 'white' } = this.props
    switch (size) {
      case 'large':
        size = 40
        break
      case 'middle':
        size = 35
        break
    }
    return (
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={size} height={size}
           viewBox="0 0 50 50" style={{ enableBackground: 'new 0 0 50 50' }} >
        <path fill={color}
              d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
              transform="rotate(227.8 25 25)" >
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25"
                            dur="0.6s" repeatCount="indefinite" />
        </path >
      </svg >
    )
  }
}


export default {
  Circle1
}


