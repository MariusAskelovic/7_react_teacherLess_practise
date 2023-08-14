import { Fragment } from "react"

export default function SectionTitle(props) {
    return (
        <Fragment>
            <p className={props.pillClass}>{props.pill}</p>
            <h2 className={props.titleClass}>{props.title}</h2>
            <h4 className={props.subtitleClass}>{props.subtitle}</h4>
        </Fragment>
    )
}