import Havilidades from "../components/Havilidades";
import Layout from "../components/Layout";
import { skills, experiencias, proyectos } from "../profile";

console.log(experiencias);
const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
                src="/myfoto.jpg"
                alt="myfoto"
                className="rounded"
              />
            </div>
            <div className="col-md-8">
              <h1>Josimar Victoria</h1>
              <h3>Frontend Developer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                iste consequuntur enim reprehenderit architecto consectetur cum?
                Totam ad molestias natus illum illo officia.
              </p>
              <a href="/hireme" className="">
                Contratame{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Segunda secion */}

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Mis habilidades</h1>
            {skills.map((skill) => (
              <div className="py-3" key={skill.id}>
                <Havilidades skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experiencia </h1>
            <ul>
              {experiencias.map(({ title, description, id }) => (
                <li key={id}>
                  <h3>{title}</h3>
                  <h5>2000-2007</h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* 3 secion */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>
            {proyectos.map(({ image, name, description, id }) => (
              <div className="col-md-4 p-2" key={id}>
                <div className="card h-100">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt="Portfolio1"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h1>{name}</h1>
                    <h4>{description}</h4>
                    <button>hola</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
