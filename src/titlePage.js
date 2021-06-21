import React from "react"
import "./titlePage.css"

export default function TitlePage() {
    return (
        <div className = "containter_title_page">

        <h2> Hi there! Welcome to my site! </h2>
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