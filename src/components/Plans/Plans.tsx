import './Plans.css'
import { plansData } from '../../data/planData';
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* Plans card */}
      <div className="plans">
        {plansData.map((plan) => (
          <div className="plan" key={plan.key}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits &rarr;</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans