import Sidebar from "@/components/Layout/Sidebar";
import Header from '@/components/Layout/Header'

function DefaultLayput({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayput;
