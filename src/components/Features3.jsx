import './features3.scss'
import SectionTitle from './SectionTitle';
import Button from './Button';

export default function Features3() {
    return (
        <div className='container features3'>
            <img className="features3BigImg" src="./images/imageHandbook.png" alt="handbook" />
            <div>
                <SectionTitle
                    pill='FEATURES'
                    title='Gain more insight into how people use your'
                    subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'

                    pillClass="pill"
                    titleClass='sectionTitle'
                    subtitleClass='sectionSubtitle'
                />
                <Button name='Get Started' className="heroBtn" />
            </div>
        </div>
    )
}