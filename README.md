# Case_Oppgave
My HTML and C# Weather apps!

Challenge questions for HTML part of case:

1. How can you ensure the weather updates automatically at regular intervals?
- Use setInterval() to call the weather update functions at regular intervals (e.g., every 3 minutes).

2. What is the best way to generate random values for the weather properties?
- Use Math.random() for generating random values, combined with Math.floor() to get integers within desired ranges (e.g., temperature between -20 and 40°C).

3. How can you dynamically check for extreme weather conditions and update warnings?
- Use conditional checks (e.g., if statements) in JavaScript to detect extreme weather conditions and display a warning message accordingly.

4. How will you structure the CSS so the warning message stands out?
- Use CSS with bold, red text, and position the warning message absolutely below the weather display with z-index to ensure visibility.

Challenge questions for C# part of case:

1. How will you structure your weather data using a class or struct in C#?
- Use a Weather class with properties like Temperature, Condition, and Cloudiness.

2. How can you ensure the weather values are randomized every time the program runs?
- Use the Random class to generate random values for weather properties each time the program runs.

3. How will you implement the warning for extreme weather conditions?
- Check for extreme conditions (e.g., low temperature with snow) and display a warning using if statements if conditions are met.
