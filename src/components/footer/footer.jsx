import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faPinterest } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer class="d-flex justify-content-start navbar ml-auto fixed-bottom bg-light">
            <FontAwesomeIcon icon={faFacebook} className="ml-2"/>
            <FontAwesomeIcon icon={faPinterest} className="ml-2"/>
        </footer>
    )
}