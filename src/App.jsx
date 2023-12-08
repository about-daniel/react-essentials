import { useState } from 'react'
import {CORE_CONCEPTS} from './data.js'
import {EXAMPLES} from './data.js'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'


function App() {

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
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>( <CoreConcept key={item.title} {...item}/> ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent == 'components' ? true : false} onSelect={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected={tabContent == 'jsx' ? true : false} onSelect={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent == 'props' ? true : false} onSelect={()=>handleClick('props')}>Props</TabButton>
            <TabButton isSelected={tabContent == 'state' ? true : false} onSelect={()=>handleClick('state')}>State</TabButton>
          </menu>
        </section>
        {content}
      </main>
    </div>
  );
}

export default App;
