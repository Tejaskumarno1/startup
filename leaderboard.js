// Sample Data: Leaderboard Entries
const leaderboardData = [
    { rank: "🥇", name: "Rahul Sharma", project: "AI-Powered Assistant" },
    { rank: "🥈", name: "Neha Verma", project: "Smart Farming System" },
    { rank: "🥉", name: "Amit Rao", project: "Blockchain Voting" },
    { rank: "🎖️", name: "Pooja Nair", project: "Mental Health App" },
    { rank: "🎖️", name: "Vikas Mehta", project: "Green Energy Solutions" }
];

// Function to Populate Leaderboard
function populateLeaderboard() {
    const tbody = document.getElementById("leaderboard-body");

    leaderboardData.forEach(entry => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td class="rank">${entry.rank}</td>
            <td>${entry.name}</td>
            <td>${entry.project}</td>
        `;

        tbody.appendChild(row);
    });
}

// Load Leaderboard on Page Load
document.addEventListener("DOMContentLoaded", populateLeaderboard);
