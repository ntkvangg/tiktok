import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import NavigationMenu from "@/common/NavigationMenu";
import TopHeader from "@/common/TopHeader";

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <TopHeader/>
            <NavigationMenu/>    
        </>
        
    );
}

export default Header;
