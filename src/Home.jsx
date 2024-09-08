import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='grid'>
        <section className='info-left'>
          <h1 className='common-name'>Aloe vera</h1> {/* give diff font later */}
          <div className='space-bw'>
            <p className='botan-name'>Aloe barbadensis miller</p>
            <p>skin care</p>
          </div>
          <p>Aloe Vera is a succulent plant that thrives in warm, dry climates.</p>


          <h2>Medicinal Uses</h2>
          <ul>
            <li>Burn Relief: Aloe Vera is widely used to soothe and heal burns, including sunburns, due to its cooling and anti-inflammatory properties.</li>
            <li>Wound Healing: The gel can be applied to cuts, abrasions, and other skin injuries to promote faster healing.</li>
            <li>Acne Treatment: Aloe Vera has antibacterial properties that help reduce acne and prevent future breakouts.</li>
            <li>Skin Hydration: Aloe Vera gel is an excellent natural moisturizer, particularly for people with oily or sensitive skin. It absorbs quickly without leaving a greasy residue.</li>
            <li>Arthritis Relief: Aloe Vera can be used topically to reduce inflammation and pain associated with arthritis.</li>
            <li>Laxative Effect: Aloe Vera latex has a strong laxative effect and is used to treat constipation. However, it should be used with caution due to potential side effects.</li>
          </ul>
        </section>
        <canvas className='model'></canvas>
        <section className='info-right'>
          <h2>Methods of cultivation</h2>
          <ul>
            <h4><li>Propagation by Offsets</li></h4>
            <p>Use the small shoots (pups) that grow around the base of a mature plant.</p>
            <ol>
              <li>Separate Offsets: Gently remove pups with roots from the parent plant.</li>
              <li>Dry and Plant: Let them dry for a day, then plant in well-draining soil.</li>
              <li>Water Sparingly: Water only when the soil is dry.</li>
            </ol>

            <h4><li>By Seed</li></h4>
            <p>Used for slower growth.</p>
            <ol>
              <li>Sow Seeds: Place seeds in well-draining soil in a warm, bright spot.</li>
              <li>Keep Moist: Lightly mist the soil; germination takes 2-4 weeks.</li>
              <li>Transplant: Move seedlings to pots or ground when large enough.</li>
            </ol>

            <h4><li>Pot Cultivation</li></h4>
            <p>For Home and Indoor Growing</p>
            <ol>
              <li>Pot Selection: Use pots with drainage holes.</li>
              <li>Soil Mix: Use a cactus or succulent mix.</li>
              <li>Watering: Water deeply but infrequently.</li>
              <li>Light: Provide bright, indirect sunlight.</li>
            </ol>

            <h4><li>Commercial Cultivation</li></h4>
            <p>Used in large-Scale Farming</p>
            <ol>
              <li>Site: Choose sunny, well-draining areas.</li>
              <li>Spacing: Maintain 50-60 cm between plants and 60-75 cm between rows.</li>
              <li>Irrigation: Use drip irrigation; avoid overwatering.</li>
              <li>Fertilization: Apply minimal organic fertilizer.</li>
              <li>Weed Control: Regular weeding is essential.</li>
            </ol>
          </ul>

        </section>
        <footer className='footer'>
          <p className='space-bw'>
            <Link href="javascript:return false;" class="btn-push" style={{ color: 'gray' }}>Back</Link>
            <Link to='fwd' href="javascript:return false;" class="btn-push green">Next</Link>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Home