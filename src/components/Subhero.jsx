import './subhero.scss'

const logos = [
    {
        id: 1,
        name: 'Jiggle',
        img: './images/JiggleLogo.svg',
    },
    {
        id: 2,
        name: 'Symtric',
        img: './images/SymtricLogo.svg',
    },
    {
        id: 3,
        name: 'Wishelp',
        img: './images/WishelpLogo.svg',
    },
    {
        id: 4,
        name: 'resecurb',
        img: './images/resecurbLogo.svg',
    },
    {
        id: 5,
        name: 'Welytics',
        img: './images/WelyticsLogo.svg',
    },
];

export default function Subhero() {
    return (
        <div className="container subheroSection">
            <p>Join 4,000+ companies already growing</p>
            <div className="subheroLogos">
                {logos.map(obj => (
                    <img src={obj.img} alt={obj.name} key={obj.id} />
                ))}
            </div>
        </div>
    )
}