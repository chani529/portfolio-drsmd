import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "@route/Routes";

import "@styles/global.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
  // return (

  // <BrowserRouter>
  //   <Routes>
  {
    /* case1. MainPage Component가 DefaultLayout Cmoponent의 <Outlet/>로 삽입된다.(children값은 undefined) */
  }
  {
    /* <Route element={<DefaultLayout />}>
          <Route index element={<MainPage />} />
        </Route> */
  }
  {
    /* case2. MainPage Component가 DefaultLayout Componet의 children으로 삽입된다.*/
  }
  {
    /* <Route
          path="/test"
          element={
            <DefaultLayout>
              <TestPage />
            </DefaultLayout>
          }
        /> */
  }
  {
    /* </Routes>
    </BrowserRouter> */
  }
  // );
};

export default App;
