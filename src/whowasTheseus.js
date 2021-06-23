import React from "react";
import whowasTheseus from "./whowasTheseus.css";

export default function History() {
    return (
        <div className = "historyCOntainer">
        
        <h1>
            Who Was Theseus?
        </h1>    

        <div className = "history">
            <h2>
                Theseus: The Early Years
            </h2>
            <p className = "early_years">
            Theseus was born to Aethra, the daughter of Pitheus, and Aegeus, the king of Athens. 
            Although in alternate versions of the story Theseus is written as the son of the sea god Poseidon.
             When he came of age, Theseus traveled to Athens to see his father.
            </p>
        </div>

        <div className = "history">
            <h2>
                Journey to Athens
            </h2>
            <h3>
              <i>The Six Labors of Theseus</i>  
            </h3>
            <div className = "row">
                <div className = "col-6">
                    <div className = "six_labors">
                        <ul>
                            <li>
                            His first challenge came from Periphetes the club bearer.
                            </li>
                            <li>
                            At the Isthmus of Corinth, he killed Sinis the Pine Bender
                            </li>
                            <li>
                            He bested the Crommyonian sow 
                            </li>
                            <li>
                            threw Sciron off the cliff which he had previously been throwing people off
                            </li>
                            <li>
                            slew Procrustes who killed people with the rack (A device which was used to stretch victims)
                            </li>
                            <li>
                             killed Cercyon who forced strangers to wrestle him
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = "col-6">
                     <div className = "six_labors">
                        <p>
                        “And so in the first place, in Epidauria, when Periphetes, who used a club as his weapon and on this account was called Club-bearer, 
                        laid hold of him and tried to stop his progress, he grappled with him and slew him. 
                        And being pleased with the club, he took it and made it his weapon and continued to use it, just as Heracles did with the lion’s skin.”
                        </p>
                        <p>
                       <i>Plutarch's Lives. Vol. 1. Loeb Classical Library, 1914. pg. 17</i> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className = "history">
            <h2>
                The Minotuar
            </h2>
            <p className = "minotaur">
            Before rising to the throne, Theseus sailed to Crete alongside thirteen other youths where he fought the Minotaur
             and, because of his forgetfulness, he neglected to change his sails to indicate his survival. Seeing the black sails 
             instead of white, Aegeus threw himself from atop the acropolis into what is now the Aegean Sea and his son became ruler.
               After his ascension to the throne, Theseus continued his streak of great deeds doing such things as battling the Amazons and
                the Centaurs.  Ultimately however, he died much like his father- being thrown from a cliff into the sea.
            </p>
        </div>

        <div className = "history">
            test
        </div>
        
        </div>
    )
}