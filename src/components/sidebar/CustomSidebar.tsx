import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ChevronDown, Plus, Menu, Sheet } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet";

const CustomSidebar = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [openLogout, setOpenLogout] = React.useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleNewEventClick = () => {
    setSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setSheetOpen(false);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-white overflow-hidden">
        <Sidebar
          side="left"
          className="fixed top-0 left-0 z-50 h-full bg-white transition-transform transform w-[75%] sm:w-64 lg:translate-x-0 lg:block hidden"
        >
          <SidebarHeader className="hover:bg-gray-200 transition-colors">
            <div className="relative flex items-center gap-2">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                img
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex flex-col text-left">
                    <div className="flex items-center">
                      <h1 className="text-lg font-bold mr-1">Nombre del evento</h1>
                      <ChevronDown className="w-4 h-4 text-muted-foreground" style={{ marginLeft: "auto" }} />
                    </div>
                    <p className="text-sm text-muted-foreground">Tipo de evento</p>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-3 h-60 flex flex-col justify-between">
                  <h2 className="text-sm font-medium mb-2">Mis eventos</h2>
                  <div className="space-y-2">
                    <button className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                      Nombre del evento
                    </button>
                  </div>
                  <div className="flex-grow"></div>
                  <button
                    className="flex items-center w-full text-left text-sm px-3 py-2 hover:bg-muted rounded"
                    onClick={handleNewEventClick}
                  >
                    <Plus className="w-4 h-4 mr-2 text-black" /> Nuevo evento
                  </button>
                </PopoverContent>
              </Popover>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <a href="#" className="block py-2 px-4 text-muted-foreground hover:bg-muted">
                Invitados
              </a>
              <a href="#" className="block py-2 px-4 text-muted-foreground hover:bg-muted">
                Hoteles
              </a>
              <a href="#" className="block py-2 px-4 text-muted-foreground hover:bg-muted">
                Detalles del evento
              </a>
              <a href="#" className="block py-2 px-4 text-muted-foreground hover:bg-muted">
                Contacto
              </a>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="hover:bg-gray-200 transition-colors">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex flex-col text-left w-full px-4 py-2">
                  <div className="flex items-center">
                    <p className="text-sm font-medium mr-auto">Nombre Usuario</p>
                    <ChevronDown className="w-4 h-4 text-muted-foreground ml-20" />
                  </div>
                  <p className="text-xs text-muted-foreground">Tipo de plan</p>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-60 p-3 h-auto flex flex-col justify-between">
                <h2 className="text-sm font-medium mb-2">Configuración</h2>
                <div className="space-y-2">
                  <button className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                    Actualizar a premium
                  </button>
                  <button className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                    Ajustes de cuenta
                  </button>
                </div>
                <button
                  onClick={() => setOpenLogout(true)} 
                  className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded"
                >
                  Cerrar sesión
                </button>
              </PopoverContent>
            </Popover>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 p-4">
          <SidebarTrigger
            className="p-2 bg-gray-100 rounded-full shadow-md fixed top-4 left-37 z-50 cursor-pointer hover:bg-gray-200"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </SidebarTrigger>
          {children}
        </main>

        <div className="fixed bottom-4 right-4 z-50 lg:hidden">
          <button
            className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => setOpenLogout(true)} 
          >
            Cerrar sesión
          </button>
        </div>

        <AlertDialog open={openLogout} onOpenChange={setOpenLogout}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Está seguro de que desea cerrar sesión?</AlertDialogTitle>
              <AlertDialogDescription>
                Una vez que cierre sesión, deberá iniciar sesión nuevamente para acceder a su cuenta.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenLogout(false)}>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>Cerrar sesión</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Nuevo Evento</SheetTitle>
            <SheetDescription>
              Crea un nuevo evento y configura sus detalles.
            </SheetDescription>
          </SheetHeader>

          
          <div className="flex flex-col space-y-4">
            <input type="text" placeholder="Nombre del evento" className="p-2 border rounded" />
            <input type="text" placeholder="Fecha y hora" className="p-2 border rounded" />
          </div>

          <SheetFooter>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleCloseSheet}
            >
              Guardar evento
            </button>
            <SheetClose
              className="px-4 py-2 bg-gray-200 text-black rounded"
              onClick={handleCloseSheet}
            >
              Cancelar
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </SidebarProvider>
  );
};

export default CustomSidebar;