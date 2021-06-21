import React from "react"
import "./titlePage.css"

export default function TitlePage() {
    return (
        <div className = "containter_title_page">

         <h1 className = "header_title_page">
         Imagery of Theseus < br/>
         In late Attic and early Classical Athenian Art
         </h1>
         <h2 className = "header_title_page">
             Spring 2020 Thesis
         </h2>
          <div className = "row">
              <div className = "col - 6">
                   <div className = "theseus_title_page">
                  <img src = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Canova_-_Theseus_defeats_the_centaur_-_close.jpg" alt = "Theseus and the Minotaur" width="655" height="655" />
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