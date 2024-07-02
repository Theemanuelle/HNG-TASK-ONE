document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.getElementById('currentTimeUTC');
    const currentDayElement = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

        currentTimeElement.textContent = utcTime;
        currentDayElement.textContent = dayOfWeek;
    }

    setInterval(updateTime, 1000);
    updateTime();
});
