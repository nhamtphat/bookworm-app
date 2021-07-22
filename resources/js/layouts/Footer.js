import React from 'react';
import icon from '../../assets/images/bookworm_icon.svg'

export default function Footer() {
    return (
        <footer className="section-footer border-top">
            <div className="container">
                <section className="footer-top padding-y">
                    <div className="row">
                        <aside className="col-md-4">
                            <article className="mr-3 float-left">
                                <img src={icon} className="logo-footer" />
                            </article>
                            <div className="d-inline float-left ml-3">
                                <div className="font-weight-bold">BOOKWORM</div>
                                Address: Nowhere
                                <br />Phone: 0949-611-347
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        </footer>
    );
}