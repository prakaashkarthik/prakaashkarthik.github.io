---
layout: default
title: "Books"
tags: [books]
---

# Posts on Books

<section class="recent-posts">
    <h2>Recent</h2>
    <div>
        {% for post in site.posts limit:3 %}
            {% if post.tags contains "books" %}
            {% capture excerpt %}{{ post.content | strip_html | truncatewords: 30 }}{% endcapture %}
            <article>
                <h3 class="post-title">
                    <a href="{{ post.url }}">{{ post.title }} </a>
                    <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
                </h3>
                <p class="post-excerpt">{{ excerpt }}</p>
            </article>
            <hr>
            {% endif %}
        {% endfor %}
    </div>
</section>

<section class="Personal-posts">
    <h2>All posts</h2>
    <div class="post-cloud">
        {% for post in site.posts %}
            {% if post.tags contains "books" %}
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
