import SectionTitle from "./SectionTitle";
import gainCards from "./data/gainCards";
import './howItWorks.scss'

export default function HowItWorks() {
    return (
        <div className="container howItWorks">
            <div className="titleSection">
                <div className="section">
                    <SectionTitle
                        pill='FEATURES'
                        title='Gain more insight into how people use your'
                        subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'

                        pillClass="pill"
                        titleClass='sectionTitle'
                        subtitleClass='sectionSubtitle' />
                </div>
                <img className="img" src="./images/femaleAtDesk.png" alt="female at desk" />
            </div>
            <div className="listSection">
                {gainCards.map(obj => (
                    <div key={obj.id} className="card">
                        <div className="id">{obj.id}</div>
                        <h3>{obj.title}</h3>
                        <p>{obj.descr}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}