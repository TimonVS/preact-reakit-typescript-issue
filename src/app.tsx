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
      {/* Type error! Fixed after running `npm run patch-package`, which patches `PropsWithAs` in `reakit-utils`. */}
      <Checkbox as={CustomCheckbox} foo={false} />

      {/* Type checks just fine. Is it okay to use `React.FC` in a Preact app? */}
      <Checkbox as={ReactCustomCheckbox} foo={false} />
    </div>
  );
};

render(<App />, document.getElementById('app')!);
