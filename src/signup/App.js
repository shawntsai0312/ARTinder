import React, { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App">
      <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Sign Up</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          placeholder="Enter your username here"
          className={'inputBox'}
        />
        <label className="errorLabel">{}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          placeholder="Enter your profile here"
          className={'inputBox'}
        />
        <label className="errorLabel">{}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          placeholder="Enter your password here"
          className={'inputBox'}
        />
        <label className="errorLabel">{}</label>
      </div>
      <br />
      <div className="form-group">
        <select className="form-control">
          <option value="select">Select your character</option>
          <option value="First">Shop Owner</option>
          <option value="Second">Artist</option>
        </select>
      </div>
      <br />
      <div className="form-group">
        <select className="form-control">
          <option value="select">Select your style</option>
          <option >Carpentry</option>
          <option >Interior design</option>
          <option >Architecture design</option>
          <option >Sculpture</option>
          <option >Paiting</option>
          <option >Music</option>
          <option >Comics</option>
          <option >Fragrance</option>
        </select>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'buttonContainer'} type="button" value={'sign up'} />
      </div>
    </div>
    </div>
  )
}

export default App