import * as React from "react";
import Layout from "../components/Layout";

const InstagramPage = () => (
  <Layout>
    <div className="container">
        <div className="blog-card">
            <div>
                <h1>Antonio Xoyoc Becerra Farias</h1>
            </div>
            <div>
                <p>Vivo en la costa michoacana pasionado Developer, Pilot Drone y Fotografo.</p>
                <div>
                    <a href="tel:7531004073"><button className="boton">753 100 40 73</button></a>
                    <a href="mailto:xoyoc_l2@hotmail.com"><button className="boton">xoyoc_l2@hotmail.com</button></a>
                </div>
            </div>
        </div>
    </div>
  </Layout>
);

export default InstagramPage;