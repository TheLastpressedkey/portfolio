export const navItems = [
  { name: "A propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Témoignages", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Je privilégie la collaboration client et encourage une communication ouverte",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible dans la gestion des fuseaux horaires pour une meilleure coordination",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mon Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Blog personnel",
    des: "Découvrez mon espace personnel où je partage des articles sur l'innovation, la technologie et mes réflexions sur l'impact des nouvelles tendances.",
    img: "/bs.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/apps.huguesfrantz.com/",
  },
{
  id: 2,
  title: "CRM - Energies Propres de France",
  des: "CRM conçu sur mesure lors de mon stage de Master pour Energies Propres de France. Cette plateforme optimise les processus internes, facilite la gestion des équipes, et centralise les opérations de prospection et marketing grâce à une interface intuitive et des fonctionnalités sur mesure.",
  img: "/eepf.svg",
  iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  link: "/crm.energie-epf.fr/v1/index.php/signin",
},
  {
    id: 3,
    title: "Gallery 2.0 @kvption",
    des: "Galerie d'art en ligne intégrant des fonctionnalités d'IA, un système de paiements et crédits pour les artistes et collectionneurs.",
    img: "/kvption.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/kvption.vercel.app/",
  },
  {
    id: 4,
    title: "VFP - Consult",
    des: "Site web dynamique pour VFP Consult, un cabinet de conseil stratégique offrant des solutions de gestions des marchés publics.", 
    img: "/vfpnew.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/vfp-consult.com/",
  },
];


export const testimonials = [
  {
    quote:
      "En tant que responsable de stage, j&apos;ai eu l&apos;occasion de travailler avec Hugues pendant 3 ans sur des missions de business development de mon entreprise. Hugues a su concilier ses acquis théoriques aux activités de mon entreprise pour faire un diagnostic de notre activité, identifier les leviers d&apos;optimisation et proposer des solutions adaptées à nos besoins de digitalisation. Son approche structurée et son efficacité ont permis de fluidifier nos opérations.",
    name: "David Maman",
    title: "CEO Energies Propres de France",
  },
  {
    quote:
      "J&apos;ai eu l&apos;occasion d&apos;être le responsable de Hugues à l&apos;occasion de ses missions de reporting IT et gestion de projet au sein de Casino France. Il a fait preuve d&apos;une grande autonomie et d&apos;un sens de l&apos;organisation exemplaire. Sa capacité à gérer des projets complexes tout en respectant les délais et les contraintes techniques a été un atout majeur pour l&apos;équipe.",
    name: "Jean Bernard ESTIENNY",
    title: "Directeur travaux et maintenance Distribution Casino France",
  },
  {
    quote:
      "En tant qu&apos;étudiant en Master 1 Management de l&apos;Innovation, Hugues a montré une réelle capacité à innover et à mener des projets complexes. Sa curiosité, son dynamisme et son approche analytique font de lui un atout majeur dans n&apos;importe quelle équipe. Il a su allier théorie et pratique avec rigueur et créativité.",
    name: "Judith Favereau",
    title: "Maître de conférences, Responsable master 1 Management innovation Université Lyon 2",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Co-fondateur - Prometheus SARL",
    desc: "Gestion de projets de digitalisation, diagnostic d'activités pour la transformation digitale, conception et développement de solutions logicielles sur mesure.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
   {
    id: 2,
    title: "Chargé de Mission Reporting & Q/A - Groupe Casino",
    desc: "Suivi informatique et analyse financière, reporting et analyse des marchés pour optimiser les performances des équipes et des systèmes.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Assistant Juridique",
    desc: "Réalisation de veilles stratégiques, traitement des dossiers de litiges, et assistance auprès des avocats dans la gestion des dossiers.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
    {
    id: 4,
    title: "Développeur Freelance Fullstack",
    desc: "Conception et développement d'applications web et mobiles complètes, de la phase de conception à la mise en production, en utilisant des technologies frontend et backend.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
