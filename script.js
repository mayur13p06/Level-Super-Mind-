document.getElementById('analyzeButton').addEventListener('click', async () => {
    const postType = document.getElementById('postType').value;

    if (!postType) {
        alert("Please select a post type.");
        return;
    }

    // Show loading spinner
    document.getElementById('loading').classList.remove('hidden');

    try {
        const response = await fetch('/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postType })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Error analyzing engagement');
        }

        const data = await response.json();

        // Hide loading spinner
        document.getElementById('loading').classList.add('hidden');

        // Display metrics with enhancements
        document.getElementById('metrics').classList.remove('hidden');
        document.getElementById('likes').innerHTML = 
            `<strong>Average Likes:</strong> <span style="color: green;">${data.metrics.avgLikes.toFixed(2)}</span>`;
        document.getElementById('shares').innerHTML = 
            `<strong>Average Shares:</strong> <span style="color: blue;">${data.metrics.avgShares.toFixed(2)}</span>`;
        document.getElementById('comments').innerHTML = 
            `<strong>Average Comments:</strong> <span style="color: purple;">${data.metrics.avgComments.toFixed(2)}</span>`;

        // Display insights with enhancements
        document.getElementById('insights').classList.remove('hidden');
        document.getElementById('insightsText').innerHTML = 
            `<strong>Insights:</strong> <em>${data.insights}</em><br><br>
            <span style="font-style: italic; color: gray;">Use this information to optimize your posts for better engagement!</span>`;
    } catch (error) {
        // Hide loading spinner and display error
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('error').classList.remove('hidden');
        document.getElementById('error').textContent = `Error: ${error.message}`;
    }
});
