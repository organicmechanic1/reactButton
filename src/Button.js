import React from 'react'

var styles = {
  button:{
    background:'blue',
    color:'white',
    height: 75,
    width: 150,
    fontSize: 20,
    marginLeft: 620,
    marginTop: 300,

  }
}

export default React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      likes: "Likes"
    }
  },
  funkyChicken: function () {
    this.setState({
      count: this.state.count + 1,
      likes: this.state.count === 0 ? "Like" : "Likes" 
    })
  },
  render: function () {
    return (
        <div>
          <button style={styles.button}onClick={this.funkyChicken}>{this.state.count} {this.state.likes}</button>
        </div>
    )
  }
})