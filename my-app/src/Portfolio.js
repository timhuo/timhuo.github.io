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
            degree: "Master of Science",
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
            field: "Information and Computer Science",
            degree: "Bachelor of Science",
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
        position: "Research Intern",
        logoURL: "https://manoa.hawaii.edu/speakers/wp-content/uploads/logo-1-1030x1030.png",
        website: "",
        startDate: "May 2021",
        endDate: "Jul 2021",
        summary: "Developed RadGrad v2.0 to enhance undergraduate experiences, implemented web scrapers with Puppeteer.js, and presented at the 2021 SURE Symposium.",
    },
]

const _PORTFOLIO = {
    _BIO,
    _WORK
}

export default _PORTFOLIO;