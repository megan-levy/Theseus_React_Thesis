import react from "react";
import "./politicalReforms.css";

export default function Political () {
    return (
        <div className = "Political_container">
            <h1>
                Thesus' Political Reforms and Beyond
            </h1>
            <div className = "reforms">
                <h2>
                    Theseus' Reforms
                </h2>
               <div className = "row">
                 <div className = "col-6">
                    <p className = "theseus_synoikismos">
                        Theseus helped to unite the fifty-one Attic communities in an amalgamation referred to as 
                        synoikismos, from the Greek word συνοικισμός translating literally into ‘living together’.  
                        This synoikismos brought all the smaller communities under one centralized government which was seated in Athens.
                    </p>
                </div>
                <div className = "col-6">
                    <p className = "theseus_synoikismos">
                        “after doing away with the town-halls and council-chambers 
                        and magistracies in the several communities, and after building a common town-hall and council-chamber 
                        for all on the ground where the upper town of the present day stands, he named the city Athens, and 
                        instituted a Panathenaic festival.” <br />
                        <i>
                        Plutarch's Lives. Vol. 1. Loeb Classical Library, 1914.
                        </i>
                    </p>
                    
                    </div>
               </div>
         
                
            </div>
            <div className = "reforms">
                democracy
            </div>
            <div className = "reforms">
                Pericles 
            </div>
        </div>
    );
}