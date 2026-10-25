import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Truck,
  X,
} from 'lucide-react';

type Category = 'All pieces' | 'Living room' | 'Bedroom' | 'Dining room';

type Product = {
  name: string;
  category: Exclude<Category, 'All pieces'>;
  image: string;
  description: string;
  tag: string;
  options: string;
};

const products: Product[] = [
  {
    name: 'The Kensington L-Shape',
    category: 'Living room',
    image: '/images/image.png',
    description: 'A generous statement suite with hand-finished tufting.',
    tag: 'Living room',
    options: 'Layout · 5 fabrics · Custom size',
  },
  {
    name: 'The Royal Three-Piece',
    category: 'Living room',
    image: '/images/image copy 2.png',
    description: 'Deep velvet seating with a considered, classic silhouette.',
    tag: 'Bestseller',
    options: '1–3 seater · Velvet · Leather',
  },
  {
    name: 'The Aria Headboard',
    category: 'Bedroom',
    image: '/images/image copy.png',
    description: 'A sculptural focal point for calm, elevated bedrooms.',
    tag: 'Bedroom',
    options: 'Any bed size · 12 colours · USB option',
  },
  {
    name: 'The Cloud Chaise',
    category: 'Living room',
    image: '/images/image copy 3.png',
    description: 'Soft cream upholstery designed for slow Sunday afternoons.',
    tag: 'Living room',
    options: 'L-shape · Modular · Performance fabric',
  },
  {
    name: 'The Solace Headboard Set',
    category: 'Bedroom',
    image: '/images/image copy 4.png',
    description: 'A tailored headboard and pedestals, made as one collection.',
    tag: 'Bedroom',
    options: 'Bed base · Pedestals · Mirror',
  },
  {
    name: 'The Sienna Dining Set',
    category: 'Dining room',
    image: '/images/image copy 5.png',
    description: 'A welcoming centrepiece, tailored to your family and your room.',
    tag: 'Dining room',
    options: '4–12 seats · Fabric · Wood finish',
  },
  {
    name: 'The Ivory Lounge Suite',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.01 PM (1).jpeg',
    description: 'A soft neutral sofa with a clean, contemporary profile.',
    tag: 'Living room',
    options: 'Custom size · Fabric options',
  },
  {
    name: 'The Monochrome Dining Set',
    category: 'Dining room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.01 PM (2).jpeg',
    description: 'A bright dining table paired with upholstered statement chairs.',
    tag: 'Dining room',
    options: 'Custom table · Upholstery options',
  },
  {
    name: 'The Six-Seater Dining Set',
    category: 'Dining room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.01 PM (3).jpeg',
    description: 'A spacious dining setting with a coordinated set of chairs.',
    tag: 'Dining room',
    options: 'Custom size · Fabric options',
  },
  {
    name: 'The Burnt Orange Sofa',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.01 PM.jpeg',
    description: 'A warm-toned statement sofa with a distinctive modern shape.',
    tag: 'Living room',
    options: 'Custom size · Fabric options',
  },
  {
    name: 'The Two-Tone TV Unit',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.02 PM.jpeg',
    description: 'A polished timber-look entertainment unit with generous storage.',
    tag: 'Living room',
    options: 'Custom length · Finish options',
  },
  {
    name: 'The Floating TV Console',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.03 PM (1).jpeg',
    description: 'A clean-lined media console with a light, modern finish.',
    tag: 'Living room',
    options: 'Custom length · Finish options',
  },
  {
    name: 'The Tufted Lounge Suite',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.03 PM (2).jpeg',
    description: 'A coordinated lounge setting with classic button-tufted detail.',
    tag: 'Living room',
    options: 'Custom layout · Fabric options',
  },
  {
    name: 'The Grey L-Shape',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.03 PM.jpeg',
    description: 'A generous grey sectional with deep, comfortable seating.',
    tag: 'Living room',
    options: 'Custom layout · Fabric options',
  },
  {
    name: 'The Emerald Bedroom Set',
    category: 'Bedroom',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.04 PM (1).jpeg',
    description: 'A coordinated bedroom look with a bold upholstered headboard.',
    tag: 'Bedroom',
    options: 'Bed size · Fabric options',
  },
  {
    name: 'The Modern Bed Base',
    category: 'Bedroom',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.04 PM (2).jpeg',
    description: 'A tailored upholstered bed base with a simple modern headboard.',
    tag: 'Bedroom',
    options: 'Any bed size · Fabric options',
  },
  {
    name: 'The Emerald Headboard Set',
    category: 'Bedroom',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.04 PM (3).jpeg',
    description: 'A rich green headboard paired with crisp, coordinated bedding.',
    tag: 'Bedroom',
    options: 'Any bed size · Fabric options',
  },
  {
    name: 'The Yellow Accent Dining Set',
    category: 'Dining room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.04 PM.jpeg',
    description: 'A bright dining space with upholstered chairs and a matching table.',
    tag: 'Dining room',
    options: 'Custom table · Upholstery options',
  },
  {
    name: 'The Blush Accent Chairs',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.05 PM (1).jpeg',
    description: 'A pair of soft pink accent chairs for a welcoming seating nook.',
    tag: 'Living room',
    options: 'Pair or single · Fabric options',
  },
  {
    name: 'The Ribbed Charcoal L-Shape',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.05 PM (2).jpeg',
    description: 'A charcoal sectional with bold ribbed upholstery and deep seats.',
    tag: 'Living room',
    options: 'Custom layout · Fabric options',
  },
  {
    name: 'The Midnight L-Shape',
    category: 'Living room',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.05 PM (3).jpeg',
    description: 'A deep-toned sectional with a relaxed, contemporary silhouette.',
    tag: 'Living room',
    options: 'Custom layout · Fabric options',
  },
  {
    name: 'The Sunshine Upholstered Bed',
    category: 'Bedroom',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.05 PM.jpeg',
    description: 'A standout bed with vibrant yellow upholstery and a padded frame.',
    tag: 'Bedroom',
    options: 'Any bed size · Fabric options',
  },
  {
    name: 'The Panelled Headboard Bed',
    category: 'Bedroom',
    image: '/images/WhatsApp Image 2026-10-22 at 12.03.06 PM.jpeg',
    description: 'A dark upholstered bed with a striking geometric headboard.',
    tag: 'Bedroom',
    options: 'Any bed size · Fabric options',
  },
];

const towns = ['Kuruman', 'Kathu', 'Postmasburg', 'Kimberley', 'Hartswater', 'Taung', 'Vryburg', 'Christiana', 'Bloemhof', 'Ganyesa', 'Bloemfontein'];
const phoneNumber = '+27 63 244 2620';
const whatsappUrl = 'https://wa.me/27632442620';

function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All pieces');
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProducts = activeCategory === 'All pieces'
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kgosigadi Designs home">
          <span className="brand-mark">K</span>
          <span><strong>Kgosigadi</strong><small>Designs & Upholstery</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#delivery" onClick={() => setMenuOpen(false)}>Delivery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Crafted in Kuruman</p>
            <h1>Furniture with <em>presence.</em><br />Made for living.</h1>
            <p className="hero-intro">Handcrafted luxury furniture, thoughtfully made to fit your home, your style, and the way you live.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Browse WhatsApp catalog <ArrowUpRight size={18} /></a>
              <a className="button button-quote" href="#contact">Get a free quote <ArrowUpRight size={18} /></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><span>KG</span><span>SA</span><span>+</span></div>
              <div><strong>Made for homes across the Northern Cape</strong><small>Custom pieces. Honest craft. Lasting comfort.</small></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src="/images/image copy 2.png" alt="Deep blue velvet three-piece lounge suite" /></div>
            <div className="hero-note"><Sparkles size={16} /><span>Designed around<br /><strong>your everyday</strong></span></div>
            <div className="hero-stamp">EST.<br /><strong>2018</strong><br />KURUMAN</div>
          </div>
        </section>

        <section className="intro-strip">
          <div><span className="section-number">01 /</span><p>Not mass-produced.<br /><strong>Made personally.</strong></p></div>
          <p>From first sketch to final stitch, we create considered furniture that brings comfort and character to your home.</p>
          <a href="#collection" className="text-link">Explore the collection <ArrowUpRight size={16} /></a>
        </section>

        <section className="collection section-pad" id="collection">
          <div className="section-heading"><div><p className="eyebrow">The collection</p><h2>Pieces with a point of view.</h2></div><p className="heading-note">Choose a starting point. We’ll make it yours.</p></div>
          <div className="filter-row" role="tablist" aria-label="Product categories">
            {(['All pieces', 'Living room', 'Bedroom', 'Dining room'] as Category[]).map((category) => <button key={category} className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
          <div className="product-grid">
            {visibleProducts.map((product, index) => <article className={index === 0 ? 'product-card product-card-featured' : 'product-card'} key={product.name}>
              <div className="product-image"><img src={product.image} alt={product.name} /><span className="product-tag">{product.tag}</span><button className="image-arrow" aria-label={`View ${product.name}`}><ArrowUpRight size={17} /></button></div>
              <div className="product-info"><div><p className="product-category">{product.category}</p><h3>{product.name}</h3></div><p className="product-description">{product.description}</p><div className="product-options"><span>{product.options}</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Enquire <ArrowUpRight size={15} /></a></div></div>
            </article>)}
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section-pad process-inner"><div className="process-heading"><p className="eyebrow eyebrow-light">The Kgosigadi way</p><h2>From idea to<br /><em>your</em> living room.</h2><p>Good furniture should feel personal. Our process keeps you close to every important decision.</p></div><div className="steps">
            <div className="step"><span className="step-number">01</span><h3>Choose your design</h3><p>Select your size, layout, fabric and colour palette. We’ll help you make the right call.</p><Check size={18} /></div>
            <div className="step"><span className="step-number">02</span><h3>Place your order</h3><p>Secure your piece with a 60% upfront deposit, or ask us about our flexible 6–11 month layby terms.</p><Check size={18} /></div>
            <div className="step"><span className="step-number">03</span><h3>We make & deliver</h3><p>Most orders are ready in 10–15 days, with regional delivery across the Northern Cape, North West and Free State.</p><Check size={18} /></div>
          </div></div>
        </section>

        <section className="delivery section-pad" id="delivery"><div className="delivery-content"><div><p className="eyebrow">Made local. Delivered further.</p><h2>Closer than you think.</h2><p className="delivery-lead">Your next favourite room starts in Kuruman. We deliver our custom furniture to homes and families across the region.</p><a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Plan your delivery <ArrowUpRight size={18} /></a></div><div className="region-card"><div className="region-card-top"><MapPin size={19} /><span>We deliver to</span></div><div className="town-list">{towns.map((town) => <span key={town}>{town}</span>)}</div><div className="region-card-foot"><Truck size={18} /><span>Cross-town delivery available</span></div></div></div></section>

        <section className="contact-section section-pad" id="contact"><div className="contact-card"><div><p className="eyebrow eyebrow-light">Let’s make something beautiful</p><h2>Ready to make<br /><em>your space</em> yours?</h2><p>Tell us what you have in mind. We’ll reply with friendly advice and a personalised quote.</p></div><div className="contact-actions"><a className="contact-action" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={21} /><span><small>Fastest response</small>Message on WhatsApp</span><ArrowUpRight size={17} /></a><a className="contact-action" href="tel:+27632442620"><Phone size={21} /><span><small>Call us directly</small>{phoneNumber}</span><ArrowUpRight size={17} /></a></div></div></section>
      </main>

      <footer className="site-footer" id="footer"><div className="footer-main"><a className="brand brand-footer" href="#top"><span className="brand-mark">K</span><span><strong>Kgosigadi</strong><small>Designs & Upholstery</small></span></a><p>Premium, custom-made furniture<br />from the heart of Kuruman.</p><div className="socials"><a href="https://www.facebook.com/search/top/?q=%20Kgosigadi%20Designs%20and%20upholstery" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a><a href="#footer" aria-label="Instagram"><Instagram size={17} /></a><a href="#footer" aria-label="TikTok">♪</a></div></div><div className="footer-details"><div><small>Visit the workshop</small><p>Magojaneng Dikgweng Road<br />Next to Dunlop, Kuruman</p></div><div><small>Business hours</small><p>Mon–Fri · 08:00–17:00<br />Sat · 09:00–13:00</p></div><div><small>Speak to us</small><p><a href="tel:+27632442620">+27 63 244 2620</a><br /><a href="tel:+27810536800">+27 81 053 6800</a></p></div></div><div className="footer-bottom"><span>© 2024 Kgosigadi Designs & Upholstery</span><span>Handcrafted in South Africa</span></div></footer>
      <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={20} /> WhatsApp us</a>
    </div>
  );
}

export default App;
