export function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div
          className="bg-cover bg-center w-full h-screen"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="h-full w-full bg-black/30 p-8">
            <h1 className="text-4xl font-bold text-white">Bienvenido a nuestra plataforma</h1>
            <p className="text-white/90 mt-4 max-w-md">
              Descubre todas las posibilidades que tenemos para ti
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-8 h-screen">
          {children}
        </div>
      </div>
    );
  }
  