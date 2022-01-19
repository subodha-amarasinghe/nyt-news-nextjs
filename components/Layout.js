import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import Footerblock from "./FooterBlock";
const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div>

                {children}

            </div>
            <Footerblock />
        </>
    )
}

export default Layout;