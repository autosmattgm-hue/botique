(function(){
  const STORAGE_KEY='flagship-language';
  const translations={
    fr:{
      'Flagship Boutique — Luxury Fashion Without Borders':'Flagship Boutique — Mode de luxe sans frontieres',
      'Flagship Boutique specializes in luxury fashion sourcing and personal shopping for clients worldwide. Exclusive designer collections from around the globe.':'Flagship Boutique propose du sourcing de mode de luxe et du personal shopping pour des clients internationaux. Collections createurs exclusives, selectionnees dans le monde entier.',
      'FLAGSHIP BOUTIQUE':'FLAGSHIP BOUTIQUE',
      'Luxury Fashion Without Borders':'Mode de luxe sans frontieres',
      'Dark mode':'Mode sombre',
      'Light mode':'Mode clair',
      'Switch language':'Changer de langue',
      'Home':'Accueil',
      'Collections':'Collections',
      'Services':'Services',
      'Guide':'Guide',
      'Contact':'Contact',
      'About':'A propos',
      'Gallery':'Galerie',
      'Personal Shopper':'Personal shopper',
      'Luxury Personal Shopping':'Personal shopping de luxe',
      'Luxury Fashion':'Mode de luxe',
      'Without Borders':'Sans frontieres',
      'Exclusive designer sourcing and personal shopping from around the world. Люкс со всего мира.':'Sourcing de createurs exclusifs et personal shopping dans le monde entier. Luxe international sur demande.',
      'Explore Collection':'Explorer la collection',
      'Contact Personal Shopper':'Contacter un personal shopper',
      'Designer Collections':'Collections createurs',
      'Global Luxury Sourcing':'Sourcing luxe international',
      'Personal Shopping':'Personal shopping',
      'Exclusive Prices':'Prix exclusifs',
      'Люкс со всего мира':'Luxe du monde entier',
      'Authentic Luxury':'Luxe authentique',
      'Curated Gallery':'Galerie curatee',
      'Editorial':'Selection',
      'Selections':'editoriale',
      'Our Specialties':'Nos specialites',
      'Exclusive':'Exclusives',
      'Collections':'Collections',
      'From iconic designer bags to rare timepieces — sourced exclusively for you from across the globe.':'Des sacs iconiques aux pieces rares, chaque article est source exclusivement pour vous dans le monde entier.',
      'Category 01':'Categorie 01',
      'Category 02':'Categorie 02',
      'Category 03':'Categorie 03',
      'Category 04':'Categorie 04',
      'Category 05':'Categorie 05',
      'Category 06':'Categorie 06',
      'Designer Bags':'Sacs createurs',
      'Luxury Shoes':'Chaussures de luxe',
      'Watches':'Montres',
      'Jewelry':'Joaillerie',
      'Exclusive Clothing':'Pret-a-porter exclusif',
      'Personal':'Personal',
      'Shopping':'shopping',
      'Book Now':'Reserver',
      'Latest Campaign':'Derniere campagne',
      'New Arrivals in':'Nouveautes en',
      'Motion':'mouvement',
      'A polished preview of the newest Flagship Boutique arrivals, curated for clients who want standout pieces sourced with speed and discretion.':'Un apercu raffine des dernieres arrivees Flagship Boutique, pense pour les clientes qui veulent des pieces fortes, trouvees vite et avec discretion.',
      'Watch on Instagram':'Voir sur Instagram',
      'Request Sourcing':'Demander un sourcing',
      'About Flagship':'A propos de Flagship',
      'Fashion is a':'La mode est un',
      'Global Language':'langage mondial',
      'Flagship Boutique specializes in luxury fashion sourcing and personal shopping for clients worldwide. We connect exclusive designer fashion with clients looking for elegance, authenticity, and premium style.':'Flagship Boutique est specialisee dans le sourcing de mode de luxe et le personal shopping pour une clientele internationale. Nous connectons les pieces createurs exclusives aux clients qui recherchent elegance, authenticite et style premium.',
      '"We bring the world\'s most exclusive pieces directly to your doorstep."':'"Nous amenons les pieces les plus exclusives du monde directement jusqu a vous."',
      'Brands Sourced':'Marques sourcees',
      'Countries':'Pays',
      'Designers':'Createurs',
      'Happy Clients':'Clients satisfaits',
      '@flagship_boutique':'@flagship_boutique',
      'Instagram':'Instagram',
      'Showcase':'Showcase',
      'Follow our curated feed for the latest arrivals, styling inspiration, and exclusive behind-the-scenes.':'Suivez notre feed pour les dernieres arrivees, l inspiration styling et les coulisses exclusives.',
      'Follow on Instagram':'Suivre sur Instagram',
      'Get in Touch':'Contactez-nous',
      'Your Personal':'Votre personal',
      'Shopper Awaits':'shopper vous attend',
      'Connect with us to access exclusive collections, receive personal styling advice, and source the most sought-after luxury pieces from around the world.':'Contactez-nous pour acceder a des collections exclusives, recevoir des conseils de style personnalises et sourcer les pieces de luxe les plus recherchees au monde.',
      'WhatsApp':'WhatsApp',
      'Telegram':'Telegram',
      'Request a Consultation':'Demander une consultation',
      'Our personal shoppers respond within 24 hours':'Nos personal shoppers repondent sous 24 heures',
      'First Name':'Prenom',
      'Last Name':'Nom',
      'Email':'E-mail',
      'Service':'Service',
      'Message':'Message',
      'Select a service':'Choisir un service',
      'Designer Bag Sourcing':'Sourcing de sacs createurs',
      'Luxury Watches':'Montres de luxe',
      'Jewelry & Accessories':'Joaillerie et accessoires',
      'Full Wardrobe Curation':'Curation complete de garde-robe',
      'Tell us about your style preferences, budget, or specific items you\'re looking for...':'Parlez-nous de vos preferences de style, de votre budget ou des pieces precises que vous recherchez...',
      'Send Inquiry':'Envoyer la demande',
      'Please fill all fields':'Veuillez remplir tous les champs',
      'Thank you — we\'ll be in touch shortly.':'Merci, nous vous recontacterons tres vite.',
      'Luxury items global sourcing.':'Sourcing international d articles de luxe.',
      'Exclusive prices, authentic pieces.':'Prix exclusifs, pieces authentiques.',
      'Explore':'Explorer',
      'Clothing':'Pret-a-porter',
      'Style Consultation':'Conseil de style',
      'Gift Curation':'Curation cadeaux',
      'VIP Access':'Acces VIP',
      'Stay in the Loop':'Restez informee',
      'New arrivals and exclusive access — delivered to you first.':'Nouveautes et acces exclusifs, envoyes en priorite.',
      'Your email':'Votre e-mail',
      'Join':'Rejoindre',
      'Thank you!':'Merci !',
      '© 2025 Flagship Boutique. All rights reserved.':'© 2025 Flagship Boutique. Tous droits reserves.',
      'Contact on WhatsApp':'Contacter sur WhatsApp',
      'Flagship Boutique — Curated Luxury Collections':'Flagship Boutique — Collections de luxe curatees',
      'Shop curated designer bags, shoes, watches, jewelry, and clothing sourced globally by Flagship Boutique.':'Decouvrez les sacs createurs, chaussures, montres, bijoux et vetements sources mondialement par Flagship Boutique.',
      'Curated Luxury':'Luxe curatee',
      'Collections Built for Clients Who Move Fast':'Des collections pour les clients qui vont vite',
      'Browse hero pieces, campaign drops, and sourcing categories built around availability, authenticity, and conversion-ready inquiry flows.':'Explorez les pieces fortes, drops de campagne et categories de sourcing pensees pour la disponibilite, l authenticite et une demande rapide.',
      'Request a Piece':'Demander une piece',
      'View Services':'Voir les services',
      'Featured Drops':'Drops en vedette',
      'Open Image':'Ouvrir l image',
      'Source Similar':'Sourcer une piece similaire',
      'Sourcing Categories':'Categories de sourcing',
      'Authentication-first sourcing, international availability checks, and fast client communication for every category.':'Sourcing avec verification d authenticite, controle de disponibilite internationale et communication rapide pour chaque categorie.',
      'Primary CTA':'CTA principal',
      'Ask for current availability':'Demander la disponibilite',
      'Flagship Boutique — Personal Shopping Services':'Flagship Boutique — Services de personal shopping',
      'Luxury personal shopping, sourcing, wardrobe curation, gift buying, and VIP access by Flagship Boutique.':'Personal shopping de luxe, sourcing, curation de garde-robe, cadeaux et acces VIP par Flagship Boutique.',
      'Client Services':'Services clients',
      'Luxury Sourcing That Feels Personal':'Un sourcing de luxe vraiment personnalise',
      'From a single bag to a full wardrobe refresh, Flagship Boutique helps clients source premium pieces with a discreet, structured process.':'D un sac unique a une garde-robe complete, Flagship Boutique aide ses clients a sourcer des pieces premium avec une methode discrete et structuree.',
      'Start a Consultation':'Commencer une consultation',
      'Explore Process':'Voir le process',
      'How It Works':'Comment ca marche',
      'Brief':'Brief',
      'Tell us the brand, size, budget, location, deadline, and whether alternatives are acceptable.':'Indiquez la marque, taille, budget, localisation, delai et les alternatives possibles.',
      'Search':'Recherche',
      'We check boutique access, partner availability, pricing, condition, and authentication signals.':'Nous verifions l acces boutique, les partenaires, le prix, l etat et les signaux d authenticite.',
      'Secure':'Securisation',
      'Once approved, we coordinate purchase, payment steps, delivery expectations, and aftercare notes.':'Apres validation, nous coordonnons achat, paiement, livraison et conseils de suivi.',
      'Service Menu':'Menu services',
      'Signature sourcing':'Sourcing signature',
      'For rare bags, limited shoes, jewelry, watches, and seasonal runway pieces.':'Pour sacs rares, chaussures limitees, joaillerie, montres et pieces runway saisonnieres.',
      'Wardrobe curation':'Curation de garde-robe',
      'Outfit planning, event edits, travel capsules, and seasonal refreshes.':'Looks evenementiels, capsules voyage et refresh saisonniers.',
      'Gift concierge':'Conciergerie cadeaux',
      'High-trust luxury gifting with size, taste, timing, and presentation handled carefully.':'Cadeaux de luxe avec taille, gout, timing et presentation geres avec soin.',
      'Flagship Boutique — Luxury Sourcing Guide':'Flagship Boutique — Guide de sourcing luxe',
      'A practical guide to luxury sourcing, personal shopping requests, authentication, and faster Flagship Boutique inquiries.':'Guide pratique du sourcing luxe, demandes personal shopping, authenticite et demandes plus rapides chez Flagship Boutique.',
      'A simple, high-trust process keeps sourcing fast, clear, and commercially useful for every client request.':'Un process simple et fiable garde chaque demande rapide, claire et utile pour le client.',
      'Choose the level of support that fits the request, from targeted product search to full wardrobe curation.':'Choisissez le niveau d accompagnement adapte, de la recherche ciblee a la curation complete de garde-robe.',
      'Sourcing Guide':'Guide de sourcing',
      'How to Request Luxury Pieces Faster':'Comment demander vos pieces de luxe plus vite',
      'Use this guide to send stronger inquiries, compare options quickly, and help our shoppers find pieces that match your taste and timing.':'Utilisez ce guide pour envoyer de meilleures demandes, comparer rapidement les options et aider nos shoppers a trouver les pieces adaptees a votre gout et a votre timing.',
      'Contact Now':'Contacter maintenant',
      'What to Include':'A inclure',
      'Clear details help us move faster, compare options confidently, and reduce back-and-forth before sourcing begins.':'Des informations claires nous aident a avancer plus vite, comparer les options avec confiance et reduire les allers-retours avant le sourcing.',
      'Brand and model':'Marque et modele',
      'Send exact names, screenshots, colors, material preferences, and acceptable alternatives.':'Envoyez noms exacts, captures, couleurs, matieres preferees et alternatives acceptables.',
      'Budget and timeline':'Budget et delai',
      'Share your ideal budget, maximum range, destination country, and when you need the item.':'Partagez votre budget ideal, budget maximum, pays de destination et date souhaitee.',
      'Sizing and condition':'Taille et etat',
      'For clothing or shoes, add size conversions. For pre-loved items, specify condition expectations.':'Pour vetements ou chaussures, ajoutez les conversions de taille. Pour pre-owned, precisez l etat attendu.',
      'Trust Checklist':'Checklist confiance',
      'Every request is handled with discretion, clear communication, and a sourcing flow built for real client trust.':'Chaque demande est geree avec discretion, communication claire et un parcours de sourcing pense pour la confiance client.',
      'Clear product references':'References produit claires',
      'Authenticity review before purchase':'Verification d authenticite avant achat',
      'Transparent sourcing fees':'Frais de sourcing transparents',
      'Delivery expectations confirmed':'Livraison confirmee',
      'Aftercare notes when relevant':'Conseils apres achat si necessaire'
    }
  };

  const translatableAttributes=['placeholder','title','aria-label','content'];
  let fallbackLanguage='fr';

  function getStoredLanguage(){
    try{
      return localStorage.getItem(STORAGE_KEY)||fallbackLanguage;
    }catch(e){
      return fallbackLanguage;
    }
  }

  function setStoredLanguage(lang){
    fallbackLanguage=lang;
    try{
      localStorage.setItem(STORAGE_KEY,lang);
    }catch(e){}
  }

  function translateString(value,lang){
    if(!value)return value;
    if(lang==='en')return value;
    const dictionary=translations[lang]||{};
    const normalized=value.replace(/\s+/g,' ').trim();
    if(dictionary[normalized]){
      return value.replace(normalized,dictionary[normalized]);
    }
    return value;
  }

  function walkTextNodes(root,callback){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
      acceptNode(node){
        const parent=node.parentElement;
        if(!parent)return NodeFilter.FILTER_REJECT;
        if(['SCRIPT','STYLE','SVG','NOSCRIPT'].includes(parent.tagName))return NodeFilter.FILTER_REJECT;
        if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(callback);
  }

  function attrStoreName(attr){
    return `data-i18n-${attr.replace(/[^a-z0-9]/gi,'-')}`;
  }

  function rememberOriginals(){
    walkTextNodes(document.body,node=>{
      if(!node.parentElement.dataset.i18nOriginal){
        node.parentElement.dataset.i18nOriginal=node.nodeValue;
      }
    });
    document.querySelectorAll('*').forEach(el=>{
      translatableAttributes.forEach(attr=>{
        const storeName=attrStoreName(attr);
        if(el.hasAttribute(attr)&&!el.hasAttribute(storeName)){
          el.setAttribute(storeName,el.getAttribute(attr));
        }
      });
    });
    if(!document.documentElement.dataset.i18nTitle){
      document.documentElement.dataset.i18nTitle=document.title;
    }
  }

  function applyLanguage(lang){
    rememberOriginals();
    walkTextNodes(document.body,node=>{
      const original=node.parentElement.dataset.i18nOriginal||node.nodeValue;
      node.nodeValue=lang==='en'?original:translateString(original,lang);
    });
    document.querySelectorAll('*').forEach(el=>{
      translatableAttributes.forEach(attr=>{
        const storeName=attrStoreName(attr);
        if(el.hasAttribute(storeName)){
          const original=el.getAttribute(storeName);
          el.setAttribute(attr,lang==='en'?original:translateString(original,lang));
        }
      });
    });
    document.querySelectorAll('[data-i18n-fr][data-i18n-en]').forEach(el=>{
      el.innerHTML=lang==='fr'?el.dataset.i18nFr:el.dataset.i18nEn;
    });
    const originalTitle=document.documentElement.dataset.i18nTitle||document.title;
    document.title=lang==='en'?originalTitle:translateString(originalTitle,lang);
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-lang-toggle]').forEach(btn=>{
      btn.textContent=lang==='fr'?'English':'Francais';
      btn.setAttribute('aria-label',lang==='fr'?'Switch to English':'Passer en francais');
    });
    setStoredLanguage(lang);
    document.documentElement.classList.add('lang-ready');
  }

  window.FlagshipI18n={
    getLanguage:()=>document.documentElement.lang||getStoredLanguage()||'fr',
    translate:(value,lang)=>translateString(value,lang||document.documentElement.lang||'fr'),
    apply:applyLanguage
  };

  function init(){
    const saved=getStoredLanguage();
    const lang=saved||'fr';
    applyLanguage(lang);
    document.querySelectorAll('[data-lang-toggle]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const next=document.documentElement.lang==='fr'?'en':'fr';
        applyLanguage(next);
      });
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  }else{
    init();
  }
})();
