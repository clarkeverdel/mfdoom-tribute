// Resources
import Styles from './AllCaps.module.scss'

// Components
import BlinkingMask from '../../src/components/BlinkingMask/BlinkingMask'

const AllCaps = () => {
    return (
        <section className={`section ${Styles.section}`}>
            <div className={`section__inner ${Styles.section}`}>
                <h2 className="section__title--tilted"><div>All Caps.</div></h2>
                <BlinkingMask />
            </div>
        </section>
    )
}

export default AllCaps