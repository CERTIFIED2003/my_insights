import Hand from "../../assets/hand.svg"
import Send from "../../assets/send.svg"

export default function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Shubham Lal
            <img src={Hand} className="home__hand" alt="" />
        </h1>
        <h3 className="home__subtitle">Tech Enthusiast</h3>
        <p className="home__description">
            A passionate teen developer from India who strictly keeps a record of every moment he spends.
        </p>

        <a href="#contact" className="button button--flex">
            Say Namaste
            <img src={Send} height={24} width={24} className="button__icon" alt="" />
        </a>
    </div>
  )
}
