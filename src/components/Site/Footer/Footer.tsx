// Components
import Banner from '../../Banner/Banner'
import Marquee from '../../Marquee/Marquee'

// Resources
// import BubBlackLogo from '../../../static/img/logo/bubblack.svg'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__top">
                    <div className="footer__dates">
                        <time dateTime="1971-07-13">July 13, 1971</time>
                        <div><span className="horizontal-line-spacer"></span></div>
                        <time dateTime="2020-10-31">October 31, 2020</time>
                    </div>
                    <div className="">
                        MF DOOM FOREVER
                    </div>
                </div>

                <div className="footer__middle">
                    <Marquee>
                        <h2>A villain in your land, in his land a ruler.</h2>
                    </Marquee>
                </div>

                <div className="footer__bottom">
                    <div></div>
                    <div>
                        <Banner type="circle">
                            {/* <BubBlackLogo /> */}
                            <img src="/static/img/logo/bubblack.svg" />
                        </Banner>
                    </div>
                    <div className="footer__copyright">
                        <span>Photography: @Kmeron</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
