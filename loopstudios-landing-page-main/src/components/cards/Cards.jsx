import './Cards.css';

import deepImg from '../../images/mobile/image-deep-earth.jpg';
import nightImg from '../../images/mobile/image-night-arcade.jpg';
import socImg from '../../images/mobile/image-soccer-team.jpg';
import gridImg from '../../images/mobile/image-grid.jpg';
import aboveImg from '../../images/mobile/image-from-above.jpg';
import pocketImg from '../../images/mobile/image-pocket-borealis.jpg';
import curImg from '../../images/mobile/image-curiosity.jpg';
import fishImg from '../../images/mobile/image-fisheye.jpg';

const Cards = () => {

    return (
        <section className="cards-mobile">
            <h2>Our creations</h2>
            <article>
                <img src={deepImg} alt="" />
                <h3>{'Deep Earth'}</h3>
            </article>
            <article>
                <img src={nightImg} alt="" />
                <h3>{'Night Arcade'}</h3>
            </article>
            <article>
                <img src={socImg} alt="" />
                <h3>{'Soccer Team VR'}</h3>
            </article>
            <article>
                <img src={gridImg} alt="" />
                <h3>{'The Grid'}</h3>
            </article>
            <article>
                <img src={aboveImg} alt="" />
                <h3>{'From Up Above VR'}</h3>
            </article>
            <article>
                <img src={pocketImg} alt="" />
                <h3>{'Pocket borealis'}</h3>
            </article>
            <article>
                <img src={curImg} alt="" />
                <h3>{'The Curiosity'}</h3>
            </article>
            <article>
                <img src={fishImg} alt="" />
                <h3>{'Make It Fisheye'}</h3>
            </article>
            <div className="btn-container">
                <button className="btn">See All</button>
            </div>
        </section>
    )
}

export default Cards