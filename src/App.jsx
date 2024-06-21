import { useState } from 'react'

import { Header } from './components/Header/Header.jsx';
import { DynamicCoreConcept } from './components/DynamicCoreConcept/DynamicCoreConcept.jsx';

import TabButton from './components/TabButton/TabButton.jsx';
import { EXAMPLES } from './data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const tabButtons = ["components", "jsx", "props", "state"]

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const formatTitleTab = (tabName) => {
    if (!tabName) return tabName;
    return tabName.charAt(0).toUpperCase() + tabName.slice(1);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Key should be unique for each item */}
            <DynamicCoreConcept />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {tabButtons.map(tabConcept =>
              <TabButton
                key={tabConcept}
                isSelected={selectedTopic === tabConcept}
                onSelect={() => handleSelect(tabConcept)}
              > {formatTitleTab(tabConcept)} </TabButton>
            )}
          </menu>
            {!selectedTopic && <p>Please select a topic!!!</p>}
            {selectedTopic && (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}
        </section>
      </main>
    </div>
  );
}

export default App;
