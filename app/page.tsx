"use client";

export default function Home() {
  const specialties = [
    {
      title: "🔒 DevSecOps & CI/CD",
      description: "Automatización de seguridad en GitHub Actions, Veracode, Prisma Cloud, SonarQube",
      details: ["GitHub Actions", "AWS CodePipeline", "Veracode", "SonarQube Community"]
    },
    {
      title: "☁️ Cloud & Serverless AWS",
      description: "Arquitectura AWS CDK, Lambda, Step Functions, escalable y modular",
      details: ["AWS CDK", "AWS Lambda", "Step Functions", "Amazon ECR", "CloudFront"]
    },
    {
      title: "💻 Backend & QA",
      description: "Desarrollo Java/TypeScript, testing automatizado y orquestación de pruebas",
      details: ["Java", "TypeScript", "Spring Boot", "Pruebas Unitarias", "QMetry"]
    },
    {
      title: "🏢 Enterprise & ETL",
      description: "Sistemas SAP Callidus, integraciones de datos y procesos complejos",
      details: ["SAP Callidus", "Informatica PowerCenter", "Oracle PL/SQL", "SAP HANA"]
    }
  ];

  const skills = [
    { category: "DevSecOps", items: ["GitHub Actions", "AWS CodePipeline", "Veracode", "Prisma Cloud", "SonarQube"] },
    { category: "Cloud AWS", items: ["AWS CDK", "AWS Lambda", "Step Functions", "Amazon ECR", "CloudFront"] },
    { category: "Backend", items: ["Java", "TypeScript", "Spring Boot", "Node.js", "Bash Shell"] },
  ];

  const projects = [
    {
      title: "Modernización de Pipelines DevSecOps",
      description: "Migración de CloudFormation a AWS CDK con GitHub Actions. Integración de Veracode, Prisma Cloud y SonarQube en workflows automatizados.",
      tags: ["AWS CDK", "GitHub Actions", "DevSecOps"],
      link: "#",
      organization: "Banco Bolivariano"
    },
    {
      title: "Arquitectura Serverless AWS Modular",
      description: "Diseño e implementación de pipelines serverless con Lambda, Step Functions y CloudFront. Optimización de despliegues con stacks anidados.",
      tags: ["AWS Lambda", "Step Functions", "Amazon ECR"],
      link: "#",
      organization: "Banco Bolivariano"
    },
    {
      title: "Orquestación de Testing con QA Automation",
      description: "Implementación de flujos QA automatizados con QMetry API, integración con Jira y Confluence para trazabilidad completa.",
      tags: ["QMetry", "GitHub Actions", "Jira"],
      link: "#",
      organization: "Banco Bolivariano"
    },
    {
      title: "Sistemas SAP Callidus Enterprise",
      description: "Desarrollo y mantenimiento de reglas de negocio para comisiones financieras. Optimización de portales web con Java/Groovy.",
      tags: ["SAP Callidus", "Java", "Groovy 3"],
      link: "#",
      organization: "Tatasolution Center"
    },
    {
      title: "Aplicaciones Enterprise Spring Boot",
      description: "Desarrollo de soluciones web corporativas con Spring MVC, JSF y PrimeFaces. Automatización con Bash Shell y JasperReports.",
      tags: ["Spring Boot", "Java", "WildFly"],
      link: "#",
      organization: "Corporación Latinoamericana de Software"
    },
  ];

  return (
    <main style={{ backgroundColor: '#fafaf8' }}>
      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido Text */}
            <div>
              <div className="mb-6">
                <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: '#f0f0ed', color: '#777c49', border: '1px solid #777c49' }}>
                  <span className="text-sm font-semibold">💼 Ingeniera DevSecOps Senior</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#3a110d' }}>
                JENNIFFER CEVALLOS
              </h1>
              <p className="text-2xl font-semibold mb-4" style={{ color: '#777c49' }}>
                +10 años liderando soluciones backend, automatización y DevSecOps
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#666' }}>
                Especializada en arquitectura cloud serverless AWS, modernización de CI/CD con GitHub Actions, integración de seguridad automatizada (DevSecOps) y desarrollo enterprise en entornos financieros de alta exigencia.
              </p>
              <div className="flex gap-4 flex-wrap mb-12">
                <a href="#especialidades" className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-90 text-white" style={{ backgroundColor: '#777c49' }}>
                  Ver especialidades
                </a>
                <a href="#contacto" className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-80 border" style={{ borderColor: '#3a110d', color: '#3a110d' }}>
                  Contactarme
                </a>
              </div>
              <div className="space-y-3">
                <p style={{ color: '#666' }}><span style={{ color: '#777c49', fontWeight: 'bold' }}>📍</span> Guayaquil, Ecuador</p>
                <p style={{ color: '#666' }}><span style={{ color: '#777c49', fontWeight: 'bold' }}>📱</span> +593 982426218</p>
                <p style={{ color: '#666' }}><span style={{ color: '#777c49', fontWeight: 'bold' }}>✉️</span> Jenniffer.cevallosy@outlook.com</p>
              </div>
            </div>
            
            {/* Avatar & Stats */}
            <div className="text-center">
              <div className="mb-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full p-1" style={{ background: 'linear-gradient(135deg, #777c49, #3a110d)' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center text-6xl" style={{ backgroundColor: '#fafaf8' }}>
                    👨‍💼
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #777c49' }}>
                  <div className="text-3xl font-bold" style={{ color: '#3a110d' }}>10+</div>
                  <div className="text-sm" style={{ color: '#666' }}>Años Exp.</div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #3a110d' }}>
                  <div className="text-3xl font-bold" style={{ color: '#777c49' }}>20+</div>
                  <div className="text-sm" style={{ color: '#666' }}>Proyectos</div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#ffffff', borderLeft: '4px solid #777c49' }}>
                  <div className="text-3xl font-bold" style={{ color: '#3a110d' }}>DevSecOps</div>
                  <div className="text-sm" style={{ color: '#666' }}>Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section id="especialidades" className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#3a110d' }}>Áreas de Especialización</h2>
          <p className="text-lg text-center mb-16" style={{ color: '#666' }}>Mi trayectoria de 10+ años se enfoca en estos pilares fundamentales</p>
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((spec) => (
              <div key={spec.title} className="p-8 rounded-lg border-2 transition hover:shadow-lg" style={{ backgroundColor: '#fafaf8', borderColor: '#777c49' }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#3a110d' }}>{spec.title}</h3>
                <p className="mb-5" style={{ color: '#666' }}>{spec.description}</p>
                <div className="flex flex-wrap gap-2">
                  {spec.details.map((detail) => (
                    <span key={detail} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#f0f0ed', color: '#777c49', border: '1px solid #777c49' }}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#3a110d' }}>Competencias Técnicas</h2>
          <p className="text-lg text-center mb-16" style={{ color: '#666' }}>Stack tecnológico especializado en DevSecOps, Cloud y Backend</p>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="border-2 rounded-lg p-8 transition hover:shadow-lg" style={{ backgroundColor: '#ffffff', borderColor: '#3a110d' }}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#3a110d' }}>{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3" style={{ color: '#666' }}>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#777c49' }}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#3a110d' }}>Experiencia Profesional Destacada</h2>
          <p className="text-lg text-center mb-16" style={{ color: '#666' }}>Proyectos clave en DevSecOps, Cloud y Desarrollo Enterprise</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="border-2 rounded-lg overflow-hidden transition hover:shadow-lg" style={{ backgroundColor: '#fafaf8', borderColor: '#3a110d' }}>
                <div className="h-32 flex items-center justify-center text-5xl" style={{ background: 'linear-gradient(135deg, rgba(119, 124, 73, 0.1), rgba(58, 17, 13, 0.1))' }}>
                  🚀
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#3a110d' }}>{project.title}</h3>
                  <p className="text-sm mb-4" style={{ color: '#666' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#f0f0ed', color: '#777c49', border: '1px solid #777c49' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#3a110d' }}>¡Hablemos!</h2>
          <p className="mb-8 text-lg" style={{ color: '#666' }}>
            Si tienes proyectos desafiantes en DevSecOps, Cloud o desarrollo backend, me encantaría conocer sobre ellos.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:Jenniffer.cevallosy@outlook.com" className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-90 text-white" style={{ backgroundColor: '#777c49' }}>
              📧 Enviar Email
            </a>
            <a href="https://ec.linkedin.com/in/jenniffer-cevallos-yagual-5b306b110" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-80 border" style={{ borderColor: '#3a110d', color: '#3a110d' }}>
              💼 LinkedIn
            </a>
            <a href="https://github.com/jicycode" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg font-semibold transition hover:opacity-80 border" style={{ borderColor: '#3a110d', color: '#3a110d' }}>
              🐙 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t" style={{ backgroundColor: '#ffffff', borderTopColor: '#777c49' }}>
        <div className="max-w-6xl mx-auto text-center text-sm" style={{ color: '#666' }}>
          <p>© 2024 JENNIFFER CEVALLOS - Ingeniera DevSecOps. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
