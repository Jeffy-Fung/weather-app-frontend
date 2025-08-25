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
      `${process.env.REACT_APP_WEATHER_BACKEND_URL}/api/v1/weather/current?lang=tc`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Weather not found`);
      }
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch weather data');
  }
}
