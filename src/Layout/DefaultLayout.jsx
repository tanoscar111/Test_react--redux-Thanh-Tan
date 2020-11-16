import React from 'react';
import { Route } from 'react-router-dom';
import Home from "../Component/Home"


function DefaultLayout({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(routerProps) => (
        <>
          <div >

            <Component {...routerProps} />
          </div>

        </>
      )}
    />
  );
}

export default DefaultLayout;