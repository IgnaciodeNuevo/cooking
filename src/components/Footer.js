import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="foo" role="contentinfo">
            <span className="u-nowrap">You can see my&nbsp;</span>
            <Link className="foo__link" to={`https://ignaciodenuevo.com/`} target="_blank" rel="noopener noreferrer">
                Website
            </Link>
            <span className="u-nowrap">&nbsp;or follow me on&nbsp;</span>
            <Link className="foo__link" to={`https://github.com/IgnaciodeNuevo`} target="_blank" rel="noopener noreferrer">
                GitHub
            </Link>
            <span className="u-nowrap">&nbsp;or&nbsp;</span>
            <Link className="foo__link" to={`https://twitter.com/IgnaciodeNuevo`} target="_blank" rel="noopener noreferrer">
                Twitter
            </Link>
        </footer>
    )
}

export default Footer;
