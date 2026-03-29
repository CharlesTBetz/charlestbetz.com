---
layout: default
title: Home
---

<!-- Featured Cards Row - Three across on desktop, stacks on mobile -->
<div class="featured-cards-row">
  {% assign card_count = 0 %}
  
  <!-- Display most recent 3 posts as featured cards -->
  {% for post in site.posts limit:3 %}
    <article class="feature-card">
      <a href="{{ post.url | relative_url }}">
        {% if post.youtube_url %}
          <div class="video-thumbnail">
            {% assign video_id = post.youtube_url | split: '/' | last | replace: 'watch?v=', '' %}
            <img src="https://img.youtube.com/vi/{{ video_id }}/mqdefault.jpg" alt="Video thumbnail">
            <div class="play-button">▶</div>
          </div>
        {% endif %}
        <div class="feature-content">
          <h3>{{ post.title }}</h3>
          <div class="feature-meta">
            {{ post.date | date: "%B %Y" }}
          </div>
          <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
        </div>
      </a>
    </article>
  {% endfor %}
</div>

<hr class="section-rule">

<!-- All Posts as Cards -->
<h2>All News & Updates</h2>

<div class="news-grid">
  {% for post in site.posts offset:3 %}
    <article class="news-item">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <div class="news-meta">
        <span class="date">{{ post.date | date: "%B %d, %Y" }}</span>
      </div>
      <p>{{ post.excerpt | strip_html }}</p>
      {% if post.youtube_url %}
        <div class="video-embed">
          {% assign video_id = post.youtube_url | split: '/' | last | replace: 'watch?v=', '' %}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/{{ video_id }}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </article>
  {% endfor %}
</div>

<hr class="section-rule">

<!-- CTA Banner -->
<div class="cta-banner">
  <h2>About Charles Betz</h2>
  <p>Composer of choral, orchestral, and musical theater works.</p>
  <a href="{{ site.baseurl }}/about/" class="cta-button">Learn More</a>
</div>

---

### Older News (Archive)

**February 2024:** Looking forward to my March 7 premiere of "Wild and Precious," to be performed by choir and orchestra.

Moved my website from archaic TypePad to Wix, and not looking back! Everything just works. (Note: Now on Jekyll/GitHub Pages!)

Last fall I was asked to come back to the [New Musicals](http://nmi.org) program as a guest "ringer" composer to work with the new students. It's an honor, and a vote of confidence in my musical abilities.

I'm also working with a new partner, Peter Welkin on a couple of ideas: The Womanless Wedding, about a 1920s ["ritual of inversion,"](https://en.wikipedia.org/wiki/Womanless_wedding) and Refuge, exploring Duluth as a climate change sanctuary. Also directly working with NMI on my own musical, "Five Minutes on the Low Road," about a near-death experience.
