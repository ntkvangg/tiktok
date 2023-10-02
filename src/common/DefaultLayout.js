import Header from "@/common/NavigationMenu";
import Footer from "@/common/Footer";


function DefaultLayput({ children }) {
    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="">{children}</div>
            </div>
            <Footer/>  
        </div>
    );
}

export default DefaultLayput;
