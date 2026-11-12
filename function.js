  function generateTable() {

            // Get the number from input
            let number = document.getElementById("number").value;

            // Get result elements
            let output = document.getElementById("table-output");
            let result = document.getElementById("result");
            let message = document.getElementById("message");
            let heading = document.getElementById("table-heading");

            // Check input
            if (number.trim() === "" || !Number.isFinite(Number(number))) {
                message.innerText = "Please enter a valid number!";
                result.classList.add("hidden");
                return;
            }

            number = Number(number);

            // Clear previous result
            output.innerHTML = "";
            message.innerText = "";

            // Change heading
            heading.innerText = "Table of " + number;

            // Generate multiplication table
            for (let i = 1; i <= 10; i++) {

                let answer = number * i;

                let row = document.createElement("div");

                row.className = "table-row";

                row.innerHTML = `
                    <span>${number} × ${i}</span>
                    <strong>${answer}</strong>
                `;

                output.appendChild(row);
            }

            // Show result
            result.classList.remove("hidden");
        }

        function clearTable() {

            document.getElementById("number").value = "";

            document.getElementById("table-output").innerHTML = "";

            document.getElementById("result").classList.add("hidden");

            document.getElementById("message").innerText = "";

            document.getElementById("number").focus();
        }