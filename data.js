const data = {
  info: [
    {
      image: '/sala/kameleon-sala-3.jpg',
      title: 'Sala za proslave',
      text: 'Eksluzivna svečana velika sala kapaciteta od **80 do 300**  mesta idealna za organizaciju venčanja ili svadbi, punoletstva, krštenja, kao i za sve vrste drugih proslava i svečanosti.',
      link: '/svecana',
    },
    {
      image: '/ketering-slike-nove/rightbg.jpg',
      title: 'Ketering',
      text: '**Kameleon 2021** iza sebe ima veoma uspešan tim, tim koji prvenstveno vodi računa o kvalitetu, ukusu i naravno izgledu Vaših obroka. Predlažemo da nas kontaktirate. Mi na vaš poziv možemo doći, predstaviti našu ponudu uz degustaciju uz koju ćete se lično uveriti u kvalitet naših jela. Kompletan obrok od prvoklasnih namirnica, će na radnom mestu Vašim zaposlenima uštedeti vreme, novac i energiju. Naša ponuda podrazumeva pripremu i dostavu gotovih jela, a naš tim svake nedelje kreira novi jelovnik sa više opcija za Vas.',
      link: '/ketering',
    },
  ],
  description: [
    {
      title: 'Ketering 2021',
      desc: 'banket & ketering',
      about:
        '**Sala Kameleon 2021** je idealno mesto gde ćete proslaviti najlepše trenutke u životu. Nudimo veliki izbor najkvalitetnije hrane. Sva pažnja naših zaposlenih je usmerena na želje klijenata. Svaka naša proslava je posebna i drugačija od drugih, jer sve planiramo sa posebnim stilom. Sala je klimatizovana i ima obezbeđen parking. **Neka Vaši snovi postanu stvarnost,dođite i uverite se da je sala Kameleon najbolji izbor za Vaše venčanje i proslave.**',
    },
  ],
  heroContent: [
    {
      klasa: 'left',
      id: 'proslave',
      head: 'sala za proslave',
      text: ' ekskluzivna sala za sve vrste proslava',
      overlay: 'proslaveCL',
    },
    {
      klasa: 'right',
      id: 'ketering',
      head: 'ketering',
      text: 'hrana po vašem ukusu',
      overlay: 'keteringCR',
    },
  ],
  phones: ['062 222 132', '061 30 10 400', '061 30 10 400'],
  links: [
    { link: 'početna', path: '/' },
    {
      id: 'ketering',
      link: 'ketering',
      path: '/ketering',
      sublinks: [
        {
          link: 'ketering za proslave',
          hyperlink: 'proslave',
        },
        {
          link: 'slatki ketering',
          hyperlink: 'slatki',
        },
        {
          link: 'ketering za firme',
          hyperlink: 'firme',
        },
      ],
    },
    { link: 'proslave', path: '/proslave' },
    { link: 'svečana sala', path: '/svecana' },
    { link: 'kontakt', path: '/kontakt' },
  ],
  hyperlinks: [
    {
      link: '#firme',
      title: 'Ketering za Firme',
      imgSrc: '/ketering-slike-nove/firme/2.JPG',
    },
    {
      link: '#proslave',
      title: 'Ketering za Proslave',
      imgSrc: '/ketering-slike-nove/proslave/5.JPG',
    },
    {
      link: '#slatki',
      title: 'Slatki Ketering',
      imgSrc: '/ketering-slike-nove/slatki/1.JPG',
    },
  ],
  keteringInfo: [
    {
      heading:
        '## Savršen izbor i prava odluka ukoliko želite da se zdravo i ukusno hranite na radnom mestu!',
      body: 'Kuvana jela se isporučuju u nepovratnoj ambalaži sa pratećim nepovratnim inventarom. Svake nedelje kreiramo novi jelovnik sa više opcija (**vege, posno, hrono, domaća kuhinja**) i šaljemo ga unapred kako bi vaši zaposleni mogli na vreme da odaberu šta žele da jedu na dnevnom nivou. Standardni jelovnik obuhvata hleb, glavno jelo, prilog, salatu i dezert. **Supu, čorbu ili potaž možete poručiti ako želite.**',
    },
  ],

  fsKetering: [
    {
      imgSrc: '/ketering-slike-nove/slatki//1.JPG',
      title: 'slatki program',
      text: 'za uživanje u svakom zalogaju',
    },
    {
      imgSrc: '/ketering-slike-nove/firme/2.JPG',
      title: 'korporativni program',
      text: 'zdrava hrana za vaše osoblje',
    },
    {
      imgSrc: '/ketering-slike-nove/proslave/3.JPG',
      title: 'slavski program',
      text: 'pripremamo hranu po Vašoj želji',
    },
  ],
};

export default data;
