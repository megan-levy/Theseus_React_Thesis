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
               <div className = "row">
                   <h2>
                   “Democracy, deriving from the Greek word δημοκρατία gave Rule (kratos, κράτος) to the Demos (Δῆμος) (people).” 
                   </h2>
                   <p> <i>  Blackwell, Christopher W. “Athenian Democracy.” Athenian Democracy: a brief overview, February 2003. </i></p>
                      
                   
                   <div className = "col-6">
                       <div className = "democracy">
                       <p>
                        Fundamentally, democracy was structured to give the rule to the people. The beginning of classical Athenian democracy
                         can be marked by Cleisthenes’ reforms, which he implemented through the last decade of the 6th century.  His reforms
                          were guided by two systems: his refinement of Athenian democratic institution and how and his changes to the ways
                           that the Athenian Demos viewed themselves.  His goals were to break down the power of aristocratic families and to 
                           spread power across the Demos, which he did through three pillars. 
                        </p>
                       </div>
                      
                   </div>
                 
                 
                   <div className = "col-6">
                      <div className = "democracy">
                           <p> Cleisthenes’ Three Pillars</p>
                             <ul>
                                 <li>
                                 The Assembly of the Demos
                                 </li>
                                 <li>
                                 The Council of 500
                                 </li>
                                 <li>
                                 The People’s Court : These were supplemented by the Council of the Areopagus, the Archons, and the Generals.
                                 </li>
                             </ul>
                      </div>
                       
                   </div>
                 
               </div>
            </div>
            <div className = "reforms">
                <div className = "row">
                <h2>
                    Reforms of Pericles
                </h2>
                <div className = "col-6"> 
                     <div className = "pericles">
                        <p>
                        Pericles was repeatedly elected to the office of Strategos- the Greek word meaning Army Leader - during the period from 454 to 429 BCE. 
                         Pericles also implemented major reforms, one of which was his ‘Periclean Building Programs’ under which he transformed the Athenian 
                         Acropolis.  He transformed the Delian League into what became the Athenian empire. 
                        Pericles was referred to one by Thucydides, a historian of the time, as “the first citizen of Athens”. 
                        </p>
                    </div>
                </div>
                <div className = "col-6"> 
                     <div className = "pericles">
                         <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pericles_Pio-Clementino_Inv269_n2.jpg/1200px-Pericles_Pio-Clementino_Inv269_n2.jpg" alt = "pericles" width="500" height="700" />
                      <p>
                      <i>Bust of Pericles bearing the inscription "Pericles, son of Xanthippus, Athenian". Marble, Roman copy after a Greek original from c. 430 BC</i>  
                      </p>
                       
                     </div>
                </div>
                </div>
            </div>
        </div>
    );
}