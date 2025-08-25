import { useCurrentWeather } from '../weather';

export function WeatherApp() {
  const { data: weather, isLoading, error } = useCurrentWeather();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white p-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold pb-4 bg-gradient-to-r from-blue-100 via-white to-blue-100 bg-clip-text text-transparent">
            Hong Kong Weather
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Weather Display */}
        {isLoading && (
          <div className="text-center mb-8 animate-pulse">
            <div className="inline-flex items-center px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-400 border-t-transparent mr-4"></div>
              <span className="text-xl text-blue-100 font-medium">Loading weather data...</span>
            </div>
          </div>
        )}
        
        {error && (
          <div className="bg-gradient-to-r from-red-900/80 to-red-800/80 backdrop-blur-md rounded-2xl p-8 max-w-md mb-8 border border-red-500/30 shadow-2xl animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-red-100">Error Loading Weather</h2>
            </div>
            <p className="text-red-200">{error.message}</p>
          </div>
        )}
        
        {weather && (
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 max-w-4xl border border-white/20 shadow-2xl animate-fade-in">
            {/* Main Temperature Display */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-2 text-white">
                {weather.data.temperature.place}
              </h2>
              <div className="text-7xl font-bold mb-3 bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent">
                {weather.data.temperature.value}°{weather.data.temperature.unit}
              </div>
              <p className="text-sm text-blue-200 bg-blue-900/30 px-4 py-2 rounded-full inline-block">
                Recorded at {new Date(weather.data.temperature.recordTime).toLocaleString('zh-TW')}
              </p>
            </div>

            {/* Weather Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Humidity */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-6 border border-blue-400/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-100">Humidity</h3>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {weather.data.humidity.value}{weather.data.humidity.unit}
                </div>
                <p className="text-sm text-blue-300">{weather.data.humidity.place}</p>
              </div>

              {/* UV Index */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-100">UV Index</h3>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {weather.data.uvindex.value} - {weather.data.uvindex.desc}
                </div>
                <p className="text-sm text-purple-300">{weather.data.uvindex.place}</p>
              </div>

              {/* Rainfall */}
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-100">Rainfall</h3>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {weather.data.averageRainfall.value} {weather.data.averageRainfall.unit}
                </div>
                <p className="text-sm text-cyan-300">Last hour</p>
              </div>

              {/* Update Time */}
              <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-md rounded-2xl p-6 border border-indigo-400/30 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-100">Last Updated</h3>
                </div>
                <div className="text-sm text-white mb-1">
                  {new Date(weather.data.updateTime).toLocaleString('zh-TW')}
                </div>
                <p className="text-xs text-indigo-300">Source: {weather.source}</p>
              </div>
            </div>

            {/* Special Weather Tips */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 mb-6 border border-yellow-400/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-yellow-100">Weather Tips</h3>
              </div>
              {weather.data.specialWxTips.length > 0 ? (
                weather.data.specialWxTips.map((tip, index) => (
                  <p key={index} className="text-yellow-200 text-sm mb-2 last:mb-0">{tip}</p>
                ))
              ) : (
                <p className="text-yellow-200 text-sm">No weather tips at the moment</p>
              )}
            </div>

            {/* Warning Messages */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-md rounded-2xl p-6 mb-6 border border-red-400/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-100">Warnings</h3>
              </div>
              {weather.data.warningMessage ? (
                <p className="text-red-200 text-sm">{weather.data.warningMessage}</p>
              ) : (
                <p className="text-red-200 text-sm">No warnings at the moment</p>
              )}
            </div>

            {/* TC Messages */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-orange-100">Tropical Cyclone Info</h3>
              </div>
              {weather.data.tcmessage.length > 0 ? (
                weather.data.tcmessage.map((message, index) => (
                  <p key={index} className="text-orange-200 text-sm whitespace-pre-line mb-2 last:mb-0">{message}</p>
                ))
              ) : (
                <p className="text-orange-200 text-sm">No tropical cyclone information at the moment</p>
              )}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 max-w-2xl border border-white/10">
            <p className="text-blue-200 font-medium">Weather data from Hong Kong Observatory</p>
            {weather && (
              <p className="mt-3 text-xs text-blue-300">
                Last API update: {new Date(weather.timestamp).toLocaleString('zh-TW')} 
                {weather.cached && ' (cached)'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
