import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import API from "./API"
import Detail from "./Detail"

// export default () => {
//     return <div></div>
// }

const Index = () => {

        const { url } = useRouteMatch();
    return (
      <Switch>
        <Route path={`${url}/detail/:id`} component={Detail} />
        <Route path={url} component={API} />
      </Switch>
    );
        
}

export default Index