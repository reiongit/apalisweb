import { useState, useEffect } from 'react';
import { Reveal, Meta } from './shared';

/*
  BLOG POSTS
  ----------
  Each post renders a card in the Journal grid and its own full article view
  at #post/<id>.

  To add a cover image: drop a JPG/PNG into public/blog/ and set `cover` to
  its filename (e.g. cover: 'power-bi-workshop.jpg'). Leave `cover: null` for
  the striped placeholder. `images` (optional) is a gallery shown in the
  article body — same filename rule.

  `body` blocks:
    { t: 'p',  text }             paragraph
    { t: 'h',  text }             subheading
    { t: 'ul', items: [...] }     bullet list
*/
export const POSTS = [
  {
    id: 'tilitonse-partnership',
    category: 'Partnership',
    date: '2024-02-19',
    read: '4 min',
    title: 'This is where it all started: Apalis joins Tilitonse.',
    excerpt:
      'Apalis is joining Tilitonse — a digital One Stop Centre for survivors of gender-based violence — as its technical partner, turning a UNFPA and AfriLabs award-winning idea into something real.',
    cover: 'tilitonse-unfpa.jpg',
    images: ['tilitonse-selfie.jpg', 'tilitonse-cheque.jpg'],
    featured: true,
    body: [
      {
        t: 'p',
        text: 'A few months ago, a small team drove out to Dzaleka. They ate chips cha pa chiwaya, took a selfie, and said out loud what most of us are too cautious to say: one day we’ll look back on this and know this is where it all began. Our Founder and CEO, John Matekenya, was in that car. So today we get to write the sentence they promised themselves — and we get to write it as a partner.',
      },
      {
        t: 'p',
        text: 'We are thrilled to announce that Apalis is joining Tilitonse as its technical partner.',
      },
      { t: 'h', text: 'What Tilitonse is' },
      {
        t: 'p',
        text: 'Tilitonse is the kind of idea that feels obvious the moment you hear it, and impossible until someone is brave enough to build it. Dreamed up by Tapiwa Penama and her team, it is a digital One Stop Centre that supports case workers to deliver quality, efficient sexual and reproductive health and mental health services to survivors of gender-based violence. In plain terms: when someone comes forward after the worst day of their life, they should not have to tell their story five times to five different people who never talk to one another. Tilitonse connects the police, social workers, healthcare providers and counsellors into one confidential, coordinated system — so that GBV response becomes inclusive, data-driven, and, above all, humane.',
      },
      {
        t: 'p',
        text: 'That idea has already earned its stripes. Out of more than 200 applications from across East and Southern Africa in the UNFPA and AfriLabs Hacklab challenge, Tilitonse emerged as one of just two winners of a $20,000 grant at the YouthConnekt Summit in Kenya. It is now moving from concept toward a pilot at Dzaleka refugee camp, with a vision that reaches every district in Malawi — a digital One Stop Centre wherever survivors need one.',
      },
      { t: 'h', text: 'Why this matters' },
      {
        t: 'p',
        text: 'In Malawi, mental health and adolescent sexual and reproductive health and rights are still spoken about in whispers, if at all — even now, when suicide is at levels we can no longer afford to ignore. Technology cannot undo that silence on its own. But the right system, built with care, can make it safer to come forward, easier to get help, and possible to actually see the shape of the problem in the data — so that youth-friendly services are designed around what people truly need, not what we assume they need.',
      },
      { t: 'h', text: 'What we’ll build' },
      {
        t: 'p',
        text: 'So what will we build? Our task is to turn Tapiwa’s vision into something real, reliable and trusted. That means a platform that is genuinely confidential by design, because the people it serves are trusting it with the most sensitive moments of their lives. It means workflows that fit how case workers actually operate on the ground, not how software wishes they did. It means data that is protected fiercely and used responsibly to drive better care. And it means building something that works in a refugee camp today and can scale to a whole country tomorrow. This is the work Apalis exists for — technology that helps people take flight.',
      },
      { t: 'h', text: 'With gratitude' },
      {
        t: 'p',
        text: 'We do not take this responsibility lightly, and we do not take it alone. Our gratitude goes to the UNFPA East and Southern Africa office, AfriLabs and YouthConnekt for backing bold young ideas, and to UNFPA Malawi and Nelida Rodrigues for sitting down with us to explore how we move this forward together. A special thank you to Wanangwa Rachel Mganga for the steady support along the way.',
      },
      {
        t: 'p',
        text: 'Most of all, thank you to Tapiwa and the team for the dream, and for letting us help carry it. The journey of a thousand miles begins with a single step — and a selfie in Dzaleka. We’re honoured to be walking it with you.',
      },
      {
        t: 'p',
        text: 'It really is time to start taking up space. Let’s build.',
      },
    ],
  },
  {
    id: 'power-bi-tingathe',
    category: 'Field notes',
    date: '2024-05-17',
    read: '3 min',
    title: 'Turning data into decisions with the Tingathe Program.',
    excerpt:
      'A three-day Power BI workshop with Baylor Malawi’s M&E officers — turning complex programme data into clear, actionable insight.',
    cover: 'powerbi-1.jpg',
    images: ['powerbi-2.jpg', 'powerbi-3.jpg', 'powerbi-4.jpg'],
    body: [
      {
        t: 'p',
        text: 'At Apalis, we believe that data and technology should drive decision-making at every level of an organization. Recently, we had the honor of partnering with the Baylor College of Medicine Children’s Foundation Malawi Tingathe Program to lead an impactful three-day workshop on the basics of Power BI.',
      },
      {
        t: 'p',
        text: 'Our team conducted the training for Monitoring and Evaluation Officers from various districts working with the Tingathe Program under Baylor Malawi. They were eager to learn how to better use data. Our goal was to teach them how to manage and visualize their data effectively, turning complex information into clear, actionable insights.',
      },
      { t: 'h', text: 'Why Power BI?' },
      {
        t: 'ul',
        items: [
          'Data management — Power BI simplifies collecting, processing and organizing data, making large datasets easier to handle efficiently.',
          'Visualization — robust tools transform raw data into interactive, easy-to-understand reports and dashboards.',
          'Decision making — real-time insights empower organizations to make informed decisions quickly and confidently.',
        ],
      },
      { t: 'h', text: 'Workshop highlights' },
      {
        t: 'ul',
        items: [
          'Interactive sessions — hands-on activities exploring Power BI, from data importing to dynamic visualizations.',
          'Real-world applications — showing how Power BI fits into daily operations and strengthens data-driven decisions.',
          'Networking — a collaborative environment where participants shared ideas and experiences.',
        ],
      },
      {
        t: 'p',
        text: 'We are proud to support the Tingathe Program in its mission to improve healthcare outcomes in Malawi. By empowering their team with Power BI skills, we are helping to build a foundation for more efficient and impactful data management.',
      },
      {
        t: 'p',
        text: 'Thank you to the Baylor College of Medicine Children’s Foundation Malawi for this incredible opportunity. Together, we are driving positive change and fostering a culture of data-driven excellence.',
      },
    ],
  },
  {
    id: 'sessions-by-oasis',
    category: 'Networking',
    date: '2024-01-29',
    read: '2 min',
    title: 'Lessons from the first ‘Sessions by Oasis’.',
    excerpt:
      'Our Business Development and Product Design leads joined Oasis Brands Africa’s inaugural ‘Sessions by Oasis’ — bringing back sharp thinking on demand generation and demand capture.',
    cover: 'sessions-cover.jpg',
    images: ['sessions-2.jpg', 'sessions-3.jpg'],
    body: [
      {
        t: 'p',
        text: 'Throwing it back to last Friday — Apalis was honored to be part of the first inaugural ‘Sessions by Oasis’ under Oasis Brands Africa. The discussion tackled crafting a winning marketing strategy, and we were represented by our Business Development Lead, Reiwell Matekenya, and Product Design Lead, Nomsa Faith Nungu.',
      },
      {
        t: 'p',
        text: 'Our team gained groundbreaking insights into the importance of creating initial interest in a product or service — demand generation — and then capturing that interest at the right moment — demand capture. The session highlighted innovative strategies to balance these two approaches, ensuring a more dynamic and responsive marketing plan. These insights are invaluable as we refine our marketing and outreach.',
      },
      {
        t: 'p',
        text: 'Exciting times are ahead for Apalis as we continue to enrich our network and perspectives — until we become a leading start-up in the country and Sub-Saharan Africa. Join us on the journey by following our pages and keeping an eye on our next moves.',
      },
    ],
  },
];

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const CoverImg = ({ post, className }) =>
  post.cover ? (
    <img
      className={className}
      src={`/blog/${post.cover}`}
      alt={post.title}
      loading="lazy"
      onError={(e) => {
        // Fall back to the placeholder if the file isn't there yet.
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextSibling?.removeAttribute('hidden');
      }}
    />
  ) : null;

const Placeholder = ({ post, hidden = false }) => (
  <div className="post__cover post__cover--placeholder" hidden={hidden} aria-label={`Cover placeholder for ${post.title}`}>
    <span className="post__cover-cat mono">{post.category}</span>
    <span className="post__cover-label mono">IMAGE</span>
  </div>
);

const Cover = ({ post }) => (
  <>
    <CoverImg post={post} className="post__cover" />
    <Placeholder post={post} hidden={!!post.cover} />
  </>
);

const PostCard = ({ post, i, featured = false }) => (
  <Reveal
    as="a"
    delay={i * 80}
    className={`post ${featured ? 'post--featured' : ''}`}
    href={`#post/${post.id}`}
  >
    <div className="post__media">
      <Cover post={post} />
    </div>
    <div className="post__body">
      <div className="post__meta">
        <span className="chip">{post.category}</span>
        <span className="post__date mono">{fmtDate(post.date)}</span>
        <span className="post__dot" />
        <span className="post__read mono">{post.read}</span>
      </div>
      <h3 className="post__title">{post.title}</h3>
      <p className="post__excerpt">{post.excerpt}</p>
      <span className="post__more mono">
        Read
        <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
          <path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  </Reveal>
);

const Blog = () => {
  const featured = POSTS.find((p) => p.featured) || POSTS[0];
  const rest = POSTS.filter((p) => p !== featured);
  const hasList = rest.length > 0;

  return (
    <section id="blog" className="section section--dark blog">
      <div className="section__inner">
        <div className="blog__head">
          <Meta num="(08)" label="JOURNAL" tone="cream" />
          <h2 className="blog__title">
            <Reveal>
              Field notes &<br />
              <em>fresh thinking.</em>
            </Reveal>
          </h2>
          <Reveal delay={150} className="blog__lede">
            <p>
              Perspectives on data, research and engineering from the work we
              do across Malawi and the wider region.
            </p>
          </Reveal>
        </div>

        <div className={`blog__grid ${hasList ? '' : 'blog__grid--solo'}`}>
          <PostCard post={featured} i={0} featured />
          {hasList && (
            <div className="blog__list">
              {rest.map((p, i) => (
                <PostCard key={p.id} post={p} i={i + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ---- Full article view, routed by #post/<id> ---------------------------- */

const parseHash = () => {
  const m = window.location.hash.match(/^#post\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
};

const Block = ({ b }) => {
  if (b.t === 'h') return <h2 className="article__h">{b.text}</h2>;
  if (b.t === 'ul')
    return (
      <ul className="article__ul">
        {b.items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    );
  return <p className="article__p">{b.text}</p>;
};

export const BlogArticle = () => {
  const [id, setId] = useState(parseHash);
  const [lightbox, setLightbox] = useState(null); // full-size image src, or null

  useEffect(() => {
    const onHash = () => setId(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const post = id ? POSTS.find((p) => p.id === id) : null;

  useEffect(() => {
    if (!post) return;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = '';
    };
  }, [post]);

  // A new article (or leaving one) always closes any open lightbox.
  useEffect(() => {
    setLightbox(null);
  }, [id]);

  // Escape closes the lightbox first, then the article itself.
  useEffect(() => {
    if (!post) return;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (lightbox) setLightbox(null);
      else window.location.hash = '#blog';
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [post, lightbox]);

  if (!post) return null;

  return (
    <article className="article" role="dialog" aria-modal="true" aria-label={post.title}>
      <div className="article__bar">
        <a href="#blog" className="article__back mono">
          <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
            <path d="M13 8 H3 M8 3 L3 8 L8 13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Journal
        </a>
        <span className="article__brand mono">Apalis</span>
      </div>

      <div className="article__inner">
        <div className="article__meta">
          <span className="chip">{post.category}</span>
          <span className="post__date mono">{fmtDate(post.date)}</span>
          <span className="post__dot" />
          <span className="post__read mono">{post.read}</span>
        </div>
        <h1 className="article__title">{post.title}</h1>

        <div className="article__cover">
          <Cover post={post} />
        </div>

        <div className="article__prose">
          {post.body.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </div>

        {post.images && post.images.length > 0 && (
          <div className="article__gallery">
            {post.images.map((src) => (
              <button
                key={src}
                type="button"
                className="article__gallery-item"
                onClick={() => setLightbox(`/blog/${src}`)}
                aria-label={`View ${post.title} — full image`}
              >
                <img
                  src={`/blog/${src}`}
                  alt={post.title}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.closest('.article__gallery-item').hidden = true; }}
                />
              </button>
            ))}
          </div>
        )}

        <div className="article__foot">
          <a href="#blog" className="btn btn--ghost">
            Back to Journal
          </a>
          <a href="#contact" className="btn btn--primary">
            Start a project
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
              <path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Full image"
          onClick={() => setLightbox(null)}
        >
          <button type="button" className="lightbox__close mono" aria-label="Close image">
            Close
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
              <path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <img
            className="lightbox__img"
            src={lightbox}
            alt={post.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </article>
  );
};

export default Blog;
