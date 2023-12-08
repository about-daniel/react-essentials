/* eslint-disable react/prop-types */
import { useState } from 'react'
import {EXAMPLES} from '../data.js'
import TabButton from './TabButton.jsx'
import Section from './Section.jsx'

export default function Examples(){
    const [tabContent,setTabContent] = useState();

    function handleClick(selectedButton){
        setTabContent(selectedButton);
    }

    let content = <p>Please select a topic</p>
    if(tabContent) {
        content = <div id="tab-content">
                    <h3>{EXAMPLES[tabContent].title}</h3>
                    <p>{EXAMPLES[tabContent].description}</p>
                    <pre>
                    <code>
                        {EXAMPLES[tabContent].code}
                    </code>
                    </pre>
                </div>
    }
    return (
        <Section title="Examples" id="examples">
          <menu>
            <TabButton isSelected={tabContent == 'components' ? true : false} onClick={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected={tabContent == 'jsx' ? true : false} onClick={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent == 'props' ? true : false} onClick={()=>handleClick('props')}>Props</TabButton>
            <TabButton isSelected={tabContent == 'state' ? true : false} onClick={()=>handleClick('state')}>State</TabButton>
          </menu>
          {content}
        </Section>
    )
}