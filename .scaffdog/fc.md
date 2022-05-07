---
name: 'fc'
root: '.'
output: '**/*'
ignore: []
questions:
  value: 'Please enter Component Name.'
---

# `{{ inputs.value }}.tsx`

```markdown
import React from 'react';

type Props = { key: string; }

const {{ inputs.value }}: React.FC<Props> = (props) => {
  const { key } = props;

  return (
    <>
      <div>{ key }</div>
    </>
  );
};

export default {{ inputs.value }};

```