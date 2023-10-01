import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import styles from "@/components/Layout/DefaultLayout/DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Footer from "@/common/Footer";

const cx = classNames.bind(styles);

function DefaultLayput({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="container">
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer/>  
        </div>
    );
}

export default DefaultLayput;
