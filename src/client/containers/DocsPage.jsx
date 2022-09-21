import { useEffect } from 'react';
import Prism from 'prismjs';


const DocsPage = () => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
          <h1>Launching in dev mode with Hot-Module Reload (HMR)</h1>
          <p>If this is the first time launching the app then run the following commands:</p>
          <pre><code class="language-sh">npm install{"\n"}
            npm run build</code></pre>
          <p>You need to find which is your prometheus operator service by:</p>
          <pre><code class="language-sh">kubectl get all</code></pre>
          <h1>All hail the Clipboard API</h1>
          <p>Florid, wordly code exposition.</p>
          <pre><code class="language-css">.some-box &#123;{"\n"}
            width: 20px;{"\n"}
            height: 20px;{"\n"}
            background: black;{"\n"}
            margin-bottom: 1.5rem;{"\n"}
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
