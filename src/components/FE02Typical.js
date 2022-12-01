import './FE02Typical.scss'
import {useState} from "react";
import {FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";
import FE02TypicalChild from "./FE02TypicalChild";

const FE02Typical = () => {
    const [list, setList] = useState([
        {
            id: "fe02-1",
            image: "https://stunited.vn/wp-content/uploads/2019/09/Capture.png"
            ,
            teamCaption: "eHealth",
            teamDesigner: "#ASP.NET #Android #iOS",
            teamCaptionHide: "A health data management application for " +
                "the personal healthcare in coordination with employers, pharmacies and medical examination providers."
        },
        {
            id: "fe02-2", image: "https://stunited.vn/wp-content/uploads/2019/09/image-logo-1.png"
            , teamCaption: "Havuta", teamDesigner: "#Javascript #HTML #CSS",
            teamCaptionHide: "\n" +
                "                            Havuta brings smartphone and blockchain-based solutions to the data collection challenges facing the development sector. Creating a blockchain-based feedback loop benefiting NGOs, engaging their beneficiaries, and promoting transparency. "
        },
        {
            id: "fe02-3", image: "https://stunited.vn/wp-content/uploads/2019/09/figure01.jpg"
            , teamCaption: "E-ASPRO", teamDesigner: "#Javascript #HTML #CSS",
            teamCaptionHide: "E-ASPRO is a cloudtype fulfillment mail order solution that enables you to efficiently manage mail order operations such as site management," +
                " orders, shipping, inventory, and shipping inquiries from one system"
        },
        {
            id: "fe02-4",
            image: "https://stunited.vn/wp-content/uploads/2019/09/2e-jycg6_400x400.jpg"
            ,
            teamCaption: "Vision Express",
            teamDesigner: "#Chatbot #Javascript #HTML #CSS",
            teamCaptionHide: "Chatbot to communicate with users, reply questions automatically."
        },
    ])
    // const [titleList, setTileList] = useState([
    //     { id: "fe-02_Title-1",title:"Typical successful stories",titleSection:"", },
    //     { id: "fe-02_Title-2",title:"Typical successful stories",titleSection:"", },
    //
    // ])
    return (
        <>
            <div className="fe02-container">
                <div className="fe02-container__wpb">
                    <div className="fe02-container__wpb__inner">
                        <div className="fe02-wpb__wrapper">
                            <div className="fe02-textcenter">
                                <h2>
                                    Typical successful stories
                                </h2>
                                <h3>
                                    From ideas turned into carefully crafted pixels and problems crafted into solutions.
                                </h3>
                            </div>
                            <div className="fe02-emptyspace"></div>
                            <FE02TypicalChild
                                listContainer={list}
                                SetListContainer={setList}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FE02Typical