import React from 'react'
import '../HeroImage/HeroImage.css'
import '../../../App.css'

const HeroImage = () =>{
return(
    <div className = "hero_container">
        <div className = "hero_text">
            <p className = "hero_text__heading">Expense Manager</p>
            <p className="hero_text__subheading">Track all of your expenses at one place</p>
            {/* <div className="flex_container">
                <button className = "login-btn" type="submit">Login</button>
                <button className = "signup-btn" type="submit">signup</button>
            </div> */}
        </div>
        <div className = "calculator_svg">
            {/* <img src = "D:\reactFull\assignment1\public\Assets\undraw_Calculator.svg" alt = "Calculator SVG"/> */}
        </div>
    </div>
)
}

export default HeroImage