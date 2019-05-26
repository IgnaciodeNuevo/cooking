import React from "react";

function Footer() {
    return (
        <footer className="foo" role="contentinfo">
            <span className="u-nowrap">You can see my&nbsp;</span>
            <a className="foo__link" href="https://ignaciodenuevo.com/" target="_blank" rel="noopener noreferrer">
                Website
            </a>
            <span className="u-nowrap">&nbsp;or follow me on&nbsp;</span>
            <a className="foo__link" href="https://github.com/IgnaciodeNuevo" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            <span className="u-nowrap">&nbsp;or&nbsp;</span>
            <a className="foo__link" href="https://twitter.com/IgnaciodeNuevo" target="_blank" rel="noopener noreferrer">
                Twitter
            </a>
        </footer>
    )
}

export default Footer;
