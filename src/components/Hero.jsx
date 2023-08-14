import Button from './Button'
import './hero.scss'

export default function Hero(props) {
    return (
        <div className="container heroSectionBg">
            <div className='heroSection'>
                {/* <p>{props.pill}</p> */}
                <p className='pill'>HEADER</p>
                {/* <h2>{props.title}</h2> */}
                <h2 className='heroTitle'>A small business is only as good as its tools.</h2>
                {/* <h4>{props.subtitle}</h4> */}
                <h4 className='heroSubtitle'>We&apos;re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</h4>
                <div className='heroInputBtnSection'>
                    <input type="email" name="email" id="heroEmail" placeholder='Enter your work email' className='heroEmail' />
                    <Button name='Get early access' />
                </div>
            </div>
        </div>
    )
}