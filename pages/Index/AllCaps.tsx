// Resources
import Styles from './AllCaps.module.scss'

// Components
import BlinkingMask from '../../src/components/BlinkingMask/BlinkingMask'

const AllCaps = () => {
    return (
        <section className={`section ${Styles.section}`}>
            <div className={`section__inner ${Styles.section}`}>
                <img src="/static/img/all_caps.svg" className="section__title--tilted" />
                <BlinkingMask />
            </div>
        </section>
    )
}

export default AllCaps
