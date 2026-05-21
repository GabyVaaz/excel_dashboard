export default function PorscheWomenDashboard() {
  const salesData = [
    { model: '911 Turbo S', year: 2024, city: 'Seattle', womenSales: 2 },
    { model: 'Macan S', year: 2021, city: 'Denver', womenSales: 2 },
    { model: 'Panamera 4', year: 2023, city: 'Miami', womenSales: 1 },
    { model: 'Cayenne E-Hybrid', year: 2022, city: 'San Diego', womenSales: 1 },
    { model: 'Macan GTS', year: 2024, city: 'Phoenix', womenSales: 1 },
    { model: '911 GT3', year: 2024, city: 'Las Vegas', womenSales: 1 },
    { model: 'Cayenne Turbo GT', year: 2024, city: 'Houston', womenSales: 1 },
    { model: 'Macan', year: 2021, city: 'Orlando', womenSales: 1 },
    { model: '911 Targa 4S', year: 2024, city: 'Minneapolis', womenSales: 1 },
    { model: 'Macan Electric', year: 2025, city: 'San Antonio', womenSales: 3 },
    { model: 'Macan T', year: 2023, city: 'Tulsa', womenSales: 3 },
    { model: 'Cayenne Coupe', year: 2023, city: 'New Orleans', womenSales: 3 },
    { model: '718 Boxster', year: 2022, city: 'Long Beach', womenSales: 2 },
    { model: '911 Dakar', year: 2025, city: 'Boston', womenSales: 1 },
  ];

  const totalWomen = 40;

  const mostPopular = { model: 'Macan Electric', womenSales: 3 };

  const leastPopular = { model: '911 Dakar', womenSales: 1 };

  const fashionCity = 'Seattle';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120015] via-[#2d0036] to-[#54005f] text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-pink-300 to-purple-300 text-transparent bg-clip-text">
              Porsche Women Analytics
            </h1>
            <p className="text-pink-100 mt-2 text-lg">
              Luxury performance meets feminine power.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 shadow-2xl">
            <p className="text-sm text-pink-200 uppercase tracking-widest">
              Stuttgart Inspired UI
            </p>
            <p className="text-2xl font-bold mt-1">GirlBoss Dashboard</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          <div className="bg-white/10 border border-pink-300/10 rounded-3xl p-5 backdrop-blur-xl shadow-xl">
            <label className="text-pink-200 text-sm uppercase tracking-wider">
              Porsche Model
            </label>
            <select className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white outline-none">
              <option>All Models</option>
              {salesData.map((item, idx) => (
                <option key={idx}>{item.model}</option>
              ))}
            </select>
          </div>

          <div className="bg-white/10 border border-pink-300/10 rounded-3xl p-5 backdrop-blur-xl shadow-xl">
            <label className="text-pink-200 text-sm uppercase tracking-wider">
              Model Year
            </label>
            <select className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white outline-none">
              <option>All Years</option>
              {[2022, 2023, 2024, 2025].map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="bg-white/10 border border-pink-300/10 rounded-3xl p-5 backdrop-blur-xl shadow-xl">
            <label className="text-pink-200 text-sm uppercase tracking-wider">
              City
            </label>
            <select className="w-full mt-3 bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white outline-none">
              <option>All Cities</option>
              {salesData.map((item, idx) => (
                <option key={idx}>{item.city}</option>
              ))}
            </select>
          </div>

          <div className="bg-white/10 border border-pink-300/10 rounded-3xl p-5 backdrop-blur-xl shadow-xl">
            <label className="text-pink-200 text-sm uppercase tracking-wider">
              Women Sales
            </label>
            <input
              type="range"
              min="0"
              max="200"
              className="w-full mt-5 accent-pink-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-200/10 rounded-[32px] p-6 backdrop-blur-xl shadow-2xl">
            <p className="text-pink-200 uppercase tracking-widest text-sm">
              Total Women Buyers
            </p>
            <h2 className="text-5xl font-black mt-4">{totalWomen}</h2>
            <p className="text-pink-100 mt-3">
              Mulheres que compraram Porsche
            </p>
          </div>

          <div className="bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 border border-pink-200/10 rounded-[32px] p-6 backdrop-blur-xl shadow-2xl">
            <p className="text-pink-200 uppercase tracking-widest text-sm">
              Most Popular Model
            </p>
            <h2 className="text-4xl font-black mt-4">{mostPopular.model}</h2>
            <p className="text-pink-100 mt-3">
              {mostPopular.womenSales} vendas femininas
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-pink-200/10 rounded-[32px] p-6 backdrop-blur-xl shadow-2xl">
            <p className="text-pink-200 uppercase tracking-widest text-sm">
              Least Popular
            </p>
            <h2 className="text-4xl font-black mt-4">{leastPopular.model}</h2>
            <p className="text-pink-100 mt-3">
              {leastPopular.womenSales} vendas femininas
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-400/20 to-violet-500/20 border border-pink-200/10 rounded-[32px] p-6 backdrop-blur-xl shadow-2xl">
            <p className="text-pink-200 uppercase tracking-widest text-sm">
              Fashion City
            </p>
            <h2 className="text-4xl font-black mt-4">{fashionCity}</h2>
            <p className="text-pink-100 mt-3">
              Cidade mais fashion entre compradoras
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold">Popularidade dos Modelos</h3>
                <p className="text-pink-100 mt-1">
                  Modelos mais comprados por mulheres
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-pink-400/20 flex items-center justify-center text-2xl">
                💖
              </div>
            </div>

            <div className="space-y-5">
              {salesData.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{item.model}</span>
                    <span>{item.womenSales}</span>
                  </div>
                  <div className="w-full h-4 bg-black/20 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                      style={{ width: `${item.womenSales / 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-[32px] p-8 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold">Insights de Negócio</h3>
                <p className="text-pink-100 mt-1">
                  Tendências femininas no mercado Porsche
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-400/20 flex items-center justify-center text-2xl">
                ✨
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/20 rounded-3xl p-5 border border-white/5">
                <p className="text-pink-200 text-sm uppercase tracking-wider">
                  Modelo mais vendido
                </p>
                <h4 className="text-2xl font-bold mt-2">{mostPopular.model}</h4>
                <p className="text-pink-100 mt-2">
                  Modelo com maior número de compras femininas registradas no dataset.
                </p>
              </div>

              <div className="bg-black/20 rounded-3xl p-5 border border-white/5">
                <p className="text-pink-200 text-sm uppercase tracking-wider">
                  Ano com mais saída
                </p>
                <h4 className="text-2xl font-bold mt-2">2024</h4>
                <p className="text-pink-100 mt-2">
                  2024 foi o ano com maior número de compras Porsche entre mulheres.
                </p>
              </div>

              <div className="bg-black/20 rounded-3xl p-5 border border-white/5">
                <p className="text-pink-200 text-sm uppercase tracking-wider">
                  Cidade Fashionista
                </p>
                <h4 className="text-2xl font-bold mt-2">{fashionCity}</h4>
                <p className="text-pink-100 mt-2">
                  Mulheres com maior adesão ao lifestyle Porsche.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-[36px] p-8 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col xl:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-4xl font-black leading-tight max-w-2xl">
              “Luxury is not just speed. It is identity, confidence and power.”
            </h3>
            <p className="text-pink-100 mt-4 text-lg">
              Dashboard inspirada na estética Porsche Stuttgart com visual moderno, feminino e premium.
            </p>
          </div>

          <button className="bg-gradient-to-r from-pink-400 to-purple-500 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300">
            Explore Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
