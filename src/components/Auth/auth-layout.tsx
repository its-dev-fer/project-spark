import img from '../img/img.png';

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      
      <div className="w-1/2 h-screen">
        <img
          src={img}
          alt="Imagen de fondo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 h-screen flex items-center justify-center bg-white">
        {children}
      </div>
    </div>
  );
}
