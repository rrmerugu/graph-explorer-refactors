import React from "react";
import "./top.scss";
import {faSearch, faBookmark, faStar, faBook} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import QueryInputForm from "../form/query-forms";
import {VERSION} from "../../../config";

export default class MainTopNav extends React.Component {

    render() {
        return (
            <div className={"mainTopNav"}>
                <div className="left-side">
                    <a href="/" className={"logo"}><h1>Graph Explorer <small>{VERSION}</small></h1></a>
                </div>
                <div className="right-side">
                    <ul>

                        <li>
                            <QueryInputForm onQuerySubmit={this.props.onQuerySubmit}/>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faBook}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

