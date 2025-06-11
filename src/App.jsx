import './App.css';
import logo from './assets/logo.png';
import tutor1 from './assets/tutor1.jpg';
import tutor2 from './assets/tutor2.jpg';
import baba from './assets/baba.jpg';

function App() {
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <img src={logo} alt="Institute Logo" className="logo" />
          <h1 className="title">DRASHTANT AYURVEDA ACADEMY</h1>
          <img src={baba} alt="Right Logo" className="baba" />
        </div>
        <div className="hindi-banner">
          <h2 className="hindi-title">दृष्टान्त आयुर्वेद अकादमी</h2>
        </div>
      </header>

      <main className="container">
        <p className="intro">Test your knowledge! Sample papers for AIAPGT, RBSK and other Ayurvedic competitive exams.</p>

        <table className="test-table">
          <thead>
            <tr>
              <th>Test No.</th>
              <th>Link</th>
              <th>Topic & Description</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows — update links and topics as needed */}
            <tr>
              <td>Test 01</td>
              <td>
                <a href="https://docs.google.com/forms/d/11J9I3tH0OC4hYlj7h94W8PSt0AZUayW_wK28n3rUA84/edit?chromeless=1" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 02</td>
              <td>
                <a href="https://docs.google.com/forms/d/1HyHxttltrBHx4m1VKJRxQeDQyCjnafK3Sw2s6zKwfZU/edit?chromeless=1" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 03</td>
              <td>
                <a href="https://docs.google.com/forms/d/17_eicwXzrmM_5zMXws8LJmE5nLFODJ9HgyMsiIwX_UI/edit?usp=drivesdk&ouid=105196066582888523903&chromeless=1" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 04</td>
              <td>
                <a href="https://docs.google.com/forms/d/1TYJQA2X0ECNZA5NfKt1Tos93goBhBU6qINwtdmRwAWY/edit?chromeless=1#settings" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 05</td>
              <td>
                <a href="https://docs.google.com/forms/d/1wDko5n4u4ZAjDpwhpWjxX_c-CU3zVdSiIztTOLP3nUA/edit?chromeless=1" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 06</td>
              <td>
                <a href="https://forms.gle/example4" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 07</td>
              <td>
                <a href="https://forms.gle/example4" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 08</td>
              <td>
                <a href="https://forms.gle/example4" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 09</td>
              <td>
                <a href="https://forms.gle/example4" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 10</td>
              <td>
                <a href="https://forms.gle/example4" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 11</td>
              <td>
                <a href="https://forms.gle/example4" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 12</td>
              <td>
                <a href="https://forms.gle/example4" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
            <tr>
              <td>Test 13</td>
              <td>
                <a href="https://forms.gle/example4" target="_blank" rel="noopener noreferrer" className="button">
                  Open Form
                </a>
              </td>
              <td>Charaksamhita, Sutrasthana</td>
            </tr>
          </tbody>
        </table>

        <section className="tutors-section">
          <h2>Our Tutors</h2>
          <div className="tutors-grid">
            <div className="tutor-card">
              <img src={tutor1} alt="Tutor 1" />
              <h3>Dr MOHAMMAD AAMIR</h3>
              <p>MD Kayachikitsa (Medicine)</p>
              <p>Govt. Medical Officer, Purnea, BIHAR</p>
            </div>
            <div className="tutor-card">
              <img src={tutor2} alt="Tutor 2" />
              <h3>Dr VIVEK RAGHUVANSHI</h3>
              <p>MD Kayachikitsa (Medicine)</p>
              <p>Govt. Medical Officer, BHOPAL</p>
            </div>
          </div>
        </section>
        <section className="telegram-invite">
          <p>📢 Join our Telegram channel for latest Ayurvedic study materials and updates:</p>
          <a href="https://t.me/drashtant_ayurveda_academy_patna" target="_blank" rel="noopener noreferrer" className="telegram-button">
          Join on Telegram
          </a>
        </section>

      </main>

      <footer className="footer">
        <p>© 2025 DRASHTANT AYURVEDA ACADEMY. All rights reserved.</p>
        <p> Developed by mKviruS</p>
      </footer>
    </>
  );
}

export default App;
