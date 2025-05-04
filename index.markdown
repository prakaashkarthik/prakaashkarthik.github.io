---
layout: default
---
<section class="recent-posts">
    <h2>Recent Posts</h2>
    <div class="post-cloud">
        {% for post in site.posts limit:10 %}
        <a href="{{ post.url }}" class="post-preview-link">
            <article>
                <h3 class="post-title">
                    {{ post.title }}
                </h3>
                <div class="post-meta">
                    <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
                    {% for tag in post.tags %}
                        <span class="post-tag">{{ tag }}</span>
                    {% endfor %}
                </div>
            </article>
        </a>
        {% endfor %}
    </div>
</section>


<section class="tag-cloud">
    <h2>Posts By Tag</h2>
    <div class="tags">
        {% assign tags = site.tags | sort %}
        {% for tag in tags %}
        <a href="#" class="tag" data-tag="{{ tag[0] }}">
            {{ tag[0] }} <span class="count">{{ tag[1].size }}</span>
        </a>
        {% endfor %}
    </div>

    <div id="tagged-posts" class="hidden">
        <h3>Posts tagged with <span id="selected-tag"></span></h3>
        <div id="tag-posts-list"></div>
    </div>
</section>
