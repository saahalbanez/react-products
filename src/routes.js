import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Detail from './pages/Detail';
import List from './pages/List';
import Exclusive from './pages/Exclusive';
import Promotion from './pages/Promotion';

function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={List}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/exclusive" component={Exclusive}/>
            <Route path="/promotion" component={Promotion}/>
        </Switch>
    );
}

export default Routes;