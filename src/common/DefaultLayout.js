import Header from "@/common/NavigationMenu";
import Footer from "@/common/Footer";
import TopHeader from "@/common/TopHeader";


function DefaultLayput({ children }) {
    return (
        <div className="">
            <TopHeader/>
            <Header />
            <main className="container">
                <div className="">{children}</div>
            </main>
            <Footer/>  
        </div>
    );
}

export default DefaultLayput;
