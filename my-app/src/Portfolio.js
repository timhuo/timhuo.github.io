import icspark from "./img/icspark.png";
import torch from "./img/torch.png";
import ecocamino from "./img/ecocamino.png";
import hmarcamino from "./img/hmarcamino.png";
import broadband from "./img/broadband.png";
import lahianasim from "./img/lahainasim.png";
import tadish from "./img/tadish.png";
import halemade from "./img/halemade.png";
import mejiro from "./img/mejiro.png";
import h2k from "./img/h2k.png";

const _BIO = {
    name: "Timothy Huo",
    summary: "I recently graduated with an M.S. in Computer Science from the University of Hawaii at Manoa, with a strong passion for Software Engineering, Artificial Intelligence, and Technology Education.",
    profilePicture: "https://github.com/timothyhuo1.png",
    email: "thuo@hawaii.edu",
    github: "https://github.com/timothyhuo1",
    linkedin: "https://www.linkedin.com/in/timothy-huo/",
    education: [
        {
            _id: 1,
            institution: "University of Hawaii at Mānoa",
            logoURL:
                "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
            field: "Computer Science",
            degree: "M.S.",
            startDate: "Aug 2022", // Enter valid date format
            endDate: "May 2024", // Enter valid date format
            gpa: "",
            summary: "", // Optional
            organizations: [], // Optional
        },
        {
            _id: 2,
            institution: "University of Hawaii at Mānoa",
            logoURL:
                "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
            field: "Computer Science",
            degree: "B.S.",
            startDate: "Aug 2019", // Enter valid date format
            endDate: "May 2023", // Enter valid date format
            gpa: "",
            summary: "", // Optional
            organizations: [], // Optional
        },
    ],
};

const _WORK = [
    {
        _id: 4,
        name: "University of Hawaii at Manoa",
        position: "Research Assistant",
        logoURL: "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
        website: "",
        startDate: "Nov 2023",
        endDate: "Jun 2023",
        summary: "Utilized natural language and machine learning to correlate vulnerabilities with SSVC values and automate CWE labeling of CVEs.",
    },
    {
        _id: 3,
        name: "RVCM (RevaComm)",
        position: "Software Engineer Intern",
        logoURL: "https://media.licdn.com/dms/image/C560BAQHhxPdTNbHcHg/company-logo_200_200/0/1657229945597/revacomm_logo?e=1725494400&v=beta&t=ueQ7vBc86CZ8KhTezy5vJATm64s34DY09IEVnZgTCd4",
        website: "https://www.alethix.com/",
        startDate: "May 2023",
        endDate: "Aug 2023",
        summary: "Developed unit tests, mobile views, and search functionalities using Vue/Vuetify, and created custom Nginx error pages for security.",
    },
    {
        _id: 2,
        name: "DataHouse",
        position: "Software Engineer Intern",
        logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkT2vjbYe4f1-e3OkXd6CjMkBOjVwDlnPZKg&s",
        website: "https://www.datahouse.com/",
        startDate: "Feb 2022",
        endDate: "Aug 2022",
        summary: "Built scalable RESTful APIs with AWS, designed recurring reservations with Python/PostgreSQL, created automated tests, and led scrum meetings for a team of seven.",
    },
    {
        _id: 1,
        name: "University of Hawaii at Manoa",
        position: "NSF Research Intern",
        logoURL: "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
        website: "",
        startDate: "May 2021",
        endDate: "Jul 2021",
        summary: "Developed RadGrad v2.0 to enhance undergraduate experiences, implemented web scrapers with Puppeteer.js, and presented at the 2021 SURE Symposium.",
    },
]

const _VOLUNTEER = [
    {
        _id: 2,
        name: "Technology Outreach Hawaii",
        position: "Director (Jan 2021 - Present), Chief Information Officer (Jan 2021 - Jun 2024)",
        logoURL: torch,
        website: "https://hitorch.org/",
        summary: "A 501(c)3 non-profit leveraging the power of our youth to promote technology education, mentorship, collaboration and service across Hawaii.",
    },
    {
        _id: 1,
        name: "ICSpark",
        position: "President (Jan 2023 - May 2024), Vice-President (Aug 2021 - Dec 2023), Mentor (Sep 2020 - Aug 2021)",
        logoURL: icspark,
        website: "https://icspark.github.io/",
        summary: "A Registered Independent Organization (RIO) at the University of Hawaii at Manoa that offer college student-lead coding programs to youth.",
    },
]

const _PROJECT = [
    {
        _id: 3,
        date: "Jan - June 2024",
        name: "Websites for Local Businesses",
        techstack: "ReactJS, Bootstrap, GitHub",
        logoURL: h2k,
        summary: "Developed websites for local companies to facilitate customer engagement, online ordering, and provide information about the businesses.",
        team: "Timothy Huo",
    },
    {
        _id: 2,
        date: "Aug - Dec 2023",
        name: "Mejiro",
        techstack: "NextJS, MongoDB, Tailwind CSS, GitHub",
        logoURL: mejiro,
        summary: "Mejiro, is a receipt management application, offering automated record-keeping and valuable insights for small organizations",
        team: "Alyssia Chen, Ana Araujo, Giorgio Tran, Timothy Huo",
    },
    {
        _id: 1,
        date: "Jan - May 2022",
        name: "HaleMade",
        techstack: "Android Studio, Firebase, Java, GitHub",
        logoURL: halemade,
        summary: "HaleMade, is a mobile app designed to help small businesses in Hawaii promote themselves and attract local customers through a dedicated, searchable platform.",
        team: "Sophia Elize Cruz, Timothy Huo",
    },
]

const _COMPETITION = [
    {
        _id: 5,
        issueby: "Pacific Asian Center for Entrepreneurship",
        award: "3rd Place in The University of Hawaii Venture Competition (UHVC) 2024",
        date: "Feb - May 2024",
        name: "Tadish",
        techstack: "Dart, Flutter, Firebase, GitHub",
        logoURL: tadish,
        summary: "The UHVC is an intense, semester-long program that provides resources to learn what it takes to be an entrepreneur and start a business venture. Our team of 2 built and pitched Tadish, a mobile application that helps people record dishes they've eaten in order to discover new food based on their food.",
        team: "Alyssia Chen, Timothy Huo",
    },
    {
        _id: 4,
        issueby: "The State of Hawaii Office of Enterprise Technology Services",
        award: "1st Place & Peoples' Choice Award in Hawaii Annual Coding Challenge 2023",
        date: "Nov 2023",
        name: "LahainaSim",
        techstack: "ReactJS, MongoDB, AWS, Bootstrap, Digital Ocean, GitHub",
        logoURL: lahianasim,
        summary: "The Hawaii Annual Coding Challenge (HACC) 2023 was a month-long hackathon. Our team of 5 built LahainaSim, an interactive web application designed to foster creativity and community engagement in the aftermath of the devastating wildfires.",
        team: "Edalaine Cadiena, Ethan Chee, Marissa Halim, Michelle Leano, Timothy Huo",
    },
    {
        _id: 3,
        issueby: "The State of Hawaii Office of Enterprise Technology Services",
        award: "3rd Place & Peoples' Choice Award in Hawaii Annual Coding Challenge 2022",
        date: "Nov 2022",
        name: "Broadband Hawaii",
        techstack: "ReactJS, MongoDB, AWS, Bootstrap, Digital Ocean, GitHub",
        logoURL: broadband,
        summary: "The Hawaii Annual Coding Challenge (HACC) 2022 was a month-long hackathon. Our team of 6 built an interactive, accessible online application that encourages people to learn more about the internet and technology.",
        team: "Alvin Edrada, Edalaine Cadiena, Ethan Chee, Jeraldine Joy Milla, Michelle Leano, Timothy Huo",
    },
    {
        _id: 2,
        issueby: "The State of Hawaii Office of Enterprise Technology Services",
        award: "1st Place in Hawaii Annual Code Challenge 2021",
        date: "Nov 2021",
        techstack: "ReactJS, MongoDB, AWS, Semantic UI, Galaxy, GitHub",
        name: "HmarCamino",
        logoURL: hmarcamino,
        summary: "The Hawaii Annual Coding Challenge (HACC) 2021 was a month-long hackathon. Our team of five built HmarCamino, an online reporting platform that helps Hawai’i Marine Animal Response organize sighting reports from the public.",
        team: "Anna Campainha, Daphne Marie Estacio, Jerome Gallego, Michael Gainey, Timothy Huo",
    },
    {
        _id: 1,
        issueby: "Meteor",
        award: "1st Place in International Meteor Hackathon 2021",
        date: "Oct 2021",
        techstack: "ReactJS, MongoDB, AWS, Bootstrap, Galaxy",
        name: "EcoCamino",
        logoURL: ecocamino,
        summary: "The Meteor Hackathon 2021 spanned five days and challenged teams to create an impactful application using the Meteor Framework. Our team of five built EcoCamino, a community application to help organize events and facilitate communication through forums.",
        team: "Anna Campainha, Daphne Marie Estacio, Jerome Gallego, Michael Gainey, Timothy Huo",
    },
]

const _PORTFOLIO = {
    _BIO,
    _WORK,
    _VOLUNTEER,
    _PROJECT,
    _COMPETITION,
}

export default _PORTFOLIO;