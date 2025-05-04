---
layout: default
title: "Testing Testing!"
tags: [personal]
---

# personal posting!

<section class="Personal-posts">
    <h2>Writings about improving myself</h2>
    <div class="post-cloud">
        {% for post in site.posts %}
            {% if post.tags contains "personal" %}
            <a href="{{ post.url }}" class="post-preview-link">
                <article>
                    <h3 class="post-title">{{ post.title }}</h3>
                    <div class="post-meta">
                        <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
                        {% for tag in post.tags %}
                            <span class="post-tag">{{ tag }}</span>
                        {% endfor %}
                    </div>
                </article>
            </a>
            {% endif %}
        {% endfor %}
    </div>
</section>

<section class="recent-posts">
    <h2>Recent Personal Posts</h2>
    <div class="post-cloud">
        {% for post in site.posts %}
            {% if post.tags contains "personal" %}
            {% capture excerpt %}{{ post.content | strip_html | truncatewords: 30 }}{% endcapture %}
            <article class="post-preview">
                <h3 class="post-title">
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </h3>
                <p class="post-excerpt">{{ excerpt }}</p>
            </article>
            {% endif %}
        {% endfor %}
    </div>
</section>