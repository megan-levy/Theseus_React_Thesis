import React from "react"
import "./titlePage.css"

export default function TitlePage() {
    return (
        <div className = "containter_title_page">
        <div className = "introduction">
        <p> 
            Hi there! Welcome to my site! In 2020 I recieved my Bachelors Degree in <a href = "https://classics.uc.edu/"> Classical Civilizations </a>  
             from the University of Cincinnati. Since then, I have begun to pursue a career in software. It felt only perfect to combine my two fields
            of interest. The research and writing for this site is all pulled from my graduating project from UC.  <br />
            This website is constructed to be navigated as if reading my paper start to finish. For the most clear understanding of the project, please follow 
            numerated tabs. Enjoy!
         </p>
         </div>
          <div className = "row">
              <div className = "col - 6">
                   <div className = "theseus_title_page">
                  <img src = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Canova_-_Theseus_defeats_the_centaur_-_close.jpg" alt = "Theseus and the Centaur" width="655" height="655" />
                  </div>
                  <p>
                          Theseus Defeats the Centaur by Antonio Canova (1804–1819), Kunsthistorisches Museum
                    </p> 
                  
              </div>
              <div className = "col - 5">
                  <div className = "thesus_statement">
                      <p>
                      “Theseus’ heroic deeds, both before and after he ascended to the throne, 
                      have provided artists in late Attic and early Classical Athens with an abundance 
                      of material which they have used to propel early ideas of Athenian Democracy”
                      </p>
                  </div>
              </div>
              
          </div>
          <footer>

          </footer>
        </div>
    );
}