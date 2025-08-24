// Types
export interface WeatherData {
  temperature: {
    data: {
      place: string;
      value: number;
      unit: string;
    }
  };
}

// Get current weather by city name
export async function getCurrentWeather(): Promise<WeatherData> {
  try {
    const response = await fetch(
      `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Weather not found`);
      }
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      temperature: {
        data: data.temperature.data[0]
      }
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch weather data');
  }
}
