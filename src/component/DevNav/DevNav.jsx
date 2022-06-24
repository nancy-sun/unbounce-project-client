import "./DevNav.scss";
import logo from "../../assets/unbounce-icon.svg";

function DevNav() {
    return (
        <nav className="devNav">
            <img className="logo" src={logo} alt="logo" />
            <form className="devNav__search-wrap">
                {/* <p className="devNav__search-label">search</p> */}
                <label>
                    <input className="devNav__search" type="text" placeholder="Search" />
                </label>
            </form>
            <div className="devNav__team">
                <div className="devNav__member"></div>
                <div className="devNav__member"></div>
                <div className="devNav__member"></div>
                <div className="devNav__member">+3</div>
            </div>
            <div className="devNav__stat">
                stat
            </div>
            <div className="devNav__self">
                <div className="devNav__self--avatar"></div>
                <p className="devNav__self--name">Employee Name</p>
            </div>
        </nav>
    )
}

export default DevNav;