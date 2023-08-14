import Button from './Button'
import SectionTitle from './SectionTitle'
import './hero.scss'

export default function Hero() {
    return (
        <div className="container heroSectionBg">
            <div className='heroSection'>
                <SectionTitle
                    pill='HEADER'
                    title='A small business is only as good as its tools.'
                    subtitle='We&apos;re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.'

                    pillClass='pill'
                    titleClass='heroTitle'
                    subtitleClass='heroSubtitle'
                />

                <div className='heroBottom'>
                    <div className='heroInputBtnSection'>
                        <input type="email" name="email" id="heroEmail" placeholder='Enter your work email' className='heroEmail' />
                        <Button name='Get early access' className="heroBtn" />
                    </div>
                    <p className='heroBonusInfo'>Start your free 14-day trial today, no credit card required.</p>
                </div>
            </div>
        </div>
    )
}