import React from "react"
import Collapsible from "react-collapsible"
import { Link } from "react-router-dom"


const DownLoadList = async () => {
    const resp = await fetch(
        "https://dog.ceo/api/breeds/list/all"
    ).catch(_ => null).then(e => e.json())
    if (resp != null && resp["status"] != undefined && resp["status"] === "success")
        return resp["message"]
    else return {}
}

function CollpaseList(props) {
    return (
        <li>
            <Collapsible 
                trigger={<>
                    {props.KeyName}
                    <svg height="800px" width="800px" version="1.1" id="Layer_1" 
                        viewBox="0 0 330 330">
                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                        c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                        s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                    </svg>
                </>}
            >
                <ul>
                {
                    props.Data.map(
                        item => {
                            return<li><Link to={"/search?name=" + item}>{item}</Link></li>
                        }
                            
                    )
                }
                </ul>
            </Collapsible>
        </li>
    )
}

function HomeScreen() {
    const [DogsList, setDogsList] = React.useState({})

    React.useEffect(
        () => {
            DownLoadList().then(
                resp => setDogsList(resp)
            )
        },
        []
    )

    return (
        <div className="HomeScreen_wrapper">
            <a>Lista ras</a>
            <ul>
                {
                    Object.keys(DogsList).map(
                        item => {
                            if (DogsList[item].length === 0)
                                return<li><Link to={"/search?name=" + item}>{item}</Link></li>
                            else return <CollpaseList KeyName={item} Data={DogsList[item]}/>
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default HomeScreen;