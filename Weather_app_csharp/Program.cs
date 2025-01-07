using System;

class Weather
{
    // Properties for weather details
    public int Temperature { get; set; }
    public string Condition { get; set; }
    public int Cloudiness { get; set; }

    // Constructor 
    public Weather()
    {
        // Create an instance of Random to generate random values
        Random random = new Random();

        // Random temperature between -10°C and 40°C
        Temperature = random.Next(-10, 41);

        // Random condition: Clear, Rain, or Snow
        string[] conditions = { "Clear", "Rain", "Snow" };
        Condition = conditions[random.Next(conditions.Length)];

        // Random cloudiness between 0% and 100%
        Cloudiness = random.Next(0, 101);
    }

    // Method to display weather information
    public void DisplayWeather()
    {
        // Print weather details
        Console.WriteLine("Today's Weather:");
        Console.WriteLine($"Temperature: {Temperature}°C");
        Console.WriteLine($"Condition: {Condition}");
        Console.WriteLine($"Cloudiness: {Cloudiness}%");

        // Check for extreme weather condition and print warning if necessary
        if (Condition == "Snow" && Temperature < -10)
        {
            Console.WriteLine("Warning: It's extremely cold and snowy. Do not go outside!");
        }
    }
}

class Program
{
    static void Main()
    {
        // Generate a random weather object
        Weather weather = new Weather();

        // Display the weather information
        weather.DisplayWeather();
    }
}
