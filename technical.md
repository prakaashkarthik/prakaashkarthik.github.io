---
layout: default
title: "Testing Testing!"
tags: [technical]
---

# Technical posting!

<section class="technical-posts">
    <h2>Technical posts</h2>
    <div class="post-cloud">
        {% for post in site.posts %}
            {% if post.tags contains "technical" %}
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