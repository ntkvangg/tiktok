import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import logo from '@/assets/images/logo.png'

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx('logo')}>
                    <img src={logo} alt="Ticktok"/>
                </div>  
                <div>profile</div>
            </div>
        </header>
    );
}

export default Header;
