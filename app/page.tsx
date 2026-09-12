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
                 <img 
                  src="data:image/jpeg;base64,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" 
                  alt="Foto"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
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
