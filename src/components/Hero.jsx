import { Fragment, useState } from 'react'
import Button from './Button'
import SectionTitle from './SectionTitle'
import './hero.scss'

export default function Hero() {
    const [emailInput, setEmailInput] = useState('')

    function handleEmailInput(event) {
        setEmailInput(event.target.value)
    }

    function handleBtnClick() {
        console.log('emailas :', emailInput);
    }

    // KODEL EMAIL NEDARO VALIDACIJOS ????????

    return (
        <Fragment>
            {!hideStatus && (<div className="container heroSectionBg {props.hide}">
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
                            <input
                                value={emailInput}
                                onChange={handleEmailInput}
                                type='email'
                                name="email"
                                id="heroEmail"
                                placeholder='Enter your work email'
                                className='heroEmail'
                            />
                            <Button
                                name='Get early access'
                                className="heroBtn"
                                onClick={validateEmail}
                            />
                        </div>
                        <p className='heroBonusInfo'>Start your free 14-day trial today, no credit card required.</p>
                    </div>
                </div>
            </div>)}
        </Fragment>
    )
}