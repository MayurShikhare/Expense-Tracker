import './footer.css'
const Footer = () => {
    return(
        <footer className ="footer_container grid_container">
           
           <div className="footer_image"></div>
           

           <div className="footer_content">
               
               <p className="footer_content__author">Mayur Shikhare</p>

               <div className ="footer_content__details">
                  <p>Like to design, love to build</p>
                  <p>Web designer and developer based in Karnataka, India</p> 
                </div>
                <div className = "footer_links flex_container">
                    <a href="https://twitter.com/shikhare_mayur?s=09"> <div className="twitter"></div> </a>
                    <a href="https://www.linkedin.com/in/mayur-shikhare/"> <div className="linkedin"></div> </a>
                </div>
                

           </div>
        </footer>

    )
}
export default Footer
