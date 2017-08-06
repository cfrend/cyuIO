import React from 'react';
import { render } from "react-dom";
import

import { Header } from "./components/Header";
import { Product } from "./components/Product";
import { Order } from "./components/Order";
import { QA } from "./components/QA";
import { IP } from "./components/IP";
import { Footer } from "./components/Footer";

class App extends React.Component {
      render() {
                  return (
                        <div>
                              <Header />
                              <Product />
                              <Order />
                              <QA />
                              <IP />
                              <Footer />
                        </div>
                  );
      }
}
render(<App />, document.getElementById("app"));
