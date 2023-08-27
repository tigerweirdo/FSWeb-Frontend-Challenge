import linkedin from "../Brands/Header/LinkedIn.png";
import github from "../Brands/Header/github.png";
import image from "../Brands/Header/foto (1).svg";
import js from "../Brands/Body/Skills/js-logo 1 (2).png";
import react from "../Brands/Body/Skills/react.png";
import reduxlogo from "../Brands/Body/Skills/reduxlogo.png";
import node from "../Brands/Body/Skills/node-logo 1 (1).png";
import vscode from "../Brands/Body/Skills/vscode.png";
import figma from "../Brands/Body/Skills/figma-logo 1 (1).png";
import img1 from "..//Brands/Body/Projects/img1.png";
import img2 from "..//Brands/Body/Projects/img2.png";

export function Email(params) {
  return (
    <>
      Currently <span style={{ color: "#AF0C48" }}>Freelancing </span> for
      <span style={{ color: "#AF0C48" }}> UX, UI, & Web Design</span> Project .
      Invite me to join your team -
      <span style={{ color: "#AF0C48" }}> fordprefect@gmail.com</span>
    </>
  );
}
export function Email2(params) {
  return (
  <>
  Şu anda <span style={{ color: "#AF0C48" }}>UX, UI ve Web Tasarımı</span> projeleri için <span style={{ color: "#AF0C48" }}>serbest  olarak çalışıyorum</span>. Ekibinize katılmam için davet edebilirsiniz -
  <span style={{ color: "#AF0C48" }}> fordprefect@gmail.com</span>
  </>
  );
  }

export const HeaderData = {
  en: [
    {
      hi: "Hi! 👋",
      content:
        "I’m Ford. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
      headerBrands: { linkedin: linkedin, github: github, image: image },
    },
  ],
  tr: [
    {
      hi: "Merhaba! 👋",
      content:
        "Ben Ford. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünler geliştirebilirim. Tanışalım!",
      headerBrands: { linkedin: linkedin, github: github, image: image },
    },
  ],
};

export const Skills = [
  {
    software: "JAVASCRIPT",
    url: js,
  },
  { software: "REACT", url: react },
  { software: "REDUX", url: reduxlogo, stil: { backgroundColor: "#764ABC" } },
  { software: "NODE", url: node },
  {
    software: "VS CODE",
    url: vscode,
    stil: { backgroundColor: "#038FD6" },
  },
  { software: "FIGMA", url: figma },
];
export const profileSearch = {
  en: {
    date: "Birth Date",
    place: "Residence City",
    educationStatus: "Education Status",
    choseRol: "Preferred Role",
  },
  tr: {
    date: "Doğum Tarihi",
    place: "İkamet Şehri",
    educationStatus: "Eğitim Durumu",
    choseRol: "Tercih Ettiği Rol",
  },
};

export const profileInformation = {
  en: {
    date: "16.07.1949",
    adress: "Betelgeuse Five",
    education: "PHD",
    chose: "Full-stack",
  },
  tr: {
    date: "16.07.1949",
    adress: "Betelgeuse Five",
    education: "Doktora",
    chose: "Full-stack",
  },
};
export const profileAboutMe = {
  en: [
    {
      about:
        " tempoributione soluta aperiam sit voluptate? Dicta quod deserunt quam",
      includes:
        "Lorem ipsum, dolor sit amet consectetuptate? Dicta quod deserunt quam",
    },
  ],
  tr: [
    {
      about:
        " tempoributione soluta aperiam sit voluptate? Dicta quod deserunt quam",
      includes:
        "Lorem ipsum, dolor sit amet consectetuptate? Dicta quod deserunt quam",
    },
  ],
};
export const profilePageText = {
  en: {
    profileTitle: "Profile",
    basicInformation: "Basic Information",
    aboutMe: "About Me",
    projects:"Projects"

  },
  tr: {
    profileTitle: "Profil",
    basicInformation: "Temel Bilgiler",
    aboutMe: "Hakkımda",
    projects: "Projeler"
  },
};



export const projects = [
  {
    title: "Random Jokes",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    software: ["react", "vercel", "axios", "router", "redux"],
    github: "View on Github",
    app: "Go to APP",
    url: img1,
   // stil: { backgroundColor: " #DDEEFE" },
   
  },
  {
    title: "Are you Bored",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    software: ["react", "redux", "axios", "router", "vercel"],
    github: "View on Github",
    app: "Go to APP",
    url: img2,
   // stil: { backgroundColor: "#D9F6F1" },
  },
];
export const footer = {
  en: {
    slogan: "Let’s work together on your next product.",
    github: { title: "Github", stil: { color: "#1769FF" } },
    personalBlog: "Personal Blog",
    linkedin: { title: "LinkedIn", stil: { color: "#0077B5" } },
    Email: { title: "Email", stil: { color: "#AF0C48" } },
  },
  tr: {
    slogan: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    github: { title: "Github", stil: { color: "#1769FF" } },
    personalBlog: "Kişisel Blog",
    linkedin: { title: "LinkedIn", stil: { color: "#0077B5" } },
    Email: { title: "E-Posta", stil: { color: "#AF0C48" } },
  },
};

