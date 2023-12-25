import React from 'react';
import { observer } from 'mobx-react';
import appStore from '../store/appstore';
import { Field } from "../src/components/field/field";

const HomePage = observer(() => {

    return (
          <div>
            <button onClick={appStore.changeState}>Change state</button>
              <Field />
        </div>
    );
});


export default HomePage;