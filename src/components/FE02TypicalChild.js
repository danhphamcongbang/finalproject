import {FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";
import './FE02TypicalChild.scss'

const FE02TypicalChild = ({listContainer, SetListContainer}) => {
    return(
        <div className="fe02-wpb__col-container row">
            {listContainer && listContainer.map((item, index) => {
                return (
                    <>
                        <div className="fe02-wpb__col-context col-sm-3">
                            <div className="fe02-wpb__col-context__inner">
                                <div className="fe02-wpb__col-context__inner__context">
                                    <div className="fe02-wpb__col-context__inner__context__block">
                                        <a className="fe02-block"></a>
                                        <img src={item.image} alt="image"/>
                                        <div className="fe02-wpb__caption--before">
                                            <div className="fe02-wpb__caption__inner">
                                                <h4 className="fe02-wpb__caption__team--name">
                                                    <a href="#">
                                                        {
                                                            item.teamCaption
                                                        }
                                                    </a>
                                                </h4>
                                                <p className="fe02-wpb__caption__team-designation">
                                                    {
                                                        item.teamDesigner
                                                    }
                                                </p>
                                                <ul className="fe02-wpb__caption__team-social" style={{padding:"0 0"}}>
                                                    <li>
                                                        <a target="_blank" href="https://www.facebook.com/stunited.vn/" className="btn-facebook">
                                                            <FaFacebookSquare style={{borderRadius:"7px"}}/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link target="_blank" to="/" className="btn-FaLinkedin">
                                                            <FaLinkedin style={{borderRadius:"7px"}}/>
                                                        </Link>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="fe02-wpb__caption--after">
                                            <div className="fe02-wpb__caption__inner">
                                                <h4 className="fe02-wpb__caption__team--name">
                                                    <a href="#">
                                                        {
                                                            item.teamCaption
                                                        }
                                                    </a>
                                                </h4>
                                                <p className="fe02-wpb__caption__team-designation">
                                                    {
                                                        item.teamDesigner
                                                    }
                                                </p>
                                                <p className="fe02-wpb__caption__team-descriptions">
                                                    {
                                                        item.teamCaptionHide
                                                    }
                                                </p>
                                                <ul className="fe02-wpb__caption__team-social" style={{padding:"0 0"}}>
                                                    <li>
                                                        <a target="_blank" href="https://www.facebook.com/stunited.vn/" className="btn-facebook">
                                                            <FaFacebookSquare style={{borderRadius:"7px"}}/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link target="_blank" to="/" className="btn-FaLinkedin">
                                                            <FaLinkedin style={{borderRadius:"7px"}}/>
                                                        </Link>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
            }
        </div>
    )
}
export default FE02TypicalChild