import { h, FunctionComponent, render } from 'preact';
import React from 'react';
import { Checkbox } from 'reakit';

const CustomCheckbox: FunctionComponent<{ foo: boolean }> = ({ foo }) => {
  return <div>Custom checkbox</div>;
};

const ReactCustomCheckbox: React.FC<{ foo: boolean }> = ({ foo }) => {
  return <div>React Custom checkbox</div>;
};

const App: FunctionComponent = () => {
  return (
    <div>
      {/* Type error! */}
      <Checkbox as={CustomCheckbox} foo={false} />

      {/* Type checks just fine */}
      <Checkbox as={ReactCustomCheckbox} foo={false} />
    </div>
  );
};

render(<App />, document.getElementById('app')!);
