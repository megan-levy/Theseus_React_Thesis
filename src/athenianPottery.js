//import react from "react"
import "./athenianPottery.css";

export default function Pottery() {
    return (
        <div className = "pottery_container">
               <h1>
                   Athenian Pottery
               </h1>
               <div className = "pottery">
                    <div className = "row">
                    <div className = "col-6">
                        <div className = "kylix">
                        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Theseus_deeds_BM_E_84.JPG/1280px-Theseus_deeds_BM_E_84.JPG" alt = "kodros painter" width="500" height="475"/>
                      <br/>
                       <i>Fig. 1. Attributed to the Kodros Painter. 440-430, Red figure cup. 12.7 x 33.02 cm. British Museum, London, England. </i>
                        </div>
                    </div>
                    <div className = "col-6">
                        <p>
                            test
                        </p>
                        
                        </div>
                    </div>
               </div>
              
               <div className = "pottery">
                   <h2>
                       test
                   </h2>
                   <p>
                       This is a test sentance 
                   </p>
               </div>

               <div className = "pottery">
                    
               </div>
         
        </div>
    )
}