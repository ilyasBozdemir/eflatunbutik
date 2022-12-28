import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "./store/selectors";
import React, { Suspense } from "react";

import LazyComponentsSkeleton from "./components/LazyComponentsSkeleton";
import { MainContext } from "./contexts/MainContext";

const Router = React.lazy(() => import("./Router"));

function App() {
  let baslik = document.title;
  window.onblur = () => (document.title = "Alışverişe devam et");
  window.onfocus = () => (document.title = baslik);

  const [tags, setTags] = React.useState(['arası ürün']);
  const [basket, setBasket] = React.useState([]);

  const data = {
    tags,
    setTags,
    basket,
    setBasket,
  };

  return (
    <Suspense fallback={<LazyComponentsSkeleton />}>
      <MainContext.Provider value={data}>
        <Router />
      </MainContext.Provider>
    </Suspense>
  );
}

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
