//import react from "react"
import "./athenianPottery.css";

export default function Pottery() {
    return (
        <div className = "pottery_container">
               <h1>
                   Athenian Pottery
               </h1>

               <div className = "pottery">
                <h3>
                     Pottery Type - Kylix
                </h3>  
                <p>
                A kylix is a stemmed cup with two horizontal handles and a stemmed foot. 
                 The wine-drinking vessels were the most common shape for Greek pottery and were used regularly during the Greek symposium. 
                 The symposium was an ancient male drinking party. At these parties, upper class Greeks would gather in large groups to 
                 share wisdom, wealth, and to discuss politics and philosophy. 
                </p>
                    </div>


               <div className = "pottery">
                   
                 <div className = "row">
                     <h2>
                     Kachrylion Kylix
                     </h2>
                     <div className = "col-6">
                        <div className = "kylix">
                            <img src = "https://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/greek-and-roman/kachrylion-kylix/1-1520.jpg?as=1&la=en&mh=2124&mw=2592&hash=354ACA6443D3428FDA56CA61E6E661E5" alt = "Kachrylion Kylix 1" width="500" height="450" />
                        <br />
                        <i>
                        Fig. 2. Kachrylion Kylix. 510 BCE. Museo Archeologico Nazionale, Florence (inv. 91456). Lent by the Republic of Italy, Polo Museale Regionale della Toscana.
                        </i>
                        </div>
                     </div>

                     <div className = "col-6">
                        <div className = "kylix">
                            <img src = "https://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/greek-and-roman/kachrylion-kylix/2_1520.jpg?as=1&la=en&mh=2220&mw=3040&hash=CA6E12E5A83F73A3778EE0F3FABCED1C" alt = "Kachrylion Kylix 2" width="550" height="450" />
                            <br />
                            <i>
                        Fig. 3. Kachrylion Kylix. 510 BCE. Museo Archeologico Nazionale, Florence (inv. 91456). Lent by the Republic of Italy, Polo Museale Regionale della Toscana.
                        </i>
                        </div>
                     </div>
                 </div>
                 <row>
                     <div>
                         <p>
                             <i>
                             “The traditional interpretation is that he is flying over the sea, an allusion to the birth of his mother, the goddess Aphrodite, from the waves”  <span class="myDIV">Source.</span> <div class="hide"> https://www.metmuseum.org/about-the-met/curatorial-departments/greek-and-roman-art/kachrylion-kylix-ancient-greek-vase</div>
                             </i>   

                         </p>
                        <p>
                        The center of the cup shows an image of what is believed to be the god Eros. The outside of the kylix shows the youthful
                         deeds of Theseus.  There are many possibilities as to why the image of Eros was used alongside these deeds. It could have been
                          just coincidence; two characters randomly put on the same kylix. Although it is more likely that it was an attempt to evoke Theseus’ 
                        divine lineage. The two shown together symbolize unity and order between man and gods. 
                        </p>
                     </div>
                 </row>
               </div>


               <div className = "pottery">
                    <h2>
                       Kodros Painter 
                   </h2>
                    <div className = "row">
                    <div className = "col-6">
                        <div className = "kylix">
                        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Theseus_deeds_BM_E_84.JPG/1280px-Theseus_deeds_BM_E_84.JPG" alt = "kodros painter" width="500" height="450"/>
                      <br/>
                       <i>Fig. 1. Attributed to the Kodros Painter. 440-430, Red figure cup. 12.7 x 33.02 cm. British Museum, London, England. </i>
                        </div>
                    </div>
                    <div className = "col-6">
                        <div className = "kylix">
                            <p>
                            This kylix, which has been dated from 440BCE to 430BCE is completely devoted to his Deeds. 
                            The center circular panel contains the image of Theseus taking the dead minotaur out of the labyrinth. 
                            The outer inner-ring depicts his youthful deeds; clockwise from top: Kerkyon, Prokrustes, Skiron, the Marathon Bull,
                             Sinis, and the Kronnyonian sow.  The outside of the cup shows those same youthful deeds. 
                            </p>
                        </div>
                        </div>
                    </div>
               </div>
              
              <div className= "pottery">
                <p>
                Having the story of Theseus constantly displayed at the Symposia could inspire conversations 
                of the mythical founding of Athens, or could foster discussion of the budding democracy. 
                </p>
              </div>
         
        </div>
    )
}