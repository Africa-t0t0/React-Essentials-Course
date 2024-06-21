import { CORE_CONCEPTS } from '../../data.js';
import { CoreConcept } from '../CoreConcept/CoreConcept.jsx';

export function DynamicCoreConcept() {

    return (
        CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)
    );
}