import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from './WithLayout';
// Available layouts
import {
  Main as MainLayout,
} from './layouts';

// Supporting pages
import {
  Customers as CustomersView,
} from './views/supportingPages';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path= { process.env.PUBLIC_URL + "/" }
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={CustomersView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
