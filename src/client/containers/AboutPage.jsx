import React from 'react';


const AboutPage = () => {
  return (
    <div id='landing-container'>
      <h1>I am the landing page</h1>
      <section id='section-intro'>
        <figure className='div-side'>
          <img src="logo.png" alt="" />
        </figure>
        <main className='div-main'>
        <p>This is the blah blah part about what Palaemon is</p>
        </main>
      </section>
      <section id='section-features'>
        <main className='div-main'>
        <p>This div will showcase our awesome features!!</p>
        </main>
        <figure className='div-side'>
          <img src="https://kubernetes.io/images/favicon.png" alt="" />
        </figure>
      </section>
      <section id='section-demo'>
        <main className='div-main'>
        <p>We'll show a cool gif demo-ing our app here!!</p>
        </main>
        <figure className='div-side'>
          <img src="logo.png" alt="" />
        </figure>
      </section>
      <section id='section-contact'>
        <p>This is where we'll have our beautiful photos and ways to connect with such spectacular engineers like us!</p>
        <div id='spectacular-engineers'>
          <div className='spectacular-person'>
            <div className='spectacular-photo'> <img src="logo.png" alt="" /></div>
            <div className='spectacular-name'>NAME</div>
            <div className='spectacular-title'>title</div>
            <div className='spectacular-links'>
              <div className='spectacular-github'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></div>
              <div className='spectacular-linkedin'><img src="http://cdn.onlinewebfonts.com/svg/img_24651.png" alt="" /></div>
            </div>
          </div>
          <div className='spectacular-person'>
            <div className='spectacular-photo'> <img src="logo.png" alt="" /></div>
            <div className='spectacular-name'>NAME</div>
            <div className='spectacular-title'>title</div>
            <div className='spectacular-links'>
              <div className='spectacular-github'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></div>
              <div className='spectacular-linkedin'><img src="http://cdn.onlinewebfonts.com/svg/img_24651.png" alt="" /></div>
            </div>
          </div>
          <div className='spectacular-person'>
            <div className='spectacular-photo'> <img src="logo.png" alt="" /></div>
            <div className='spectacular-name'>NAME</div>
            <div className='spectacular-title'>title</div>
            <div className='spectacular-links'>
              <div className='spectacular-github'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></div>
              <div className='spectacular-linkedin'><img src="http://cdn.onlinewebfonts.com/svg/img_24651.png" alt="" /></div>
            </div>
          </div>
          <div className='spectacular-person'>
            <div className='spectacular-photo'> <img src="logo.png" alt="" /></div>
            <div className='spectacular-name'>NAME</div>
            <div className='spectacular-title'>title</div>
            <div className='spectacular-links'>
              <div className='spectacular-github'><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></div>
              <div className='spectacular-linkedin'><img src="http://cdn.onlinewebfonts.com/svg/img_24651.png" alt="" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
