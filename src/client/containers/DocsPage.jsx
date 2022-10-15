import { useEffect } from 'react';
import Prism from 'prismjs';

const DocsPage = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div id="docs">
      <aside id="docs-sidebar">
        <img id="palaemon-logo" src="public/logo.png" alt=""></img>
        <ul id="docs-sidebar-container">
          <a href="#palaemon-fried_shrimp-">
            <li className="h1">Palaemon</li>
          </a>
          <a href="#running-the-electron-app">
            <li className="h1">Running the Electron App</li>
          </a>
          <a href="#launching-in-dev-mode-with-hot-module-reload-hmr-">
            <li className="h2">Development Mode</li>
          </a>
          <a href="#launching-in-production-mode-">
            <li className="h2">Production Mode</li>
          </a>
          <a href="#using-palaemon">
            <li className="h1">Using Palaemon</li>
          </a>
          <a href="#kubernetes-requirements">
            <li className="h1">Kubernetes Requirements</li>
          </a>
          <a href="#how-to-connect-to-google-kubernetes-engine">
            <li className="h2">How to Connect to Google Kubernetes Engine</li>
          </a>
          <a href="#prometheus-requirements">
            <li className="h1">Prometheus Requirements</li>
          </a>
          <a href="#connecting-prometheus-to-palaemon">
            <li className="h2">Connecting Prometheus to Palaemon</li>
          </a>
          <a href="#how-to-run-tests">
            <li className="h1">How to Run Tests</li>
          </a>
          <a href="#unit-and-integration-tests-using-jest">
            <li className="h2">Unit Tests</li>
          </a>
          <a href="#end-to-end-testing-with-playwright-test-runner">
            <li className="h2">End to End Tests</li>
          </a>
          <a href="#features-h2">
            <li className="h1">Features</li>
          </a>
          <a href="#planned-features">
            <li className="h1">In Progress Features</li>
          </a>
          <a href="#built-with">
            <li className="h1">Technologies</li>
          </a>

          {/* <li className='h1'></li>
          <li className='h1'>This is a .h1 style</li>
          <li className='h1'>This is a .h1 style</li>
          <li className='h1'>This is a .h1 style</li>
          <li className='h1'>This is a .h1 style</li>
          <li className='h1'>This is a .h1 style</li>
          <li className='h2'>This is a .h2 style</li>
          <li className='h3'>This is a .h3 style</li> */}
        </ul>
      </aside>
      <main id="docs-main">
        {/* <!-- ![Palaemon Logo](./client/assets/logo.png) --> */}
        <p align="center">
          <img src="public/palaemon-banner.JPG" alt="drawing" />
        </p>

        <h1 id="palaemon-fried_shrimp-">Palaemon</h1>
        <ul className="docs-heading-ul">
          {/* <li>
            A gentle, euthanization and diagnosis tool for out-of-memory (OOM)
            kubernetes pods.{' '}
          </li> */}
          <li>
            Palaemon is a Greek, child sea-god who came to aid sailors in
            distress. He was often depicted as riding a dolphin. Also, a genus
            of{' '}
            <a href="https://en.wikipedia.org/wiki/Palaemon_(crustacean)">
              shrimp.
            </a>
          </li>
        </ul>
        <h1 id="running-the-electron-app">Running the Electron App</h1>
        <p>Prerequisites:</p>
        <ul className="prereqs-ul">
          <li> kubectl installed</li>
          <li> Prometheus installed</li>
          <li>
            Prometheus port-forwarded to{' '}
            <code className="inline-code">localhost:9090</code>
          </li>
        </ul>
        <h2 id="launching-in-dev-mode-with-hot-module-reload-hmr-">
          Launching in dev mode with Hot-Module Reload (HMR)
        </h2>
        <p>
          If this is the first time launching the app then run the following
          commands:
        </p>
        <pre>
          <code className="language-sh">npm install {'\n'}npm run build</code>
        </pre>
        <p>
          This will build your initial <code className="inline-code">dist</code>{' '}
          folder.
        </p>
        {/* <!-- If this it the first time running the app, start by `npm run build` to build your initial `dist` folder.  --> */}
        <p>Then on a different terminal run </p>
        <pre>
          <code className="language-sh">
            npm <span className="hljs-keyword">run</span>
            <span className="bash"> electronmon</span>
          </code>
        </pre>
        <p>
          The build command for webpack will run webpack with the --watch flag
          to watch for any changes in the files, and rebuild the dist folder
          when any files are changed. Electronmon is watching the dist folder
          for any changes and will either refresh or relaunch the electron app
          when it detects any of the dist folder files have been changed.
        </p>
        <h2 id="after-the-initial-build-you-can-now-run-the-following-command">
          After the initial build, you can now run the following command
        </h2>
        <pre>
          <code className="language-sh">
            <span className="hljs-built_in">npm</span> start
          </code>
        </pre>
        <p>
          This which will first delete the old{' '}
          <code className="inline-code">dist</code> folder from your app, and
          concurrently launch the webpack to build and electronmon to wait for
          the new <code className="inline-code">dist</code> folder to be built.
        </p>
        <p>
          If the build process was interrupted through{' '}
          <code className="inline-code">CTRL + C</code> or other means, then you
          may receive the following error:
        </p>
        <pre>
          <code className="language-sh">
            <span className="hljs-keyword">Error: </span>ENOENT: no such file or
            directory, stat 'dist'
          </code>
        </pre>
        <p>
          In this case, just run the command below, and wait for webpack to
          finish building. After webpack has finished, you can start the app
          normally.
        </p>
        <pre>
          <code className="language-sh">
            npm <span className="hljs-keyword">run</span>
            <span className="bash"> build</span>
          </code>
        </pre>
        <h2 id="launching-in-production-mode-">
          Launching in production mode:
        </h2>
        <p>
          The command below will build and bundle files into /dist folder for
          production and open the electron app based on the bundled files from
          /dist.{' '}
        </p>
        <pre>
          <code className="language-sh">
            npm <span className="hljs-keyword">star</span>
            <span className="hljs-variable">t:production</span>
          </code>
        </pre>
        <h1 id="using-palaemon">Using Palaemon</h1>
        <ol className="using-palaemon-ol">
          <li>
            On a successful startup, you will be greeted with a landing page
            allowing you to select a namespace to be analyzed.
          </li>
          <li>
            After selecting your namespace, you will be moved to the home page
            <ul>
              <li>
                The home page is where you can find a list of all events,
                alerts, and OOMKills
              </li>
              <li>
                Events are limited to occurences within the last hour due to a
                kubectl limitation.
              </li>
              <li>
                OOMKill events are <strong>not</strong> limited to the last
                hour.
              </li>
            </ul>
          </li>
          <li>
            The lefthand side will show you all of your pods within the
            namespace.{' '}
            <ul>
              <li>
                The color of the squares represent the memory usage vs memory
                limit of the pod, with green pods using less memory than their
                requested amount.
              </li>
              <li>
                Black pods indicate that no data was available for that pod.
              </li>
            </ul>
          </li>
          <li>
            When the OOMKill type is seleceted, an{' '}
            <code className="inline-code">Analyze</code> button will appear,
            where you can click that to be taken to the{' '}
            <code className="inline-code">Analysis</code> page.
            <ul>
              <li>
                Here is where you can find all of the information on your node
                and other pods at the time of death, along with pertinent
                events.
              </li>
            </ul>
          </li>
        </ol>
        <h1 id="kubernetes-requirements">Kubernetes Requirements</h1>
        <p>
          Palaemon utilizes the kubernetes command line tool (kubectl) to gather
          data on your nodes and clusters. Kubectl can be downloaded and
          installed <a href="https://kubernetes.io/docs/tasks/tools/">here</a>.
        </p>
        <p>
          Minikube can also be used to test out Palaemon. More can be found on
          their official documentation{' '}
          <a href="https://minikube.sigs.k8s.io/docs/start/">here</a>.
        </p>
        <p>
          Palaemon has not yet been tested with Amazon Elastic Kubernetes
          Service (EKS) or Microsoft Azure Kubernetes Service (AKS), but should
          be compatible provided that kubectl can access all cluster and node
          information.
        </p>
        <h2 id="how-to-connect-to-google-kubernetes-engine">
          How to Connect to Google Kubernetes Engine
        </h2>
        <ol className="google-ol">
          <li>
            Install gcloud CLI on your local machine from{' '}
            <a href="https://cloud.google.com/sdk/docs/install">here</a>
            <ul>
              <li>
                If you are having problems with the gcloud CLI, try using the
                command below in your home directory, and make sure to update
                your $PATH in the process.
                <pre>
                  <code className="language-sh">
                    curl <span className="hljs-string">https:</span>
                    <span className="hljs-comment">
                      //sdk.cloud.google.com | bash
                    </span>
                  </code>
                </pre>
              </li>
              <li>
                If you are still having issues, trying restarting your terminal.
              </li>
            </ul>
          </li>
          <li>
            Initialize the gcloud CLI following the steps{' '}
            <a href="https://cloud.google.com/sdk/docs/initializing">here</a>
          </li>
          <li>
            Connect your gcloud CLI to your GKE cluster{' '}
            <a href="https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl">
              here
            </a>
            <ul>
              <li>
                Make sure to get the credentials of your cluster (see below) or
                you will not be able to connect to your cluster
                <pre>
                  <code className="language-sh">
                    <span className="hljs-string">gcloud </span>
                    <span className="hljs-string">container </span>
                    <span className="hljs-string">clusters </span>
                    <span className="hljs-built_in">get-credentials</span> [
                    <span className="hljs-string">CLUSTER_NAME]</span>
                  </code>
                </pre>
              </li>
            </ul>
          </li>
        </ol>
        <h1 id="prometheus-requirements">Prometheus Requirements</h1>
        <p>
          Palaemon utilizes Prometheus to scrape for data on your pods.
          Therefore, please ensure you have Prometheus installed on your node.
        </p>
        <p>
          Cloud hosting platforms such as GCP and AWS already have managed
          Prometheus services. If you are new to Prometheus, we recommend
          installing the Prometheus monitoring package, Prometheus Operator.
          This includes a full monitoring stack: Prometheus, Alert Manager, Node
          Exporter, Grafana, and Kube State Metrics. Prometheus Operator can be
          installed onto your cluster via Helm at the link{' '}
          <a href="https://artifacthub.io/packages/helm/choerodon/prometheus-operator">
            here
          </a>
          .
        </p>
        <p>
          Once you have Prometheus installed into your Kubernetes cluster,
          follow the steps below to port-forward your Prometheus operator
          service.
        </p>
        <h2 id="connecting-prometheus-to-palaemon">
          Connecting Prometheus to Palaemon
        </h2>
        <p>
          {' '}
          Make sure a Prometheus pod is installed onto your node/cluster, and
          forward its port (default 9090) to your localhost through the command
          below.
        </p>
        <pre>
          <code className="language-sh">
            kubectl port-forward -n{' '}
            <span className="hljs-string">[NAMESPACE]</span> service/
            <span className="hljs-string">[PROMETHEUS]</span>{' '}
            <span className="hljs-number">9090</span>
          </code>
        </pre>
        <ul className="prom-ul">
          <li>
            The -n flag indicates the namespace that the pod is assigned to.
          </li>
          <li>
            A list of all available services can be found through typing the
            command below in the terminal.
          </li>
          <pre>
            <code className="language-sh">
              kubectl <span className="hljs-keyword">get</span> services -A
            </code>
          </pre>
          <li>
            Find the service with a 9090/TCP Port assigned, and forward that
            service to your local 9090.
          </li>
        </ul>
        <p>
          <img
            src="../../../public/All-Services.png"
            alt="Get All Services"
          ></img>
        </p>
        <p>In the example above, the command would be :</p>
        <pre>
          <code className="language-sh">
            kubectl port-<span className="hljs-keyword">forward</span> -n
            monitoring service/<span className="hljs-keyword">operator</span>
            -kube-prometheus-s-prometheus{' '}
            <span className="hljs-number">9090</span>
          </code>
        </pre>
        <p>
          Once you have port-forwarded the service, you should now be able to
          access the Palaemon application. If you are still getting an error
          with port 9090 being closed, double-check that you are exposing the
          correct service: It should be listening on port 9090 (see picture
          below).
        </p>
        <ul>
          <li className="port-forward-p">
            <p>
              A more detailed set of instructions can be found on Google&#39;s
              Documentations{' '}
              <a href="https://cloud.google.com/stackdriver/docs/managed-prometheus/query">
                here
              </a>
            </p>
            <p>
              <img
                src="../../../public/Forward-Success.png"
                alt="Forward Success"
              ></img>
            </p>
            <h3 id="note-while-you-can-forward-prometheus-to-a-local-port-that-is-not-9090-palaemon-is-not-yet-setup-to-handle-any-other-port-besides-9090-">
              NOTE: While you <em>can</em> forward Prometheus to a local port
              that is <strong>not</strong> 9090, Palaemon is not yet setup to
              handle any other port besides 9090.
            </h3>
          </li>
        </ul>
        <p>
          <br></br>
        </p>
        <h1 id="how-to-run-tests">How to Run Tests</h1>
        <h3 id="unit-and-integration-tests-using-jest">
          Unit and Integration tests using Jest
        </h3>
        <p>
          The jest testing suite will start with the command below. The{' '}
          <code className="inline-code">--watch</code> flag is enabled, which
          allows for immediate retests upon save. The jest config in{' '}
          <code className="inline-code">jest.config.js</code> is set up to only
          look for and run test files within the{' '}
          <code className="inline-code">__test__</code> folder and with file
          names that include &quot;.test.&quot; in them, such as
          &quot;Events.test.tsx&quot;.{' '}
        </p>
        <pre>
          <code className="language-sh">
            npm <span className="hljs-keyword">run</span>
            <span className="bash">
              {' '}
              <span className="hljs-built_in">test</span>:watch
            </span>
          </code>
        </pre>
        <p>
          Units tests are set up using Jest testing suite and
          react-testing-library to test react components in the front end.{' '}
        </p>
        <h3 id="end-to-end-testing-with-playwright-test-runner">
          End-to-End testing with Playwright Test Runner
        </h3>
        <p>
          <code className="inline-code">npm run test:e2e</code> will execute the
          playwright test runner and run any test files in the{' '}
          <code className="inline-code">__test__</code> folder with the name
          format &quot;.e2e.&quot; in them, such as
          &quot;playwright.e2e.ts&quot;.{' '}
        </p>
        <p>
          There are settings to enable HTML report and video, snapshot, trace
          recordings that can be configured in the{' '}
          <code className="inline-code">playwright.config.ts</code> file is fo
          desired.{' '}
        </p>
        <h2 id="features-h2">Features</h2>
        <ul className="features-ul">
          <li>Realtime Pod memory usage, sorted by namespaces</li>
          <li>
            Connect to locally hosted or cloud hosted Kubernetes clusters and
            Prometheus monitoring tools
          </li>
          <li>Filter by namespaces for meaningful reports</li>
          <li>Monitoring for health and resource usage per pod and nodes</li>
          <li>
            Records and curates reports based on recent out-of-memory kill
            (OOMKill) errors
          </li>
          <li>Displays event and alert logs</li>
          <li>
            Visualize health of pods and nodes by namespace in a Kubernetes
            cluster
          </li>
          <li>
            Execute customized queries based on user-defined time intervals
          </li>
        </ul>
        <h2 id="planned-features">Planned Features</h2>
        <ol className="planned-features-ol">
          <li>
            Provide custom alerts for OOMKill events with specific termination
            reasons such as “Limit Overcommit” or “Container Limit Reached”
          </li>
          <li>Allow for early, graceful termination of pods</li>
          <li>
            Automatic reconfiguration of YAML files to adjust memory limits and
            requests
          </li>
          <li>
            A lightweight, active monitoring mode, which will store a log of
            historic events and OOMKill data
          </li>
        </ol>
        <h2 id="built-with">Built With</h2>
        <ul className="built-with-ul">
          <li>
            <a href="https://www.electronjs.org/">Electron</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </li>
          <li>
            <a href="https://reactjs.org/">React</a>
          </li>
          <li>
            <a href="https://reactrouter.com/">React Router</a>
          </li>
          <li>
            <a href="https://jestjs.io/">Jest</a>
          </li>
          <li>
            <a href="https://playwright.dev/">Playwright</a>
          </li>
          <li>
            <a href="https://nodejs.org/">Node</a>
          </li>
          <li>
            <a href="https://prometheus.io/">Prometheus</a>
          </li>
          <li>
            <a href="https://www.chartjs.org/">Chart.js</a>
            {/* <!-- - [Kubernetes-client](https://github.com/kubernetes-client/) --> */}
          </li>
        </ul>
        {/* <h2 id="the-team">The Team</h2>
      <ul>
        <li>Si Young Mah <a href="https://github.com/siyoungmah">Github</a> <a href="https://www.linkedin.com/in/siyoungmah/">LinkedIn</a></li>
        <li>Patrick Hu <a href="https://github.com/pathu91">Github</a> <a href="https://www.linkedin.com/in/patrickhu91/">LinkedIn</a></li>
        <li>Thang Thai <a href="https://github.com/thang-thai">Github</a> <a href="https://www.linkedin.com/in/thang-thai/">LinkedIn</a></li>
        <li>Raivyno Lenny Sutrisno <a href="https://github.com/FrozenStove">Github</a> <a href="https://www.linkedin.com/in/raivyno-sutrisno/">LinkedIn</a></li>
      </ul> */}

        {/* 
        <main>
          <h1>Launching in dev mode with Hot-Module Reload (HMR)</h1>
          <p>If this is the first time launching the app then run the following commands:</p>
          <pre>
            <code className="language-sh">
              npm install{"\n"}
            npm run build</code>
            </pre>
          <p>You need to find which is your prometheus operator service by:</p>
          <pre><code className="language-sh">kubectl get all</code></pre>
          <h1>All hail the Clipboard API</h1>
          <p>Florid, wordly code exposition.</p>
          <pre><code className="language-css">.some-box &#123;{"\n"}
            width: 20px;{"\n"}
            height: 20px;{"\n"}
            background: black;{"\n"}
            margin-bottom: 1.5rem;{"\n"}
            &#125;
          </code></pre>
          <p>And I'll tell you another thing..</p>
          <pre><code className="language-html">&lt;div className="box drop3"&gt;&lt;/div&gt;</code></pre>
          <p>No! Not finished..</p>
          <pre><code className="language-javascript">console.log("finished");</code></pre>
        </main> */}
      </main>
    </div>
  );
};

export default DocsPage;
