import React from 'react';

import Markdown from '../components/Markdown';

const Clone: React.FC<{}> = () => {
    return (
<Markdown
    content={`
~~~ javascript
const cloned = ele.cloneNode(true);
~~~

Using the \`cloneNode(true)\` method will deep copy a given element. In the sample code above, all attributes and children of the original node \`ele\`
will be cloned in \`cloned\` as well.

Passing \`false\` produces a cloned node that keeps only the attributes and the original node:

~~~ javascript
const cloned = ele.cloneNode(false);
~~~
`}
/>
    );
};

export default Clone;
