# Overview

## Learning Goals
See also  overview: 
[https://github.com/michael-spengler/tinf-moderne-konzepte/blob/2138e7594b71256026e7fe09a78034873e68f8a2/moderne-konzepte.jpg](https://github.com/michael-spengler/tinf-moderne-konzepte/blob/2138e7594b71256026e7fe09a78034873e68f8a2/moderne-konzepte.jpg)


### Architectures
Design for Flexibility   
Microservices Architecture (Skalierbarkeit, Resilienz des Gesamtsystems, Technologische Freiheit...) vs. Monlitische Architekturen (... Performance...) - häufig trade-offs.   

Modularität / Orchestrierbarkeit
High Cohesion, Loose Coupling, Separation of Concerns

### Schnittstellendesign & Doku
Konventionen: 
https://eureadresse.tld/api/v1/getCatImage/name/uschi/age/2 (path variable)
https://eureadresse.tld/api/v1/getCatImage?name=uschi&age=2 (query variable)
https://eureadresse.tld/api/v2/getCatImage/...

Swagger / Open Source API Gateway Lösungen / API Management Lösungen / Was gibt's denn schon in der Open Source Szene

Vielleicht die zwei wichtigsten Fragen an Kunden wenn es um Schnittstellendesign geht.
1. Was genau ist Dein Input? 
2. Was genau erwartest Du als Output?

... anhand von einigen Beispielen.

Trade-Offs bewusstmachen & Entscheidungen dokumentieren


### Open Source
Modularität  
Saubere Dokumentation / Testautomatisierung etc.   
https://twitter.com/sapopensource 

### Hackathons 
Als Unternehmen kann das hervorragend für das Marketing sein.  
Als Programmierer kann das hervorragend sein um sich weiterzubilden, sich einen guten Ruf zu erarbeiten etc. 

https://gitcoin.com   


### Deployments
Page provisioning via GitHub Pages  
CI/CD Automatisierung via GitHub Actions  
Docker Containers / Docker Compose Files (Infrastructure as Code --> alles kann unter Versionskontrolle sein sofern ihr "alles" automatisiert)

### Meilensteine der Webprogrammierung
Web 1 statische HTML Seiten mit Links (bis 1994)  
Web 2 dynamische Seiten (hauptsächlich dank Javascript) 
Web 3 dezentrales Web (dezentrale Backends Möglich z.B. via Ethereum Blockchain)

### Laufzeitumgebungen + Programmiersprachen
Deno.land als Nachfolger von NodeJS   
TypeScript als Pionier für JavaScript  
Solidity als Smart Contract Programmiersprache    
...  

### Algorithmen vs. Modellbasierte Lösungen
AI / ML / DL ... jupiter notebooks ...  
NLP (NLU + NLG) Chatbots  

Entscheidung wann Algos wann Modelle?  
Immer wenn klare Rezepte / Algos mit einem überschaubaren Aufwand klar definierbar sind, ist das m.E. die zu bevorzugende Lösung.


### Vorgehensmodelle
Wasserfallmodell  
Spiralmodell  
Agile Modelle (Scrum als businesskasper-variante von extreme programming Testgetriebene Softwareentwicklung - Buchempfehlung: http://xunitpatterns.com)  


### Cloud Service Kategorien
IaaS
PaaS
Saas

--> XaaS


## Example Project - Chatbot

### Learning Goals from Example Project
NLP (NLU + NLG)   
Chatclients + Integration  

### Target Audience
Otto Normal Menschen = Non-Nerds  

### Frontend
Für Demo = Telegram Chat Client  

https://t.me/botfather

### Backend
Entweder NodeJS oder deno.land  

