import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Titlepage from "./titlePage";
import WorksCited from "./worksCited";
import History from "./whowasTheseus";
import Political from "./politicalReforms";
import Pottery from "./athenianPottery";

 export default function Options () {
    return (
  <div className = "options">  
    <h1>  Imagery of Theseus < br/>
         In late Attic and early Classical Athenian Art
    </h1>
    <Tabs>
        <TabList>
        <Tab>I. Title Page</Tab>
        <Tab>II. Who Was Theseus?</Tab>
        <Tab>III. Theseus' Political Reforms and Beyond</Tab>
        <Tab>IV. Athenian Pottery</Tab>
        <Tab>V. Athenian Building Projects</Tab>
        <Tab>VI. Why Does It Matter?</Tab>
        <Tab>VII. Works Cited</Tab>
        </TabList>

        <TabPanel>
            <div>
                <Titlepage /> 
            </div>
        </TabPanel>
        <TabPanel>
            <div>
                <History />
            </div>
        </TabPanel>
    <TabPanel>
            <div>
                <Political />
            </div>
    </TabPanel>
    
    <TabPanel>
            <div>
                <Pottery />
            </div>
    </TabPanel>
    
    <TabPanel>
            <p>
                Athenian Building Projects
            </p>
            <p>
                test
            </p>
    </TabPanel>
    
    <TabPanel>
            <p>
                Why Does It Matter?
            </p>
            <p>
            test
            </p>
    </TabPanel>


    <TabPanel>
            <div>
                <WorksCited />
            </div>
    </TabPanel>

    </Tabs >
<footer>
    Open sourced <a href = "https://github.com/megan-levy/Theseus_React_Thesis" >on Github </a>  by Megan Levy
</footer>
</div>
    );
    }