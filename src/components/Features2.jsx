
import SectionTitle from "./SectionTitle";
import './features2.scss'

export default function Features2() {
    return (
        <div className="container">
            <SectionTitle
                pill='FEATURES'
                title='Gain more insight into how people use your'
                subtitle='With out integrated CRM, project managemenet, collaboration and invoicing capabilities,${}
                you can manage every aspect of your business in one secure platform'

                pillClass="pill"
                titleClass='sectionTitle'
                subtitleClass='sectionSubtitle'
            />
            <div className="container features2Details">
                <div className="features2Grid">
                    <div className="features2OneCard">
                        <img src="./images/iconEnvelope.png" alt="envelope" />
                        <div className="features2OneCardText">
                            <h3 className="features2CardTitle">Measure your performance</h3>
                            <p className="features2CardParagraph">Stay connected with your team and make quick decisions wherever you are.</p>
                        </div>
                    </div>
                    <div className="features2OneCard">
                        <img src="./images/iconEdit.png" alt="edit" />
                        <div className="features2OneCardText">
                            <h3 className="features2CardTitle">Build your website</h3>
                            <p className="features2CardParagraph">A tool that lets you build a dream website even if you know nothing about web design or programming.</p>
                        </div>
                    </div>
                    <div className="features2OneCard">
                        <img src="./images/iconGrid.png" alt="grid" />
                        <div className="features2OneCardText">
                            <h3 className="features2CardTitle">Connect multiple apps</h3>
                            <p className="features2CardParagraph">The first business platform to bring together all of your products from one place.</p>
                        </div>
                    </div>
                </div>
                <img className="features2BigImg" src="./images/imageHandbook.png" alt="handbook" />
            </div>
        </div>
    )
}