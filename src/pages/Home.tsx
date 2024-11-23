import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">What MacBook Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"What MacBook should I buy?"</strong>, you're not alone! Choosing the perfect MacBook can be overwhelming with several models, chip options, and configurations available. From the lightweight MacBook Air to the powerful MacBook Pro, finding the best device for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>What MacBook Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal MacBook for your lifestyle.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "What MacBook Should I Buy?" Quiz?</h2>
            <p>
              With multiple MacBook models featuring different Apple Silicon chips, deciding on the right one can feel overwhelming. Whether you need a MacBook for studying, programming, content creation, or professional work, our <strong>What MacBook Should I Buy? Quiz</strong> is designed to match you with a MacBook that fits your workflow, budget, and performance requirements.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>MacBook Type:</strong> Air or Pro models</li>
              <li><strong>Performance:</strong> M2, M3, Pro, or Max chips</li>
              <li><strong>Usage:</strong> Student, Developer, Creative Professional</li>
              <li><strong>Budget:</strong> Find the perfect MacBook within your price range</li>
              <li><strong>Features:</strong> Display size, ports, battery life</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular MacBook Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Students:</strong> Portable and affordable options</li>
              <li><strong>Best for Developers:</strong> Models with powerful chips and good battery life</li>
              <li><strong>Best for Creatives:</strong> Pro models with larger displays</li>
              <li><strong>Best for Professionals:</strong> High-performance options with pro features</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "What MacBook Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your computing needs, preferred features, and budget, and we'll recommend the best MacBooks for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert MacBook Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider Future Needs:</strong> Think about longevity and future requirements</li>
              <li><strong>Memory & Storage:</strong> Choose configurations that match your workflow</li>
              <li><strong>Display Size:</strong> Consider your mobility and screen real estate needs</li>
              <li><strong>Port Selection:</strong> Evaluate your connectivity requirements</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our MacBook Recommendations?</h2>
            <p>
              Our team consists of Apple experts and tech enthusiasts who stay up-to-date with the latest MacBook models and features. We regularly update our <strong>What MacBook Should I Buy? Quiz</strong> to include new models and chips, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect MacBook?</h2>
            <p>
              Don't waste hours researching – let our <strong>What MacBook Should I Buy? Quiz</strong> guide you to the perfect device. Whether you're buying your first MacBook or upgrading your current one, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}