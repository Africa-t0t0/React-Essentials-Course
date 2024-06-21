import { useState } from 'react'

import { TabButton } from '../TabButton/TabButton.jsx';
import { EXAMPLES } from '../../data.js';

export function Examples() {
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
    );
}