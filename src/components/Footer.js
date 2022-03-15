import React, { Component } from "react";
import { Container, Form, Nav, Navbar, FormControl, Button } from "react-bootstrap";
import Logo from './logo.svg';
import Discord from './discord.svg';
import "../pages/Styles.css"

export default class Header extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="text-center py-1">ИСИТ 189, Гринько А.М, Башкирова Н.А., Пятанов К.А., Безручко М.О. © 2022 <a href="https://discord.gg/dGQKMpubRS"><img className="icon" src={Discord} /></a></div>
                </footer>
            </>
        )
    }
}