import deepImg from '../../images/desktop/image-deep-earth.jpg';
import nightImg from '../../images/desktop/image-night-arcade.jpg';
import socImg from '../../images/desktop/image-soccer-team.jpg';
import gridImg from '../../images/desktop/image-grid.jpg';
import aboveImg from '../../images/desktop/image-from-above.jpg';
import pocketImg from '../../images/desktop/image-pocket-borealis.jpg';
import curImg from '../../images/desktop/image-curiosity.jpg';
import fishImg from '../../images/desktop/image-fisheye.jpg';

const CardsDesktop = () => {

    return (
        <section className="cards-desktop">
            <div className="title">
                <h2>Our creations</h2>
                <div className="btn-container">
                    <button className="btn">See All</button>
                </div>
            </div>
            <section>
                <img src={deepImg} alt="" />
                <h3>{'Deep Earth'}</h3>

                <img src={nightImg} alt="" />
                <h3>{'Night Arcade'}</h3>

                <img src={socImg} alt="" />
                <h3>{'Soccer Team VR'}</h3>

                <img src={gridImg} alt="" />
                <h3>{'The Grid'}</h3>

                <img src={aboveImg} alt="" />
                <h3>{'From Up Above VR'}</h3>

                <img src={pocketImg} alt="" />
                <h3>{'Pocket borealis'}</h3>

                <img src={curImg} alt="" />
                <h3>{'The Curiosity'}</h3>

                <img src={fishImg} alt="" />
                <h3>{'Make It Fisheye'}</h3>
            </section>
        </section>
    )
}

export default CardsDesktop