import { useState } from 'react'

import { TabButton } from '../TabButton/TabButton.jsx';
import { EXAMPLES } from '../../data.js';
import Section from '../Section.jsx';
import Tabs from '../Tabs.jsx';

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

    let tabContent =  <p>Please select a topic!!!</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                    <>
                        {tabButtons.map(tabConcept =>
                        <TabButton
                            key={tabConcept}
                            isSelected={selectedTopic === tabConcept}
                            onClick={() => handleSelect(tabConcept)}
                        > {formatTitleTab(tabConcept)} </TabButton>
                        )}
                    </>
                }>
            {tabContent}
            </Tabs>
        </Section>
    );
}