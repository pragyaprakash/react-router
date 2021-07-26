import React from "react";
import "../css/App.css"
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
export default function Projects() {
  let match = useRouteMatch();
  return (<div>
    <div className="message-header">
      <p>Welcome to the projects page</p>
    </div>

    <ul>
      <li>
        <Link to={`${match.url}/420`}>INM 420</Link>
      </li>
      <li>
        <Link to={`${match.url}/410`}>
        INM 410
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/450`}>
        INM 450
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/430`}>
        INM 430
        </Link>
      </li>
    </ul>

    <Switch>
      <Route path={`${match.path}/:topicId`}>
        <Project />
      </Route>
      <Route path={match.path}>
        <h3>Please select a project.</h3>
      </Route>
    </Switch>
  </div>);
}

function Project() {
  let { topicId } = useParams();
  return <h3>Requested project ID: {topicId}</h3>;
}