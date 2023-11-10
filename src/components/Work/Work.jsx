import React from 'react'
import { Container } from 'react-bootstrap'
import './Work.css'
import Veebeckz from '../../img/veebekz.png'
// import Devvloop from '../../img/Devloop.png'

const Work = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6">
          <div className="fantastic">
            <h1 className="">
              Work for All these <br /> <span>Brands & Clients</span>
            </h1>
            <p>
              There are numerous brands among my clients. There are big ones,
              little ones, and some you haven't heard of yet. I like to keep my
              work as diverse as I can by not sticking to one field. It keeps me
              sharp and encourages me to try new things, which will enable you
              and your team to see the forest for the trees. That's undoubtedly
              the reason why my clients come back to me year after year.
            </p>
            <button type="button">Hire ME</button>
          </div>
        </div>

        <div className="col-md-6">
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-2circle">
                        <img src={Veebeckz} alt="VeebeckzLogo" />
                    </div>

                    <div className="w-2circle">
                        <img src={Veebeckz} alt="VeebeckzLogo" />
                    </div>

                    <div className="w-2circle">
                        <img src={Veebeckz} alt="VeebeckzLogo" />
                    </div>

                    <div className="w-2circle">
                        <img src={Veebeckz} alt="VeebeckzLogo" />
                    </div>

                    <div className="w-2circle">
                        <img src={Veebeckz} alt="VeebeckzLogo" />
                    </div>
                    <div className="w-bgCircle blueCircle"></div>
                    <div className="w-bgCircle voiletCircle"></div>
                </div>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default Work