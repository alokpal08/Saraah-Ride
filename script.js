document.addEventListener("DOMContentLoaded", function () {
    const compareBtn = document.getElementById("compareBtn");
    const resultDiv = document.getElementById("result");

    compareBtn.addEventListener("click", function () {
        const pickup = document.getElementById("pickup").value;
        const dropoff = document.getElementById("dropoff").value;

        if (pickup === "" || dropoff === "") {
            resultDiv.innerHTML = `<p class="error">Please enter both pickup and drop-off locations.</p>`;
            return;
        }

        // Simulated ride fare data (replace with real API later)
        const rideFares = [
            { service: "Uber", fare: (Math.random() * 10 + 15).toFixed(2) },
            { service: "Lyft", fare: (Math.random() * 10 + 14).toFixed(2) },
            { service: "Ola", fare: (Math.random() * 10 + 13).toFixed(2) },
        ];

        let output = `<h2>Fare Comparison</h2>`;
        rideFares.forEach((ride) => {
            output += `<p><strong>${ride.service}:</strong> $${ride.fare}</p>`;
        });

        resultDiv.innerHTML = output;
    });
});
