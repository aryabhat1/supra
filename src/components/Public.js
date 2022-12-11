import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>
                    Welcome to <span className="nowrap">Supra Infosystem</span>
                </h1>
            </header>
            <main className="public__main">
                <p>
                    Located in Beautiful City of Gardens, we provide a trained
                    staff ready to meet your tech repair needs. We are known for
                    quality service, timely delivery and satisfied customer!
                </p>
                <address className="public__addr">
                    Supra Infosystem
                    <br />
                    555, Sutapa Road
                    <br />
                    Bangalore, Karnataka 5600 02, India
                    <br />
                    <a href="tel:+91">(080) 40123687</a>
                    <a href="tel:+91">(080) 77765423</a>
                </address>
                <br />
                <p>Owner: G. Manjunath</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    );
    return content;
};

export default Public;

//done
