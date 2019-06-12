import React from 'react';

import Aux from '../../hoc/Auxilery';

const layout = (props) => (
  <Aux>
    <main>
      {props.children}
    </main>
  </Aux>
)

export default layout;