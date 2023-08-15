import Counter from "./Counter";
import SectionTitle from "./SectionTitle";
import './numbers.scss'

export default function Numbers() {
    return (
        <div className="container numbers">
            <SectionTitle
                pill='NUMBERS'
                title='We believe in the power of data'
                subtitle=' Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.'

                pillClass="pill"
                titleClass='sectionTitle'
                subtitleClass='sectionSubtitle'
            />
            <div className="numbersCounter">
                <Counter title='Projects completed' value='235.000' />
                <Counter title='APR' value='$10m' />
                <Counter title='Hours Saved Annually' value='+50.000' />
                <Counter title='Unique Users' value='3.500' />
            </div>
        </div>
    )
}