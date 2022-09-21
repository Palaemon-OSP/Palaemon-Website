import React from 'react';

const DocsPage = () => {
  return (
    <div id='docs'>
      <aside id='docs-sidebar'>
        <ul id='docs-sidebar-container'>
          <li className='h1'>This is a .h1 style</li>
          <li className='h2'>This is a .h2 style</li>
          <li className='h3'>This is a .h3 style</li>
        </ul>
      </aside>
      <main id='docs-main'>
        <main>
          <h1>All hail the Clipboard API</h1>
          <p>Florid, wordly code exposition.</p>
          <pre><code class="language-css">.some-box &#123;
            width: 20px;
            height: 20px;
            background: black;
            margin-bottom: 1.5rem;
            &#125;
          </code></pre>
          <p>And I'll tell you another thing..</p>
          <pre><code class="language-html">&lt;div class="box drop3"&gt;&lt;/div&gt;</code></pre>
          <p>No! Not finished..</p>
          <pre><code class="language-javascript">console.log("finished");</code></pre>
        </main>
      </main>
    </div>
  );
};

export default DocsPage;
