// mobile menu
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  })
);

// scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.section-title, .about-photo, .about-text, .gallery img, .venues li, .deck, .book-form')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });

// wheel speeds up while scrolling, like pushing off
const disc = document.querySelector('.wheel-disc');
let scrollTimer;
window.addEventListener('scroll', () => {
  disc.style.animationDuration = '0.9s';
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => { disc.style.animationDuration = ''; }, 250);
}, { passive: true });

// mix player: turn a SoundCloud / Mixcloud link into an embed in the bottom bar
const player = document.querySelector('.player');
const frame = player.querySelector('.player-frame');

function embedUrl(url) {
  if (url.includes('soundcloud.com')) {
    return 'https://w.soundcloud.com/player/?url=' + encodeURIComponent(url) +
      '&color=%23ff5a1f&auto_play=true&visual=false&show_comments=false&hide_related=true';
  }
  if (url.includes('mixcloud.com')) {
    const path = new URL(url).pathname;
    return 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=' + encodeURIComponent(path);
  }
  return null;
}

function closePlayer() {
  frame.innerHTML = '';
  player.hidden = true;
  document.body.classList.remove('has-player');
  document.querySelectorAll('.deck.playing').forEach(d => d.classList.remove('playing'));
}

document.querySelectorAll('.deck:has(.deck-play)').forEach(deck => {
  deck.querySelector('.deck-play').addEventListener('click', () => {
    const src = embedUrl(deck.dataset.url || '');
    if (!src) { alert('Mix link coming soon.'); return; }
    if (deck.classList.contains('playing')) { closePlayer(); return; }
    closePlayer();
    frame.innerHTML = `<iframe allow="autoplay" src="${src}" title="Skte8 mix"></iframe>`;
    player.hidden = false;
    document.body.classList.add('has-player');
    deck.classList.add('playing');
  });
});
player.querySelector('.player-close').addEventListener('click', closePlayer);

// hide the action-shot strip if none of the photos exist yet
window.addEventListener('load', () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery.querySelector('img')) gallery.remove();
});

document.getElementById('yr').textContent = new Date().getFullYear();
