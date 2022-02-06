// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Separator from "../components/separator" 
import * as styles from '../styles/cv.module.css'

// Step 2: Define your component
const CvPage = ({location}) => {

  React.useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "url(/about.jpg)";
    document.body.style.backgroundPosition = "top center";
    // document.body.style.transition = "background-image 0s";
    // document.body.style.transitionDelay = "0s";
  })

  return (
    <div>
    <Layout pageTitle="Životopis" page={location.pathname}>
        <div className={styles.row}>
          <div className={styles.column}>
            <p style={{paddingBottom:"10px",}}>hudobný skladateľ a pedagóg</p>
            <p>10.6.1944 Žakarovce - 31.3.2021 Košice</p>
            <div >
              <StaticImage
                  alt="Portrait"
                  src="../images/Podpis.png"
              />
            </div>
            <div className={styles.paragraph}>
              <p className="cvintro">Každou niťou svojho života je spätý s východným Slovenskom – tu sa narodil a vyštudoval základy hudby. Neskôr svoje nadobudnuté vedomosti a profesionálne skúsenosti odovzdával svojim žiakom na košickom Konzervatóriu, kde pôsobil 44 rokov. </p>
              <Separator />
              <p>Po ukončení základnej školy v Žakarovciach pokračoval v štúdiu na Jedenásťročnej strednej škole v neďalekej Gelnici, kde súčasne navštevoval aj Hudobnú školu a naďalej sa venoval štúdiu hudby a  napredoval v hre na klavíri i v hudobnej teórii.  Po maturite v roku 1961 bol prijatý na Konzervatórium v Košiciach., kde študoval klavírnu hru u Ireny Koreňovej a skladbu u Juraja Hatríka. Od roku 1965 pokračoval v štúdiu skladby  na HF VŠMU v Bratislave u prof. Jána Cikkera a Alexandra Moyzesa, kde v roku 1970 aj absolvoval. Od roku 1969 do 2013 pedagogicky pôsobil na Konzervatóriu v Košiciach, kde vyučoval hudobno-teoretické predmety a  kompozíciu. K jeho žiakom patrili napríklad skladatelia ako Peter Breiner, Iris Szeghy, Norbert Bodnár, Alexander Mihalič, Jana Kmiťová, Ivan Buffa, Peter Duchnický a ďalší. V rokoch 1986 – 1988 bol aj riaditeľom Štátnej filharmónie v Košiciach.</p>
              <p>V kompozičnej činnosti sa popri dominantnej tvorbe orchestrálnych, koncertantných a komorných skladieb, venuje aj sakrálnej, inštruktívnej, vokálno-inštrumentálnej i zborovej tvorbe. Inšpirácie zo slovenskej kompozičnej školy a folklórneho materiálu transformoval postupmi európskej hudobnej moderny (bartókovské technológie, princípy 2. viedenskej školy, sonoristika...). Inklinuje k hudobným štruktúram, ktoré vo zvukovej podobe implikujú súčasnosť a ozvučujú aj čiastku z jeho charakteru takým technologicko-tvorivým poriadkom, čo znie dobre a novo. </p>
              <Separator />
              <p>Zo skladieb pre orchester sú to predovšetkým jeho  štyri symfónie (Symfónia v dvoch častiach op.30, Symfónia č.2 „Ecce homo“ op.39, Symfónia č.3 „Hommage a Jozef Grešák“ op.47, Symfónia č.4 op.64), dve predohry (Predohra „...aere perennius monumentum....“op.16, Ouvertura festa op.18b) a niekoľko programovo zameraných skladieb pre symfonický orchester (Dramatická štúdia op.9, Zvony op.31, S Rozárkou - suita z rovnomennej opery J. Grešáka op.54 a iné). Z koncertantných skladieb je to najmä päť koncertov so symfonickým orchestrom (pre organ op.19, husle op.55, klavír op.60, violu op.69 a pre trúbku op.70) a dve koncertína so sláčikovým orchestrom (Concertino pre husle op.11, Concerto piccolo „Hommage à A.Schönberg“ pre akordeón a tympany op.32.) </p>
              <p>Z jeho komornej tvorby sú to hlavne jeho reprezentatívne šesť sláčikové kvarteta a asi dve desiatky rôznych sólových skladieb i cyklov, napísaných pre klavír, akordeón, organ, flautu, alebo klarinet (ako napr. Expresie pre husle a violu op.6, Divertimento pre päť fúkacích nástrojov op.10, Divertimentino pre hoboj, klarinet a fagot op.45, Dve meditácie pre hoboj, klarinet a sláčikové kvarteto op.25, Nežný duel pre flautu a akordeón op.48, Interlude capricious pre komorný súbor op.56 a Toccatina interrupta pre akordeón a klavír op.59 a iné). </p>
              <p>Medzi skladbami Jozefa Podprockého možno nájsť aj skladby vokálne, napísané pre detské, ženské, mužské i miešané zbory s rôznymi nástrojovými sprievodmi, vrátane  niekoľkých umelých vokálno-inštrumentálnych skladieb a cyklov (Vesper dominicae – monológ pre barytón, flautu a sláčikové kvarteto op.7 č.1, Nezábudky – 4 trojhlasné detské zbory  op.13 č.3, Dve kavatíny - pre bas, flautu,klarinet, violu a violončelo op.22, Dva madrigaly - pre miešaný zbor op.25). Jeho nadväzovanie na folklórne zdroje najmä z východoslovenského regiónu je markantné najmä vo väčšine jeho rôznych  úprav a spracovaní ľudových piesní. Ďalšou oblasťou jeho tvorby sú aj skladby reštaurované na základe historických archívnych notových materiálov. Podprocký je jedným z mála skladateľov, ktorí sa realizujú aj v  oblasti oživovania slovenskej historickej hudby. </p>
              <p>Dlhé roky sa cieľavedome venuje aj historickej hudbe najmä z archívov východoslovenského regiónu, ktorú rekonštruuje, či „reštauruje“ a aranžuje (Napísal napríklad vo svojom 14.opuse sedem suit, ktoré vytvoril podľa zápisov v levočskom „Pestrom zborníku“ zo 17.storočia v rôznych inštrumentálnych verziách a zrekonštruoval, transkriboval a aranžoval aj mnoho skladieb iných košických i regionálnych autorov z minulosti - A. Püschela, M. Sztáraya, J. Košoviča, F.X. Zomba, J. Janigha, J. Kernera a O. Hemerku). Skomponoval aj viacero vlastných sakrálnych opusov (Ave Maria - in memoriam Ján Cikker op.7, Vianočné spevy, Koledy I. a II. op.34, Ave verum Corpus op.34, Missa slovaca a Cantiones primitiarum op.35, Cantus adventus – pre barytón a organ, op.66 a iné.) </p>
              <p>Viaceré z jeho skladieb vznikli na podnety, alebo ako objednávky popredných slovenských interprétov, súborov a orchestrov, akými boli napríklad Košické kvarteto, dirigent Bystrík Režucha, organista Ivan Sokol, akordeonisti Vladimír Čuchran a Peter Katina, Quasars ensemble, Štátna filharmónia Košice a iní. </p>
              <Separator />
              <p>Je aj držiteľom niekoľkých ocenení:  Cena Jána Levoslava Bellu na rok 1978 - za Sláčikové kvarteto č. 2, Cena primátora mesta Košice (1994), Cena nadácie Hemerkovcov (1994), Cena kritiky za rok 2003, Cena mesta Košice (2009) a Cena J. L. Bellu  za celoživotné dielo (2014).</p>
              <p>Na CD nosičoch sú zaznamenané skladby Missa brevis ex D a Vesperae cassovienses F.X.Zomba (1779-1823) pre sóla, miešaný zbor, komorný orchester a organ, ktoré sú aranžmánmi Jozefa Podprockého. Dychové kvinteto členov ŠFK, Košické kvarteto a sólisti Mária Kormanová - akordeón, Ivan Buffa - klavír a Ivan Sokol - organ participujú na jeho autorskom CD - Chamber Music. Akordeónista Peter Katina a klarinetista Martin Švec, sú interpretmi na jeho autorskom CD – Work for accordion. Mnoho jeho kompozícií je zaznamenaných aj v hudobnom archíve RTVS s rôznymi sólistami, súbormi a orchestrami.</p> 
              <p>Košice, 2019 – archív J.P.</p>
            </div>
            <div className="separator"><Separator /></div>
          </div>
          <div className={styles.column}>
            <div className={styles.photos}>
              <StaticImage
                  alt="Portrait"
                  src="../images/Fotky.png"
              />
            </div>
          </div>
        </div>
    </Layout>
    </div>
  )
}
// Step 3: Export your component
export default CvPage