// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const tagCloud = document.querySelector('.tags');
    const taggedPosts = document.getElementById('tagged-posts');
    const tagPostsList = document.getElementById('tag-posts-list');
    const selectedTagSpan = document.getElementById('selected-tag');

    let tagsData = null;
    fetch('/tag.json')
        .then(response => response.json())
        .then(data => {
            tagsData = data;
        })
        .catch(error => console.error('Error loading tags:', error));

    if (tagCloud) {
        tagCloud.addEventListener('click', (e) => {
            const tagLink = e.target.closest('.tag');
            if (!tagLink) return;

            e.preventDefault();
            const tag = tagLink.dataset.tag;

            if (!tagsData || !tagsData[tag]) {
                tagPostsList.innerHTML = 'No posts found.';
                return;
            }

            // Show the posts for this tag
            taggedPosts.classList.remove('hidden');
            selectedTagSpan.textContent = tag;

            const posts = tagsData[tag];
            tagPostsList.innerHTML = posts.map(post => `
                <article class="post-preview">
                    <h3 class="post-title">
                        <a href="${post.url}">${post.title}</a>
                    </h3>
                    <div class="post-meta">
                        <span class="post-date">${post.date}</span>
                        <span class="post-category">${post.category}</span>
                    </div>
                </article>
            `).join('');
        });
    }
});
