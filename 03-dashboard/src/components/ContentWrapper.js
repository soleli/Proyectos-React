import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import TopBar from "./TopBar";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop/>
                <Footer/>
            </div>
        </div>
    )
}
export default ContentWrapper;