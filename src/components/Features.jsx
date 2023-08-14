import { Fragment } from "react";
import SectionTitle from "./SectionTitle";
import './features.scss'
import gainCards from "./data/gainCards";



export default function Features() {
    return (
        <Fragment>
            <div className="featuresTitleSection">
                <SectionTitle
                    pill="FEATURES"
                    title="Gain more insight into how people use your"
                    subtitle="With out integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform"

                    pillClass="pill"
                    titleClass='sectionTitle'
                    subtitleClass='sectionSubtitle'
                />
            </div>
            <div className="gainCards">
                {gainCards.map(obj => (
                    <div className="gainCard" key={obj.id}>
                        <img src={obj.icon} alt={obj.title} className="gainCardIcon" />
                        <h3 className="gainCardTitle">{obj.title}</h3>
                        <p className="gainCardDesc">{obj.descr}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}