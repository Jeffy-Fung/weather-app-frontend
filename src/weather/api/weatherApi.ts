// Types
export interface WeatherData {
  data: {
    averageRainfall: {
      unit: string;
      value: number;
      startTime: string;
      endTime: string;
    };
    temperature: {
      place: string;
      value: number;
      unit: string;
      recordTime: string;
    };
    specialWxTips?: string[];
    warningMessage?: string;
    uvindex: {
      place: string;
      value: number;
      desc: string;
      recordDesc: string;
    };
    humidity: {
      unit: string;
      value: number;
      place: string;
      recordTime: string;
    };
    updateTime: string;
    tcmessage?: string[];
  };
  cached: boolean;
  timestamp: string;
  source: string;
  language: string;
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
