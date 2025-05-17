export default function Features() {
    return (
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Intelli Edtech?</h2>
          
          <div className="features-grid">
            {/* Row 1 */}
            <div className="feature-card">
              <div className="icon-container">
                <img src="/images/ai-icon.svg" alt="AI" />
              </div>
              <h3>AI powered Learning</h3>
              <p>Get instant answers and explanations from Genify.</p>
            </div>
            
            <div className="feature-card white-card">
              <div className="icon-container">
                <img src="/images/study-icon.svg" alt="Study" />
              </div>
              <h3>Smart Study Materials</h3>
              <p>Access well-structured study notes & flashcards for quick revision.</p>
            </div>
            
            <div className="feature-card">
              <div className="icon-container">
                <img src="/images/personalized-icon.svg" alt="Personalized" />
              </div>
              <h3>Personalized Learning</h3>
              <p>Customized study plans and recommendations based on progress.</p>
            </div>
            
            {/* Row 2 */}
            <div className="feature-card white-card">
              <div className="icon-container">
                <img src="/images/question-icon.svg" alt="Questions" />
              </div>
              <h3>Question Hub & Practice Tests</h3>
              <p>Solve a variety of questions and take mock exams.</p>
            </div>
            
            <div className="feature-card">
              <div className="icon-container">
                <img src="/images/resource-icon.svg" alt="Resource" />
              </div>
              <h3>Seamless Resource Management</h3>
              <p>Save, track, and revisit study materials anytime.</p>
            </div>
            
            <div className="feature-card white-card">
              <div className="icon-container">
                <img src="/images/interface-icon.svg" alt="Interface" />
              </div>
              <h3>User-Friendly Interface</h3>
              <p>Easy navigation for a smooth learning experience.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }