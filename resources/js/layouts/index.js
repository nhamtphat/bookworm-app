import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
// // Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Fonticons
import "../../assets/fonts/fontawesome/css/all.min.css";
import "../../assets/fonts/feathericons/css/iconfont.css";
import "../../assets/fonts/material-icons/css/materialdesignicons.css";
// Custom style
import "../../assets/sass/ui.scss";
import "../../assets/sass/responsive.scss";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout;
