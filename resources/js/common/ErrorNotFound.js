import Layout from '../layouts/Layout'
import notfound from '../../assets/images/notfound.svg'
import {Link} from "react-router-dom";

export default function ErrorNotFound() {
  return (
    <Layout>
      <section className="section-content bg padding-y pt-0">
        <div className="container">
          <div className="row" style={{ padding: '10rem 0px' }}>
            <div className="col-md-6 align-self-center">
              <img src={notfound} alt="" />
            </div>
            <div className="col-md-6 align-self-center">
              <h1>404</h1>
              <h2>UH OH! You're lost.</h2>
              <p>
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <Link to="/" className="btn btn-secondary">GO BACK HOME</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
