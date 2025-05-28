const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="section-inner">
        <h2>What We Offer</h2>

        <ul className="service-list">
          <li>
            <span className="service-title">AI Syllabus Generator</span>
            <span>Create a 14-week syllabus in under 60 seconds.</span>
          </li>
          <li>
            <span className="service-title">Outcome Alignment</span>
            <span>
              Map every activity and assessment to Bloom’s taxonomy levels.
            </span>
          </li>
          <li>
            <span className="service-title">Collaboration Mode</span>
            <span>
              Invite teaching assistants to comment and suggest edits in
              real-time.
            </span>
          </li>
          <li>
            <span className="service-title">Analytics Dashboard</span>
            <span>
              Track time-on-topic, assessment balance and workload distribution.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
