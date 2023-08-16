import SectionTitle from "./SectionTitle";
import gainCards from "./data/gainCards";

export default function HowItWorks() {
    return (
        <div className="howItWorks">
            <div className="howItWorksTitleSection">
                <SectionTitle
                    pill='FEATURES'
                    title='Gain more insight into how people use your'
                    subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'

                    pillClass="pill"
                    titleClass='sectionTitle'
                    subtitleClass='sectionSubtitle' />
                <img src="./images/femaleAtDesk.png" alt="female at desk" />
            </div>
            <div className="howItWorksListSection">
                {gainCards.map(obj => (
                    <div className="howItWorksCard">
                        <div className="howItWorksId">{obj.id}</div>
                        <h3>{obj.title}</h3>
                        <p>{obj.descr}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}