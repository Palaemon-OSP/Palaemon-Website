import React from 'react';

const AboutPage = () => {
  const svgSize = '24';

  return (
    <div id="landing-container">
      <section id="hero">
        <figure className="hero-img">
          <img id="palaemon-logo" src="public/logo.png" alt="" />
        </figure>
        <main className="div-main">
          <h1>Introducing Palaemon</h1>
          <p className="hero-subheading">
            Open-source developer tool for monitoring Kubernetes clusters and
            error analysis
          </p>
          <ul className="hero-ul">
            <div className="hero-li-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#00695c"
                class="bi bi-stars"
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              </svg>
              <div>
                <li className="hero-li-1">Easy and Straightforward</li>
                <li className="hero-li-2">
                  Our documentation makes setting up quick and easy
                </li>
              </div>
            </div>
            <div className="hero-li-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#00695c"
                class="bi bi-stars"
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              </svg>
              <div>
                <li className="hero-li-1">Addresses the Gaps</li>
                <li className="hero-li-2">
                  Palaemon aims to address Kubernetes' lack of native monitoring
                  and robust error tracking
                </li>
              </div>
            </div>
            <div className="hero-li-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#00695c"
                class="bi bi-stars"
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              </svg>

              <div>
                <li className="hero-li-1">Open Source</li>
                <li className="hero-li-2">
                  Palaemon highly encourages contributors and suggestions for
                  improvement
                </li>
              </div>
            </div>
          </ul>
          <button className="hero-btn">Get Started</button>
        </main>
      </section>

      {/* -------------------- START OF FEATURES -------------------- */}

      <section id="features">
        <main className="div-main">
          <p className="features-heading">
            Cluster Monitoring and Error Analysis
          </p>
          <p className="features-subheading">
            Incorporates various technologies such as the Kubernetes-client
            JavaScript Library, Kubernetes command line tool, and Prometheus to
            render metrics for your cluster in a visually digestible format and
            helps identify Out of Memory (OOMKill) errors.
          </p>
          {/* -------------------- DOWNLOAD BUTTONS -------------------- */}
          {/* <div className="feature-btns">
            <a
              href="../../../public/logo.png"
              download={'Palaemon Installer MacOS Apple ARM'}
            >
              <button className="feature-btn">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-apple"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  </svg>
                </div>
                <div className="feature-btn-text">
                  Download for MAC with Apple Chip
                </div>
              </button>
            </a>
            <a
              href="../../../public/logo.png"
              download={'Palaemon Installer MacOS Intel x86'}
            >
              <button className="feature-btn">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-apple"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  </svg>
                </div>
                <div className="feature-btn-text">
                  Download for MAC with Intel Chip
                </div>
              </button>
            </a> */
          /* </div> */}
          {/* -------------------- END OF DOWNLOAD BUTTONS -------------------- */}
          <button className="feature-btn">See the Docs</button>
        </main>
        {/* -------------------- START OF FEATURE GRID -------------------- */}
        <figure className="feature-right-side">
          {/* Alerts and Events Logs */}
          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                class="bi bi-exclamation-triangle"
                viewBox="0 0 16 16"
              >
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
              </svg>
            </div>
            <p className="features-right-heading">Events and Alerts</p>
            <p className="features-text">
              Extracts events/alerts from the command line to a graphical user
              interface (GUI)
            </p>
          </div>
          {/* Cluster Health */}
          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                class="bi bi-heart-pulse"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Zm8.252-6.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"
                />
              </svg>
            </div>
            <p className="features-right-heading">Monitoring Cluster Health</p>
            <p className="features-text">
              Visually detect when pods are in danger and view individual
              resource usage
            </p>
          </div>
          {/* Cluster Resource Usage */}
          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                class="bi bi-cpu"
                viewBox="0 0 16 16"
              >
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </div>

            <p className="features-right-heading">
              Preconfigured Queries for Metrics
            </p>
            <p className="features-text">
              Abstracts the difficulties of promQL and displays metrics
            </p>
          </div>
          {/* OOMKill Analysis */}

          <div className="feature-square">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                fill="white"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <p className="features-right-heading">
              Detailed Error Analysis for Pods
            </p>
            <p className="features-text">
              Filter through recent OOMKill events and diagnose potential causes
            </p>
          </div>
        </figure>
      </section>

      {/* -------------------- START OF DEMO -------------------- */}

      <section id="demo">
        <main className="div-main">
          <p>We'll show a cool gif demo-ing our app here!!</p>
        </main>
        <figure className="div-side">
          <img src="public/logo.png" alt="" />
        </figure>
      </section>

      {/* -------------------- START OF TEAM BIO -------------------- */}

      <section id="contact">
        <div className="spectacular">
          <div className="spectacular-person">
            <div className="spectacular-person-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/SiYoung-Mah.jpg"
                alt=""
              />
              {/* <img src="public/logo.png" alt="" /> */}
            </div>
            <div className="spectacular-person-name">Si Young Mah</div>
            <div className="spectacular-person-title">Software Engineer</div>
            <div className="spectacular-person-links">
              <div className="spectacular-person-github">
                <a href="https://github.com/siyoungmah">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="spectacular-person-linkedin">
                <a href="https://www.linkedin.com/in/siyoungmah/">
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="spectacular-person">
            <div className="spectacular-person-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/Patrick-Hu.jpeg"
                alt=""
              />
              {/* <img src="public/logo.png" alt="" /> */}
            </div>
            <div className="spectacular-person-name">Patrick Hu</div>
            <div className="spectacular-person-title">Software Engineer</div>
            <div className="spectacular-person-links">
              <div className="spectacular-person-github">
                <a href="https://github.com/pathu91">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="spectacular-person-linkedin">
                <a href="https://www.linkedin.com/in/patrickhu91/">
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="spectacular-person">
            <div className="spectacular-person-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/Thang-Thai.jpg"
                alt=""
              />
              {/* <img src="public/logo.png" alt="" /> */}
            </div>
            <div className="spectacular-person-name">Thang Thai</div>
            <div className="spectacular-person-title">Software Engineer</div>
            <div className="spectacular-person-links">
              <div className="spectacular-person-github">
                <a href="https://github.com/thang-thai">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="spectacular-person-linkedin">
                <a href="https://www.linkedin.com/in/thang-thai/">
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="spectacular-person">
            <div className="spectacular-person-photo">
              {' '}
              <img
                className="photos"
                src="public/headshots/Raivyno-Sutrisno.jpg"
                alt=""
              />
            </div>
            <div className="spectacular-person-name">
              Raivyno (Lenny) Sutrisno
            </div>
            <div className="spectacular-person-title">Software Engineer</div>
            <div className="spectacular-person-links">
              <div className="spectacular-person-github">
                <a href="https://github.com/FrozenStove">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="spectacular-person-linkedin">
                <a href="https://www.linkedin.com/in/raivyno-sutrisno/">
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_24651.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
