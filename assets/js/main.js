// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const tagCloud = document.querySelector('.tags');
    const taggedPosts = document.getElementById('tagged-posts');
    const tagPostsList = document.getElementById('tag-posts-list');
    const selectedTagSpan = document.getElementById('selected-tag');

    let tagsData = null;
    let activeTag = null; // Track the currently active tag

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

            // If the same tag is clicked again, hide the posts
            if (activeTag === tag) {
                taggedPosts.classList.add('hidden');
                activeTag = null; // Reset the active tag
                return;
            }

            // Otherwise, show the posts for the clicked tag
            activeTag = tag; // Set the active tag
            if (!tagsData || !tagsData[tag]) {
                tagPostsList.innerHTML = 'No posts found.';
                return;
            }

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
                    </div>
                </article>
            `).join('');
        });
    }
});

document.querySelectorAll('.post-tag').forEach(tag => {
    const tagText = tag.textContent.trim().toLowerCase();

    // Define colors for specific tags
    const colors = {
        books: '#FFD700', // Gold
        technical: '#ADD8E6', // Light blue
        personal: '#FFB6C1', // Light pink
        culture: '#32CD32', // Lime green
    };

    // Set the background color based on the tag text
    if (colors[tagText]) {
        tag.style.backgroundColor = colors[tagText];
        tag.style.color = '#000'; // Optional: Set text color
    } else {
        // Default color for unknown tags
        tag.style.backgroundColor = '#D3D3D3'; // Light gray
        tag.style.color = '#000';
    }
});

/*
document.querySelectorAll('.tag').forEach(tag => {
    const tagText = tag.textContent.trim().toLowerCase().replace(/[^a-z]/g, '');

    // Define colors for specific tags
    const colors = {
        books: '#FFD700', // Gold
        technical: '#ADD8E6', // Light blue
        personal: '#FFB6C1', // Light pink
        culture: '#32CD32', // Lime green
    };

    // Set the background color based on the tag text
    if (colors[tagText]) {
        tag.style.backgroundColor = colors[tagText];
        tag.style.color = '#000'; // Optional: Set text color
    } else {
        // Default color for unknown tags
        tag.style.backgroundColor = '#D3D3D3'; // Light gray
        tag.style.color = '#000';
    }
});
*/