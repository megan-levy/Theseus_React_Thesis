import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Titlepage from "./titlePage";

 export default function Options () {
    return (
  <div className = "options">  
    <h1>  Imagery of Theseus < br/>
         In late Attic and early Classical Athenian Art
    </h1>
    <Tabs>
        <TabList>
        <Tab>Title Page</Tab>
        <Tab>Who Was Theseus?</Tab>
        <Tab>Theseus' Political Reforms and Beyond</Tab>
        <Tab>Athenian Pottery</Tab>
        <Tab>Athenian Building Projects</Tab>
        <Tab>Why Does It Matter?</Tab>
        <Tab>Works Cited</Tab>
        </TabList>

        <TabPanel>
            <div>
                <Titlepage /> 
            </div>
        </TabPanel>
    <TabPanel>
            <p>
                Who Was Theseus
            </p>

    </TabPanel>
    <TabPanel>
            <p>
                Theseus' Political Reforms and Beyond
            </p>
            <p>
                test
            </p>
    </TabPanel>
    
    <TabPanel>
            <p>
                Athenian Pottery
            </p>
            <p>
                test
            </p>
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
            <p>
            Works Cited
            </p>
            <p>
            test
            </p>
    </TabPanel>

    </Tabs >
<footer>
    <a href = "https://github.com/megan-levy/Theseus_React_Thesis">Open sourced</a> on Github by Megan Levy
</footer>
</div>
    );
    }