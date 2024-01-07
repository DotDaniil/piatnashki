import React from "react";
import { observer } from "mobx-react";
import { Field } from "../src/components/field/field";

const HomePage = observer(() => {
  return (
    <div>
      <Field />
    </div>
  );
});

// eslint-disable-next-line import/no-default-export
export default HomePage;
