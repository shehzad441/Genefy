export default function StepCard({ stepNumber, title, points, imgSrc, isReversed }) {
    return (
      <div className={`step-card flex items-center gap-10 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
        <img src={imgSrc} alt={title} className="step-img" />
        <div className="step-info">
          <div className="step-number">#{stepNumber}</div>
          <h2 className="step-title">{title}</h2>
          <ul className="step-points">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }