// User profile data as a JS object. Uses template strings for multi-line HTML fields.
const PROFILE = {
  "FullName": "Jannes Houben",
  "Residence": "Zonhoven",
  "LinkedIn": "https://www.linkedin.com/in/jannes-houben-56414512b/",
  "Title": "ProRail Silver II",
  "Competences": [
    {"Title": "Teamwork", "Description": "Bij FOD Mobiliteit heb ik als Mendix Developer in een team van vier personen gewerkt aan het Medicert-project. Tijdens het project hebben we in complexe situaties gebruik gemaakt van pair programming, wat heeft geleid tot de ontwikkeling van hoogwaardige software."},
    {"Title": "Oplossingsgericht", "Description": "Ik kan problemen herkennen en een plan bedenken om deze op te lossen. Door Scrum toe te passen komen problemen snel aan het licht. Het tweewekelijkse demo-moment zorgt ervoor dat wijzigingen snel kunnen worden doorgevoerd en foute software kan worden vermeden."},
    {"Title": "Communicatief", "Description": "Als Lead Developer bij YPTO heb ik ons ontwikkelingsproces geoptimaliseerd met behulp van Scrum door samen te werken met de Product Owner. Ik stelde een instructievideo voor GPRI-gebruikers voor, wat leidde tot een snellere begripsvorming tijdens de training."},
    {"Title": "Leiderschap", "Description": "Ik ondersteun mijn teamleden graag bij hun uitdagingen. Ik streef ernaar een voorbeeld te zijn voor anderen om zichzelf steeds te verbeteren en beter te presteren."},
    {"Title": "Creatief", "Description": "Ik ben creatief in het vinden van de beste oplossing voor een probleem. Ik kan out-of-the-box denken en handelen. Bij NMBS waren er grote vertragingen bij de oplevering van het (.NET) backend systeem. Ik nam het initiatief om de backend te bouwen in Mendix."},
    {"Title": "Visionair", "Description": "Ik zie kansen voor de toekomst en denk graag na over de ontwikkeling van nieuwe functionaliteiten of applicaties."}
  ],
  "Educations_2": [
    {"Institute":"ORDINA","Period":"2021","HasDocumentOfProof":true,"Title":"ISTQB - CERTIFIED TESTER FOUNDATION LEVEL","EndYear":2021,"EndMonth":5,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"ORDINA","Period":"2021","HasDocumentOfProof":true,"Title":"BPMN PRO","EndYear":2021,"EndMonth":5,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"ORDINA","Period":"2021","HasDocumentOfProof":true,"Title":"SCRUM FUNDAMENTALS CERTIFIED","EndYear":2021,"EndMonth":5,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"UDEMY","Period":"2020","HasDocumentOfProof":true,"Title":"USER EXPERIENCE AND INTERFACE DESIGN","EndYear":2020,"EndMonth":12,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"TALENT TO GROW","Period":"2019","HasDocumentOfProof":false,"Title":"COMMUNICATION","EndYear":2019,"EndMonth":8,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"PXL","Period":"2018","HasDocumentOfProof":true,"Title":"TOEGEPASTE INFORMATICA","EndYear":2018,"EndMonth":9,"StartYear":2014,"StartMonth":9,"CurrentlyStudying":false,"EducationType":"Schooling"},
    {"Institute":"ORDINA","Period":"2019","HasDocumentOfProof":false,"Title":"INLEIDING TOT HP ALM","EndYear":2019,"EndMonth":8,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"ORDINA","Period":"2019","HasDocumentOfProof":false,"Title":"FUNCTIONAL ANALYSIS","EndYear":2019,"EndMonth":8,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"PluralSight","Period":"","HasDocumentOfProof":false,"Title":"JavaScript","StartYear":0,"StartMonth":0,"CurrentlyStudying":true,"EducationType":"Course"},
    {"Institute":"Ordina","Period":"","HasDocumentOfProof":false,"Title":"Mendix Competence Meeting","StartYear":0,"StartMonth":0,"CurrentlyStudying":true,"EducationType":"Course"},
    {"Institute":"Mendix","Period":"2025","HasDocumentOfProof":false,"Title":"Agentic AI","EndYear":2025,"EndMonth":6,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"Sopra Steria","Period":"2025","HasDocumentOfProof":false,"Title":"AI Agents - Agentic frameworks","EndYear":2025,"EndMonth":5,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"Sopra Steria","Period":"2025","HasDocumentOfProof":false,"Title":"LLM agents in VR/AR","EndYear":2025,"EndMonth":4,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"Mendix","Period":"2023","HasDocumentOfProof":true,"Title":"Mendix Expert","EndYear":2023,"EndMonth":2,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"Sopra Steria","Period":"2023","HasDocumentOfProof":false,"Title":"Software architecture","EndYear":2023,"EndMonth":1,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"Universale","Period":"2022","HasDocumentOfProof":false,"Title":"Coaching skills","EndYear":2022,"EndMonth":11,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"Ordina Academy","Period":"2022","HasDocumentOfProof":false,"Title":"Scrum Master","EndYear":2022,"EndMonth":6,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"},
    {"Institute":"Ordina","Period":"2019","HasDocumentOfProof":true,"Title":"Lean Six Sigma - Certified Yellow Belt","EndYear":2019,"EndMonth":9,"StartYear":0,"StartMonth":0,"CurrentlyStudying":false,"EducationType":"Course"}
  ],
  "Languages": [
    {"Title":"Nederlands","ProficiencyVerbal_Int":5,"ProficiencyWritten_int":5},
    {"Title":"Frans","ProficiencyVerbal_Int":1,"ProficiencyWritten_int":1},
    {"Title":"Engels","ProficiencyVerbal_Int":4,"ProficiencyWritten_int":4}
  ],
  "Categorys": [
    {"Name":"Kennisgebied","Specializations":[{"KnowledgeLevelInt":2,"Title":"FUNCTIONAL ANALYST","YearsOfExperience":0},{"KnowledgeLevelInt":3,"Title":"COMMUNICATION","YearsOfExperience":2},{"KnowledgeLevelInt":4,"Title":"Analytic Thinking","YearsOfExperience":5}]},
    {"Name":"Tools","Specializations":[{"KnowledgeLevelInt":4,"Title":"MENDIX","YearsOfExperience":1},{"KnowledgeLevelInt":4,"Title":"VISUAL STUDIO CODE","YearsOfExperience":0},{"KnowledgeLevelInt":2,"Title":"ADOBE XD","YearsOfExperience":1},{"KnowledgeLevelInt":1,"Title":"Eclipse","YearsOfExperience":0},{"KnowledgeLevelInt":4,"Title":"Jira","YearsOfExperience":3},{"KnowledgeLevelInt":3,"Title":"Notepad++","YearsOfExperience":3},{"KnowledgeLevelInt":4,"Title":"Postman","YearsOfExperience":3},{"KnowledgeLevelInt":2,"Title":"Confluence","YearsOfExperience":0},{"KnowledgeLevelInt":4,"Title":"api","YearsOfExperience":5},{"KnowledgeLevelInt":1,"Title":"Azure Pipelines","YearsOfExperience":1},{"KnowledgeLevelInt":3,"Title":"Jenkins","YearsOfExperience":2}]},
    {"Name":"Methoden","Specializations":[{"KnowledgeLevelInt":3,"Title":"ISTQB FOUNDATION","YearsOfExperience":2},{"KnowledgeLevelInt":3,"Title":"Agile","YearsOfExperience":3},{"KnowledgeLevelInt":3,"Title":"BPMN","YearsOfExperience":1},{"KnowledgeLevelInt":3,"Title":"Extreme Programming (XP)","YearsOfExperience":1},{"KnowledgeLevelInt":4,"Title":"REST","YearsOfExperience":3}]},
    {"Name":"Vakkennis","Specializations":[{"KnowledgeLevelInt":2,"Title":"UX/UI","YearsOfExperience":0},{"KnowledgeLevelInt":4,"Title":"Uitschrijven user stories","YearsOfExperience":4},{"KnowledgeLevelInt":4,"Title":"Applicatie ontwikkeling","YearsOfExperience":6},{"KnowledgeLevelInt":3,"Title":"GxP","YearsOfExperience":1}]},
    {"Name":"Beveiliging","Specializations":[{"KnowledgeLevelInt":3,"Title":"SSO (SAML, OPENIDCONNECT, MENDIXSSO)","YearsOfExperience":1},{"KnowledgeLevelInt":4,"Title":"ADFS/LDAP/SSO (SAML componenten)","YearsOfExperience":1},{"KnowledgeLevelInt":4,"Title":"SAML","YearsOfExperience":3},{"KnowledgeLevelInt":3,"Title":"JWT","YearsOfExperience":1},{"KnowledgeLevelInt":3,"Title":"Client certificates","YearsOfExperience":1}]},
    {"Name":"Branche","Specializations":[{"KnowledgeLevelInt":4,"Title":"IT Diensten","YearsOfExperience":5},{"KnowledgeLevelInt":2,"Title":"Overheid & Openbare besturen","YearsOfExperience":1},{"KnowledgeLevelInt":2,"Title":"Overheid/Publiek","YearsOfExperience":1},{"KnowledgeLevelInt":3,"Title":"Automobielsector","YearsOfExperience":0},{"KnowledgeLevelInt":3,"Title":"Farmaceutica","YearsOfExperience":1}]},
    {"Name":"Pakketten","Specializations":[{"KnowledgeLevelInt":1,"Title":"MS Project","YearsOfExperience":0}]},
    {"Name":"Programmeertalen","Specializations":[{"KnowledgeLevelInt":2,"Title":"PL/SQL","YearsOfExperience":1},{"KnowledgeLevelInt":1,"Title":"Java","YearsOfExperience":1},{"KnowledgeLevelInt":4,"Title":"JSON","YearsOfExperience":3},{"KnowledgeLevelInt":3,"Title":"XML","YearsOfExperience":3},{"KnowledgeLevelInt":1,"Title":"JavaScript","YearsOfExperience":0}]},
    {"Name":"Frameworks","Specializations":[{"KnowledgeLevelInt":1,"Title":":.NET 4","YearsOfExperience":1},{"KnowledgeLevelInt":4,"Title":"SSO","YearsOfExperience":4}]},
    {"Name":"Productkennis","Specializations":[{"KnowledgeLevelInt":1,"Title":"CICD","YearsOfExperience":1}]},
    {"Name":"Businesskennis","Specializations":[{"KnowledgeLevelInt":2,"Title":"GDPR","YearsOfExperience":1}]}
  ],
  "Employments": [
    {
      "Function":"Mendix developer",
      "Employer":"Ordina Belgium N.V.",
      "Organization":"YPTO",
      "Period":"03-2021 T/M HEDEN",
      "Situation": `Jannes heeft als Lead Developer, samen met een team van 3 backend developers (.NET), een analist en een UX/UI designer gewerkt aan een project genaamd GPRi. Deze applicatie wordt gebruikt om de theoretische kennis van treinbestuurders te toetsen op basis van zijn competenties.  De reeds bestaande applicatie genaamd GPR is gebouwd in Access en moet gebruiksvriendelijker, mooier en beter worden gebouwd in Mendix.`,
      "Task": `<p>Initieel bestond mijn taak uit het bouwen van de frontend van de applicatie in Mendix. Omwille van enkele problemen ben ik lead developer geworden. Dit houdt in dat ik:&nbsp;</p>

<ul>
	<li>verantwoordelijk was voor de ontwikkeling van de frontend.</li>
	<li>het backend team moest adviseren met betrekking tot mogelijke optimalisaties, REST-services die niet goed gebouwd waren en datastructuren die geoptimaliseerd konden worden.</li>
	<li>de UX/UI’er advies moest geven met betrekking tot de designs. Deze moesten aanleunen bij de standaard Mendix functionaliteit.</li>
	<li>de analysedocumenten van de analist ging nakijken. Hierbij gaf ik feedback over optimalisaties (elementen die volledig geoptimaliseerd kunnen worden), onduidelijkheden en nieuwe mogelijkheden.<br />
	&nbsp;</li>
</ul>

<p>Tijdens het ontwikkelwerk heb ik nauw samengewerkt met de Product Owner om zo vanaf het begin de juiste oplossing te ontwikkelen. Indien ik vragen, opmerkingen of een nieuw voorstel had, nam ik onmiddellijk contact op met de Product Owner om dit te bekijken.</p>

<p>Bij GPRi was het belangrijk dat de eindgebruikers een training kregen. Mijn voorstel was om een kort introductiefilmpje te maken met een duidelijke uitleg van het proces binnen de applicatie.</p>`,
      "Result": `Administrators kunnen voortaan gemakkelijk vragen, antwoorden en examens aanmaken en linken aan specifieke competenties. Op basis het gekozen type examen krijgt de admin een bepaald scherm te zien. Indien het type van het examen een "permanente opleiding" is dan moet de Instructeur de test toewijzen aan 1 of meer treinbestuurders. Indien het een trimestrieel examen is, dan moeten er automatisch vragen toegewezen worden aan het examen op basis van de competenties van de bestuurder. Dit omdat niet alle bestuurders dezelfde kennis nodig hebben. Ten slotte kunnen de treinbestuurders hun examens invullen en indienen.`,
      "Specialization":"Java, Visual Studio Code, ISTQB Foundation, Postman, Mendix, Adobe XD, UX/UI, SSO (SAML, OpenIDConnect, MendixSSO)",
      "EndYear":"2121",
      "StartYear":"2021"
    },
    {
      "Function":"Mendix developer",
      "Employer":"Ordina Belgium",
      "Organization":"CONTINENTAL",
      "Period":"01-2021 T/M 01-2021",
      "Situation": `Continental (Mechelen) wilde een Lotus Notes applicatie vervangen door een Mendix Applicatie. Bij dit kort project was het belangrijk dat er heel goed samengewerkt werd tussen de developers enerzijds en de business anderzijds.`,
      "Task": `<p>Na ongeveer 5 dagen ontwikkelwerk in Mendix heeft Jannes Houben samen met 1 collega een tool ontwikkeld met de volgende functionaliteiten: &nbsp;</p>

<ul>
	<li>Integratie met de Continental StarterApp &nbsp;voor User Management (SSO a.d.h.v. OpenIDConnect) &nbsp;</li>
	<li>Een formulier met validatie, automatisch ingevulde gebruikersdata en waar masterdata gebruikt kan worden. &nbsp;</li>
	<li>Document generatie met een barcode die gescand kan worden.</li>
	<li>Masterdata die beheerd kan worden door een Administrator</li>
	<li>Automatische mailing wanneer een formulier ingediend wordt.</li>
	<li>Logging op aanpassingen die in een formulier gebeuren</li>
</ul>`,
      "Result": `Door heel nauw samen te werken met de Product Owner (PO) hebben Patrick en ik de applicatie zeer snel kunnen bouwen. Bij dit project was het zeer belangrijk om snel feedback te ontvangen van de PO. Indien we vragen hadden belde we de PO op, vervolgens gaven we hem een korte demo over datgeen waar we een vraag over had zodat de PO snel een antwoord kon geven of feedback aan de business kon vragen.`,
      "Specialization":"Visual Studio Code, ISTQB Foundation, Mendix, Adobe XD, UX/UI, SSO (SAML, OpenIDConnect, MendixSSO)",
      "EndYear":"2021",
      "StartYear":"2021"
    },
    {
      "Function":"Mendix developer",
      "Employer":"Ordina Belgium",
      "Organization":"FOD MOBILITEIT",
      "Period":"05-2020 T/M 10-2020",
      "Situation": `Jannes werkte als Mendix Developer en UX&UI Designer samen met een team van vier aan een overkoepelend project genaamd Minerva. Een van deze sub projecten is Medicert:  deze applicatie wordt gebruikt door binnenlandse en buitenlandse artsen/assistenten om zeevaarders medisch te keuren. Alsook moet de applicatie het voortaan onmogelijk maken om onbeperkt medisch onderzocht te worden door diverse artsen (shopping gedrag).`,
      "Task": `<p>Het systeem maakt gebruik van het Enig Loket (Oracle) om de persoonlijke data van de zeevaarders op te halen. De applicatie geeft de arts de mogelijkheid om een formulier in te vullen en een pdf te genereren (medisch certificaat) met dynamische data. Alle data wordt opgestuurd naar het Enig Loket via REST API. Op een maand tijd hebben Jannes en het team een Mendix app ontwikkeld die gebruik maakt van een micro-app architectuur. Dit om de app beter te kunnen onderhouden en gemakkelijker te kunnen migreren naar nieuwere versies in de toekomst.</p>

<p>Binnen deze applicatie heb ik gewerkt aan: &nbsp;</p>

<ul>
	<li>Beveiliging &nbsp;</li>
	<li>SAML (SSO) ten behoeve van&nbsp;authenticatie &nbsp;</li>
	<li>Automatische document creatie (pdf, Excel, CSV) &nbsp;</li>
	<li>Automatische mailing &nbsp;</li>
	<li>Databeheer &nbsp;</li>
	<li>Microapp architectuur &nbsp;</li>
	<li>REST API &nbsp;</li>
	<li>Automatisch events &nbsp;</li>
	<li>Database migratie &nbsp;</li>
	<li>Logging</li>
</ul>`,
      "Result": `Het resultaat kan u hier bekijken:\nhttps://www.youtube.com/watch?v=1qCOdvuTCYM  `,
      "Specialization":"Java, Visual Studio Code, ISTQB Foundation, Postman, Mendix, Adobe XD, UX/UI, SSO (SAML, OpenIDConnect, MendixSSO)",
      "EndYear":"2020",
      "StartYear":"2020"
    },
    {
      "Function":"Mendix developer",
      "Employer":"Ordina Belgium",
      "Organization":"FOD MOB",
      "Period":"08-2020 T/M 10-2020",
      "Situation": `Als mendix developer werkte ik met een team van vier (andere leden waren een architect, een Mx Expert en een Mendix Rapid developer) aan een overkoepelend project genaamd Minerva. Eén van deze sub projecten is Gordeldracht. Dit was een reeds bestaande Access applicatie die moest omgebouwd worden in Mendix omdat hij niet meer te onderhouden was. `,
      "Task": `<p>Bij het gebruik van de applicatie kan een burger zich aanmelden met zijn e-ID (elektronische identiteitskaart) en een aanvraag maken voor een vrijstelling van de gordeldracht. Dit kan hij ook voor iemand anders als hij het rijksregisternummer, e.a. gegevens van de burger heeft. De aanvraag komt bij een administratieve bediende die deze aanvraag zal controleren op geldigheid aan de hand van een meegeleverd medische attest. De bediende kan deze goed- of afkeuren. Momenteel maakt men gebruik van een lokale printer maar alle goedgekeurde vrijstellingen zijn via REST API ter beschikking van de toekomstige drukker.</p>

<p>Binnen deze applicatie heb ik gewerkt aan:</p>

<ul>
	<li>Beveiliging</li>
	<li>SAML (SSO)&nbsp;ten behoeve van authenticatie</li>
	<li>Automatische document creatie (pdf, Excel, CSV)</li>
	<li>Automatische mailing</li>
	<li>Databeheer</li>
	<li>Microapp architectuur</li>
	<li>REST API’s ten behoeve van datauitwisseling tussen de verschillende modules</li>
	<li>Automatisch events </li>
	<li>Database migratie</li>
	<li>AuditTrail</li>
	<li>Logging</li>
</ul>

<p>Werkwijze:&nbsp;<br />
Door agile te werken en gebruik te maken van Design Thinking hebben we een gebruiksvriendelijke applicatie kunnen opleveren.&nbsp;</p>`,
      "Result": `De applicatie staat momenteel in productie. Op dit moment kunnen enkel de administratieve assistenten van de federale overheidsdienst mobiliteit (FOD MOB) de vrijstellingen invoeren en genereren. De burger kan (zoals vroeger) de nodige documenten opsturen naar FOD MOB en vervolgens kan een administratieve assistent de nodige acties ondernemen in de applicatie.\nIn de toekomst zal er nog een uitbreiding ontwikkeld worden waarbij de burger de documenten digitaal zal kunnen versturen. Dit zat echter nog niet in de scope van de eerste release.`,
      "Specialization":"Visual Studio Code, Postman, Mendix, Adobe XD, UX/UI, SSO (SAML, OpenIDConnect, MendixSSO)",
      "EndYear":"2020",
      "StartYear":"2020"
    },
    {
      "Function":"Mendix developer",
      "Employer":"Ordina Belgium N.V.",
      "Organization":"CONTINENTAL",
      "Period":"02-2021 T/M 03-2021",
      "Situation": `Continental België gebruikt een Lotus Notes applicatie voor het registreren van de workflow rondom wijzigingen aan het productie proces. Omdat Lotus Notes binnen Continental wordt geschrapt, is het noodzakelijk om dit proces in een nieuwe applicatie over te zetten. Daarbij biedt dit meteen de mogelijkheid om verbeteringen door te voeren, voornamelijk in de vorm van gebruiksvriendelijkheid, zodat het werken met de nieuwe applicatie sneller kan. `,
      "Task": `<p>Door gebruik te maken van Design thinking hebben we een Mendix applicatie kunnen bouwen waarin nieuwe “First production runs” aangemaakt kunnen worden. Binnen dit proces moeten de nodige personen automatisch geïnformeerd worden via email. In deze email zit een link naar de “First Production Run” zodat de medewerkers met 1 klik op de knop de juiste data te zien krijgen. Daarnaast is het ook van belang dat er documenten gegenereerd kunnen worden. Ten behoeve van de authenticatie werd de connectie gelegd met de CLAP StarterApp waarin het user management beheer plaatsvindt.</p>

<p>Werkwijze:<br />
Door agile te werken (iteratief een increment bouwen) hebben we op korte tijd een applicatie kunnen bouwen die volledig voldoet aan de eisen van de klant.</p>`,
      "Result": `De First Production Run applicatie is een responsive webapplicatie waarin de verschillende relevante afdelingen hun proces kunnen registreren rondom de production run. Voor vijf verschillende processen zijn er formulieren beschikbaar, waaronder ventielen en sensoren. De verschillende afdelingen hebben toegang tot een specifiek deel van de formulieren en via automatisch gegenereerde emails worden de juiste mensen op de juiste momenten geïnformeerd. Er kan ook een PDF gegenereerd worden waarin alle ingevulde informatie is opgenomen.`,
      "Specialization":"Visual Studio Code, ISTQB Foundation, Mendix, UX/UI, SSO (SAML, OpenIDConnect, MendixSSO)",
      "EndYear":"2021",
      "StartYear":"2021"
    },
    {
      "Function":"Mendix developer",
      "Employer":"Ordina Belgium",
      "Organization":"FOD MOB",
      "Period":"05-2020 T/M 10-2020",
      "Situation": `Een van deze sub projecten is de StarterApplicatie:  Deze applicatie dient als templates voor het maken van de nieuwe applicaties. Deze bevat essentiële modules om vlot te beginnen. (Mailing, SAML, Logging, AuditTrail en andere)`,
      "Task": `<p>In de starterapp heb ik gewerkt aan de volgende functionaliteiten:</p>

<ul>
	<li>Beveiliging</li>
	<li>SAML/SSO t.b.v. authenticatie</li>
	<li>REST API voor connectie met Titularis (voor het ophalen van persoonsgegevens).</li>
	<li>Automatische mailing (configuratie)</li>
	<li>Microapp architectuur</li>
	<li>AuditTrail</li>
	<li>Logs</li>
</ul>`,
      "Result": `De StarterApp kan gebruikt worden als template voor het bouwen van nieuwe web applicaties. (Ieder project voor FOD MOB wordt gemaakt aan de hand van deze StarterApp)`,
      "Specialization":"Visual Studio Code, Mendix, Adobe XD, UX/UI, SSO (SAML, OpenIDConnect, MendixSSO)",
      "EndYear":"2020",
      "StartYear":"2020"
    }
  ],
  "WhyMe": {
    "Function": "Mendix expert",
    "Description": `Als Mendix-expert ben ik ervan overtuigd dat ik in staat ben om hoogwaardige applicaties te ontwikkelen die aan uw behoeften voldoen.

Wat mij onderscheidt is mijn vermogen om effectief te communiceren en kritisch te denken met belangrijke belanghebbenden gedurende het hele ontwikkelingsproces. Ik ben toegewijd om uw zakelijke behoeften te begrijpen en ervoor te zorgen dat het eindproduct uw doelen bereikt.

In mijn vrije tijd geniet ik van het spelen van voetbal en actief blijven. Dit helpt mij om een frisse kijk te behouden en energiek te blijven bij het aanpakken van complexe ontwikkelingsuitdagingen.`
  }
};
