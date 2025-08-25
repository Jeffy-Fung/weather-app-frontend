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
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-8 max-w-2xl">
            {/* Main Temperature Display */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 text-blue-100">
                {weather.data.temperature.place}
              </h2>
              <div className="text-6xl font-bold mb-2 text-white">
                {weather.data.temperature.value}°{weather.data.temperature.unit}
              </div>
              <p className="text-sm text-blue-300">
                Recorded at {new Date(weather.data.temperature.recordTime).toLocaleString('zh-TW')}
              </p>
            </div>

            {/* Weather Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Humidity */}
              <div className="bg-blue-700/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-100 mb-2">Humidity</h3>
                <div className="text-2xl font-bold text-white">
                  {weather.data.humidity.value}{weather.data.humidity.unit}
                </div>
                <p className="text-sm text-blue-300">{weather.data.humidity.place}</p>
              </div>

              {/* UV Index */}
              <div className="bg-blue-700/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-100 mb-2">UV Index</h3>
                <div className="text-2xl font-bold text-white">
                  {weather.data.uvindex.value} - {weather.data.uvindex.desc}
                </div>
                <p className="text-sm text-blue-300">{weather.data.uvindex.place}</p>
              </div>

              {/* Rainfall */}
              <div className="bg-blue-700/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-100 mb-2">Rainfall</h3>
                <div className="text-2xl font-bold text-white">
                  {weather.data.averageRainfall.value} {weather.data.averageRainfall.unit}
                </div>
                <p className="text-sm text-blue-300">Last hour</p>
              </div>

              {/* Update Time */}
              <div className="bg-blue-700/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-100 mb-2">Last Updated</h3>
                <div className="text-sm text-white">
                  {new Date(weather.data.updateTime).toLocaleString('zh-TW')}
                </div>
                <p className="text-xs text-blue-300">Source: {weather.source}</p>
              </div>
            </div>

            {/* Special Weather Tips */}
            <div className="bg-yellow-600/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-yellow-100 mb-2">Weather Tips</h3>
              {weather.data.specialWxTips.length > 0 ? (
                weather.data.specialWxTips.map((tip, index) => (
                  <p key={index} className="text-yellow-200 text-sm">{tip}</p>
                ))
              ) : (
                <p className="text-yellow-200 text-sm">No weather tips at the moment</p>
              )}
            </div>

            {/* Warning Messages */}
            <div className="bg-red-600/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-red-100 mb-2">Warnings</h3>
              {weather.data.warningMessage ? (
                <p className="text-red-200 text-sm">{weather.data.warningMessage}</p>
              ) : (
                <p className="text-red-200 text-sm">No warnings at the moment</p>
              )}
            </div>

            {/* TC Messages */}
            <div className="bg-orange-600/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-orange-100 mb-2">Tropical Cyclone Info</h3>
              {weather.data.tcmessage.length > 0 ? (
                weather.data.tcmessage.map((message, index) => (
                  <p key={index} className="text-orange-200 text-sm whitespace-pre-line">{message}</p>
                ))
              ) : (
                <p className="text-orange-200 text-sm">No tropical cyclone information at the moment</p>
              )}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 text-sm text-blue-300 max-w-2xl">
          <p>Weather data from Hong Kong Observatory</p>
          {weather && (
            <p className="mt-2 text-xs">
              Last API update: {new Date(weather.timestamp).toLocaleString('zh-TW')} 
              {weather.cached && ' (cached)'}
            </p>
          )}
        </div>
      </header>
    </div>
  );
}
