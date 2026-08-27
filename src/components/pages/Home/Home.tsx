import './Home.css';

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h1>Welcome!</h1>
          <p>Hi there,</p>
          <p>
            I'm Jaqueline, a front and back-end developer, with projects in
            JavaScript, TypeScript, NodeJs, ReactJs, databases and a few more...
            I worked 4 years as a technical support in an internet company,
            where I leard A LOT.
          </p>
          <p>
            Currently I am in my last year of my Barchelor's degree in
            Information Systems, aaand open to work! Feel free to check my
            projects and/or contact me! ;)
          </p>
        </div>
        <div className="home-projects">
          <h3>Projects</h3>
          <div className="home-projects-list">
            <a
              target="_blank"
              href="https://github.com/JaquelineBravin/CrudComBancoDeDados-NodeJs.git"
            >
              NodeJs API com CRUD
            </a>
            <a
              target="_blank"
              href="https://github.com/JaquelineBravin/GithubUsers-JavaScript.git"
            >
              Github Users
            </a>
            <a
              target="_blank"
              href="https://github.com/JaquelineBravin/MovieApp-JavaScript.git"
            >
              TMDB MovieApp
            </a>
            <a
              target="_blank"
              href="https://github.com/JaquelineBravin/Microsservico-NodeJS.git"
            >
              Microsserviço NodeJs
            </a>
            <a
              target="_blank"
              href="https://github.com/JaquelineBravin/GeradorDePodcasts-NodeJS.git"
            >
              Manager de Podcast
            </a>
            <a></a>
            <a></a>
            <a></a>
            <a
              target="_blank"
              className="see-more"
              href="https://github.com/JaquelineBravin"
            >
              See more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
