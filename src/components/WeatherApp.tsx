import { useCurrentWeather } from '../weather';

export function WeatherApp() {
  const { data: weather, isLoading, error } = useCurrentWeather();

  return (
    <div className="text-center">
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-8 text-blue-100">
          Hong Kong Weather
        </h1>
        
        {/* Weather Display */}
        {isLoading && (
          <div className="text-xl text-blue-200 mb-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            Loading weather data...
          </div>
        )}
        
        {error && (
          <div className="bg-red-800/50 backdrop-blur-sm rounded-xl p-6 max-w-md mb-6">
            <h2 className="text-xl font-semibold text-red-200 mb-2">Error Loading Weather</h2>
            <p className="text-red-300">{error.message}</p>
          </div>
        )}
        
        {weather && (
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-100">
              {weather.temperature.data.place}
            </h2>
            <div className="text-6xl font-bold mb-4 text-white">
              {weather.temperature.data.value}°{weather.temperature.data.unit}
            </div>
            <p className="text-lg text-blue-200">
              Current Temperature
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 text-sm text-blue-300 max-w-md">
          <p>Real-time weather data from Hong Kong Observatory</p>
          <p className="mt-2">Data updates automatically every 5 minutes</p>
        </div>
      </header>
    </div>
  );
}
