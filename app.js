  document.addEventListener('DOMContentLoaded', function() {
        let count = 0;
        const maxCount = 50000;
        const votingCountElement = document.getElementById('voting-count');

        const interval = setInterval(() => {
            const increment = Math.floor(Math.random() * 10) + 1;
            count += increment;

            if (count > maxCount) {
                count = maxCount;
                clearInterval(interval);
            }

            votingCountElement.innerHTML = '';

            const countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                const digitDiv = document.createElement('div');
                digitDiv.className = 'digit';
                digitDiv.textContent = countStr[i];
                votingCountElement.appendChild(digitDiv);
            }

            if (count === maxCount) {
                clearInterval(interval);
            }
        }, 1000); 
    });
