import "./DevNav.scss";
import logo from "../../assets/unbounceLogo.svg";
import { Link } from "react-router-dom";

function DevNav() {
    return (
        <nav className="devNav">
            <div className="devNav--top">
                <Link to="/dev">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <form className="devNav__search-wrap">
                    <label>
                        <input className="devNav__search" type="text" placeholder="SEARCH" />
                    </label>
                </form>
                <Link className="devNav__self" to="/dev/1">
                    <div className="devNav__self--avatar"></div>
                    <p className="devNav__self--name">Jake Sengya</p>
                </Link>
            </div>
            <div className="devNav--bottom">
                <div className="devNav__team">
                    <p className="devNav__team-name">TEAM 2A</p>
                    <div className="devNav__member"></div>
                    <div className="devNav__member"></div>
                    <div className="devNav__member">+3</div>
                </div>
                <div className="devNav__stat">
                    <span>17</span>
                    <p>
                        TASKS TO BE COMPLETED
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default DevNav;