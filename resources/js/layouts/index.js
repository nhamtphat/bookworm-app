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
import "../../assets/sass/_variables-custom.scss";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
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
