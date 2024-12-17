import React from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ChevronDown, Plus, Menu } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useNavigate } from "react-router-dom";



const CustomSidebar = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login");
  }


  return (
    <SidebarProvider>
      <div className="flex h-screen bg-[#ffffff]">
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
                      <ChevronDown
                        className="w-4 h-4 text-muted-foreground"
                        style={{ marginLeft: "auto" }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Tipo de evento</p>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-3 translate-x-60 -translate-y-12 h-60 flex flex-col justify-between">
                  <h2 className="text-sm font-medium mb-2">Mis eventos</h2>
                  <div className="space-y-2">
                    <button className="block w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                      Nombre del evento
                    </button>
                  </div>
                  <div className="flex-grow"></div>
                  <button className="flex items-center w-full text-left text-sm px-3 py-2 hover:bg-muted rounded">
                    <Plus className="w-4 h-4 mr-2 text-black" /> Nuevo evento
                  </button>
                </PopoverContent>
              </Popover>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <a
                href="#"
                className="block py-2 px-4 text-muted-foreground hover:bg-muted"
              >
                Invitados
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-muted-foreground hover:bg-muted"
              >
                Hoteles
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-muted-foreground hover:bg-muted"
              >
                Detalles del evento
              </a>
              <a
                href="#"
                className="block py-2 px-4 text-muted-foreground hover:bg-muted"
              >
                Contacto
              </a>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <AlertDialog>
              <AlertDialogTrigger>
                <button className="btn">Cerrar sesión</button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esto cerrará tu sesión.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={logOut}>Continuar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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
      </div>
    </SidebarProvider>
  );
};

export default CustomSidebar;
