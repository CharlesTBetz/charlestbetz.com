---
layout: default
title: Blog
permalink: /blog/
---

# Blog

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a><br>
    <time>{{ post.date | date: "%B %-d, %Y" }}</time>
    {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
