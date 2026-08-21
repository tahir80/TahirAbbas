/* ============================================================
   PUBLICATIONS DATA
   ------------------------------------------------------------
   To add a new publication: copy one object below, edit the
   fields, and add it to the top of the PUBLICATIONS array
   (newest first). No other file needs to change.

   Fields:
     title      - paper title (string)
     authors    - full author list, "Tahir Abbas" auto-bolds
     venue      - short venue name shown under the title
     type       - one of: "journal" | "conference" | "workshop"
                  | "preprint" | "software" | "thesis"
                  (controls the colored tag + filter button)
     year       - publication year (number)
     award      - short award text, or null if none
     url        - link to the paper (DOI, OJS, SSRN, etc.), or null
     pdf        - link to a local/alternate PDF, or null
     thumb      - path to a thumbnail image, or null to use the
                  default placeholder (assets/img/pubs/placeholder.svg)
   ============================================================ */

const PUBLICATIONS = [
  {
    title: "The Data-Dollars Tradeoff: Privacy Harms vs. Economic Risk in Personalized AI Adoption",
    authors: "Alexander Erlei, Tahir Abbas, Kilian Bizer, Ujwal Gadiraju",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI) 2026",
    type: "conference",
    year: 2026,
    award: "CHI 2026 Honourable Mention",
    url: "https://doi.org/10.1145/3772318.3791427",
    pdf: null,
    thumb: null
  },
  {
    title: "When Mentalizing Backfires: Role and Timing Constraints on Theory of Mind in Online Persuasion",
    authors: "Tahir Abbas, Bedir Tekinerdogan, Yara Khaluf",
    venue: "Preprint (SSRN)",
    type: "preprint",
    year: 2026,
    award: null,
    url: "https://ssrn.com/abstract=6985746",
    pdf: null,
    thumb: null
  },
  {
    title: "The State of Pilot Study Reporting in Crowdsourcing: A Reflection on Best Practices and Guidelines",
    authors: "Jonas Oppenlaender, Tahir Abbas, Ujwal Gadiraju",
    venue: "Proceedings of the ACM on Human-Computer Interaction (CSCW1) 2024",
    type: "journal",
    year: 2024,
    award: null,
    url: "https://doi.org/10.1145/3641023",
    pdf: null,
    thumb: null
  },
  {
    title: "ContextBot: Improving Response Consistency in Crowd-Powered Conversational Systems for Affective Support Tasks",
    authors: "Yao Ma, Tahir Abbas, Ujwal Gadiraju",
    venue: "ACM Conference on Hypertext and Social Media (HT) 2023",
    type: "conference",
    year: 2023,
    award: null,
    url: null,
    pdf: null,
    thumb: null
  },
  {
    title: "Goal-Setting Behavior of Workers on Crowdsourcing Platforms: An Exploratory Study on MTurk and Prolific",
    authors: "Tahir Abbas, Ujwal Gadiraju",
    venue: "AAAI Conference on Human Computation and Crowdsourcing (HCOMP) 2022",
    type: "conference",
    year: 2022,
    award: null,
    url: "https://ojs.aaai.org/index.php/HCOMP/article/view/21983",
    pdf: null,
    thumb: null
  },
  {
    title: "Understanding User Perceptions of Response Delays in Crowd-Powered Conversational Systems",
    authors: "Tahir Abbas, Ujwal Gadiraju, Vassilis-Javed Khan, Panos Markopoulos",
    venue: "Proceedings of the ACM on Human-Computer Interaction (CSCW2) 2022",
    type: "journal",
    year: 2022,
    award: null,
    url: "https://doi.org/10.1145/3555765",
    pdf: null,
    thumb: null
  },
  {
    title: "Making Time Fly: Using Fillers to Improve Perceived Latency in Crowd-Powered Conversational Systems",
    authors: "Tahir Abbas, Ujwal Gadiraju, Vassilis-Javed Khan, Panos Markopoulos",
    venue: "AAAI Conference on Human Computation and Crowdsourcing (HCOMP) 2021",
    type: "conference",
    year: 2021,
    award: null,
    url: "https://ojs.aaai.org/index.php/HCOMP/article/view/18935",
    pdf: null,
    thumb: null
  },
  {
    title: "TrainBot: A Conversational Interface to Train Crowd Workers for Delivering On-Demand Therapy",
    authors: "Tahir Abbas, Vassilis-Javed Khan, Ujwal Gadiraju, Panos Markopoulos",
    venue: "AAAI Conference on Human Computation and Crowdsourcing (HCOMP) 2020",
    type: "conference",
    year: 2020,
    award: "Selected as Featured Talk, ACM CUI 2021",
    url: "https://ojs.aaai.org/index.php/HCOMP/article/view/7458",
    pdf: null,
    thumb: null
  },
  {
    title: "Investigating the Crowd's Creativity for Creating On-Demand IoT Scenarios",
    authors: "Tahir Abbas, Vassilis-Javed Khan, Panos Markopoulos",
    venue: "International Journal of Human-Computer Interaction, 36(11), 1022-1049",
    type: "journal",
    year: 2020,
    award: null,
    url: "https://doi.org/10.1080/10447318.2019.1709331",
    pdf: null,
    thumb: null
  },
  {
    title: "Crowd of Oz: A Crowd-Powered Social Robotics System for Stress Management",
    authors: "Tahir Abbas, Vassilis-Javed Khan, Ujwal Gadiraju, Emilia Barakova, Panos Markopoulos",
    venue: "Sensors, 20(2), 569",
    type: "journal",
    year: 2020,
    award: null,
    url: "https://doi.org/10.3390/s20020569",
    pdf: null,
    thumb: null
  },
  {
    title: "CoZ: A Crowd-Powered System for Social Robotics",
    authors: "Tahir Abbas, Vassilis-Javed Khan, Panos Markopoulos",
    venue: "SoftwareX, 11, 100421",
    type: "software",
    year: 2020,
    award: null,
    url: "https://doi.org/10.1016/j.softx.2020.100421",
    pdf: null,
    thumb: null
  },
  {
    title: "How Do People Perceive Privacy and Interaction Quality while Chatting with a Crowd-Operated Robot?",
    authors: "Tahir Abbas, Giovanni Corpaccioli, Vassilis-Javed Khan, Ujwal Gadiraju, Emilia Barakova, Panos Markopoulos",
    venue: "Companion of the ACM/IEEE International Conference on Human-Robot Interaction (HRI) 2020",
    type: "conference",
    year: 2020,
    award: "Honourable Mention — Late-Breaking Report (top 1.8%, 3 of 166 submissions)",
    url: null,
    pdf: null,
    thumb: "assets/img/awards/hri2020-honorable-mention.jpg"
  },
  {
    title: "Crowd of Oz: A Crowd-Powered Teleoperation System for Enhanced Human-Robot Conversations",
    authors: "Tahir Abbas, Vassilis-Javed Khan, Ujwal Gadiraju, Emilia Barakova, Panos Markopoulos",
    venue: "Companion of the ACM/IEEE International Conference on Human-Robot Interaction (HRI) 2020",
    type: "conference",
    year: 2020,
    award: null,
    url: null,
    pdf: null,
    thumb: null
  },
  {
    title: "Conversational Systems to Provide On-Demand Psychological Support",
    authors: "Tahir Abbas, Vassilis-Javed Khan, Ujwal Gadiraju, Panos Markopoulos",
    venue: "Workshop at ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW) 2020",
    type: "workshop",
    year: 2020,
    award: null,
    url: null,
    pdf: null,
    thumb: null
  },
  {
    title: "How Creative is the Crowd in Describing Smart Home Scenarios?",
    authors: "Tahir Abbas, Vassilis-Javed Khan, Daniel Tetteroo, Panos Markopoulos",
    venue: "Extended Abstracts of the ACM CHI Conference on Human Factors in Computing Systems 2018",
    type: "conference",
    year: 2018,
    award: null,
    url: null,
    pdf: null,
    thumb: null
  },
  {
    title: "Affective Real-Time Crowd-Powered Conversational Systems",
    authors: "Tahir Abbas",
    venue: "PhD Thesis, Eindhoven University of Technology",
    type: "thesis",
    year: 2022,
    award: null,
    url: null,
    pdf: null,
    thumb: null
  },
  {
    title: "Value-Based Incremental Software Development",
    authors: "Tahir Abbas, Ali Ahsan",
    venue: "17th IEEE International Multi-Topic Conference (INMIC) 2014",
    type: "conference",
    year: 2014,
    award: null,
    url: null,
    pdf: null,
    thumb: null
  }
];
